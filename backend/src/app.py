# app.py
from flask import Flask
from flask_cors import CORS
import pymongo
from controller import ImageController
import logging
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Connect to MongoDB
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = myclient["pathogenID"]
class_info_collection = db["class_information"]
remedies_collection = db["remedies"]

# Set up logging
log_file = 'app.log'
logging.basicConfig(filename=log_file, level=logging.DEBUG)

# Initialize controller
image_controller = ImageController(app, 'D:\\University\\RESEARCH\\Research Project\\backend\\src\\ml_model\\inception-v3_trained_model.h5', UPLOAD_FOLDER, class_info_collection, remedies_collection, db)

# Route
@app.route('/upload', methods=['POST'])
def upload_file():
    return image_controller.upload_file()

if __name__ == '__main__':
    app.run(debug=True)
