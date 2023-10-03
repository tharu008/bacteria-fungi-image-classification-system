# controller.py
from flask import request, jsonify
import os
import logging
from model import ImageModel
from gridfs import GridFS
from bson import ObjectId
import base64

class ImageController:
    def __init__(self, app, model_path, upload_folder, class_info_collection, remedies_collection, db):
        self.app = app
        self.model = ImageModel(model_path)
        self.upload_folder = upload_folder
        self.class_info_collection = class_info_collection
        self.remedies_collection = remedies_collection
        self.db = db

    def upload_file(self):
        try:
            if 'image' not in request.files:
                return jsonify({'error': 'No file part'})

            file = request.files['image']

            if file.filename == '':
                return jsonify({'error': 'No selected file'})

            if file:
                filename = os.path.join(self.upload_folder, file.filename)
                file.save(filename)

                image = self.model.preprocess_image(filename)
                predicted_class = self.model.predict_class(image)
                logging.info(f"Class Label: {predicted_class}")

                document = self.class_info_collection.find_one({"class_id": predicted_class})

                if document:
                    document_dict = dict(document)
                    document_dict.pop('_id', None)

                    related_remedy_ids = document_dict.get("remedies_id", [])
                    related_remedies = self.remedies_collection.find({"id": {"$in": related_remedy_ids}})

                    remedies_list = []
                    for remedy in related_remedies:
                        remedy_dict = dict(remedy)
                        remedy_dict.pop('_id', None)

                        fs = GridFS(self.db)
                        image_binary = fs.get(ObjectId(remedy_dict['image'])).read()
                        image_base64 = base64.b64encode(image_binary).decode('utf-8')
                        remedy_dict['image'] = image_base64

                        remedies_list.append(remedy_dict)

                    document_dict["remedies"] = remedies_list

                    #logging.info(f"Retrieved Document with remedies: {document_dict}")

                    os.remove(filename)

                    return jsonify({"document": document_dict})
                else:
                    return jsonify({'message': 'No matching document found for predicted_class'})

        except Exception as e:
            logging.error(f"An error occurred: {str(e)}")
            return jsonify({'error': 'Internal Server Error'})
