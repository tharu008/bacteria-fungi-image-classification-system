from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import os
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np
import pymongo
from bson import ObjectId
from gridfs import GridFS
import base64

app = Flask(__name__)
CORS(app)

#upload file
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load the trained model
model = keras.models.load_model('D:\\University\\RESEARCH\\Research Project\\backend\\src\\model\\inception-v3_trained_model.h5')
model.summary()

# Connect to MongoDB
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = myclient["pathogenID"]
class_info_collection = db["class_information"]
remedies_collection = db["remedies"]


# Route
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)

        # Preprocess the image
        image = Image.open(filename)
        image = image.resize((500, 500))  # Replace with your model's input size
        image = np.array(image) / 255.0  # Normalize
        image = np.expand_dims(image, axis=0)  # Add batch dimension

        # Perform inference using the model
        prediction = model.predict(image)

        # If you have class labels, you can get the class with the highest probability
        predicted_class = int(np.argmax(prediction))
        print("Class Label: ", predicted_class)


        # finding the document with class_id equals to predicted_class from the model
        document = class_info_collection.find_one({"class_id" : predicted_class})

        if document:
            # Remove the ObjectId field and convert the document to a dictionary
            document_dict = dict(document)
            document_dict.pop('_id', None)

            # Fetch related remedies based on the remedies_ids in the document
            related_remedy_ids = document_dict.get("remedies_id", [])
            print("Related Remedy IDs:", related_remedy_ids)
            related_remedies = remedies_collection.find({"id": {"$in": related_remedy_ids}})

            print("Retrieved Document:", document_dict)

            remedies_list = []
            for remedy in related_remedies:
                # Remove the ObjectId field and convert the remedy document to a dictionary
                remedy_dict = dict(remedy)
                remedy_dict.pop('_id', None)
                
                # Encode the image binary data to Base64
                fs = GridFS(db)
                image_binary = fs.get(ObjectId(remedy_dict['image'])).read()
                image_base64 = base64.b64encode(image_binary).decode('utf-8')
                remedy_dict['image'] = image_base64  # Store the Base64 image in the dictionary
                
                remedies_list.append(remedy_dict)
            
            # Add remedies information to the document
            document_dict["remedies"] = remedies_list

            print("Retrieved Document with remedies:", document_dict)

            # Delete the uploaded image file after sending the response
            os.remove(filename)

            return jsonify({"document": document_dict})
        else:
            return jsonify({'message': 'No matching document found for predicted_class'})



if __name__ == '__main__':
    app.run(debug=True)


