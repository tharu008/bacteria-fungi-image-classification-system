from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import os
import requests
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np
import pymongo
from bson import ObjectId

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


        #db connection
        # Creating a MongoClient object and connect with the host
        myclient = pymongo.MongoClient("mongodb://localhost:27017/")

        print(myclient.list_database_names())
        

        # access the database
        db = myclient["pathogenID"]

        # accessing the collection of the database
        collection = db["class_information"]

        # finding the document with class_id equals to predicted_class from the model
        document = collection.find_one({"class_id" : predicted_class})

        if document:
            # Remove the ObjectId field and convert the document to a dictionary
            document_dict = dict(document)
            document_dict.pop('_id', None)

            print("Retrieved Document:", document_dict)

            return jsonify({"document": document_dict})
        else:
            return jsonify({'message': 'No matching document found for predicted_class'})



if __name__ == '__main__':
    app.run(debug=True)


