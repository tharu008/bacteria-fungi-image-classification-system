from flask import Flask, request, jsonify
import os
import requests
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np

app = Flask(__name__)

#upload file
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load the trained model
model = keras.models.load_model('D:\\University\\RESEARCH\\Research Project\\backend\\src\\model\\inception-v3_trained_model.h5')

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


        return jsonify({'message': 'File uploaded successfully'})
    
@app.route('/results', methods=['GET'])
def get_predicted_class():
    #image
    file = request.files['image']
    filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
     # Preprocess the image
    image = Image.open(filename)
    image = image.resize((500, 500))  # Replace with your model's input size
    image = np.array(image) / 255.0  # Normalize
    image = np.expand_dims(image, axis=0)  # Add batch dimension

    # Perform inference using the model
    prediction = model.predict(image)

    # If you have class labels, you can get the class with the highest probability
    predicted_class = np.argmax(prediction)

    # Include the predicted class in the response
    # response_data = {
    #     'message': 'File uploaded successfully',
    #     'predicted_class': predicted_class
    # }
    return jsonify({'predicted_class': predicted_class})


if __name__ == '__main__':
    app.run(debug=True)
