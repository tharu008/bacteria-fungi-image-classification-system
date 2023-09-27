import pymongo
from gridfs import GridFS
import os

# Connect to MongoDB server
client = pymongo.MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB server URL

# Select the database
db = client["pathogenID"]

# Select the collection
collection = db["remedies"]

# Define a function to insert images into GridFS and return their ObjectIds
def insert_image(file_path):
    fs = GridFS(db)
    with open(file_path, 'rb') as image_file:
        image_id = fs.put(image_file, filename=os.path.basename(file_path))
    return image_id

# Define the data with image file paths
data = [
    {
        "id": 0,
        "type": "biocide",
        "name": "Plant Preservative Mixture (PPM™)",
        "description": "PPM™, short for Plant Preservative Mixture™, is a heat-stable preservative and biocide specifically formulated to effectively prevent or minimize microbial contamination in plant tissue culture...",
        "link": "https://www.plantcelltechnology.com/plant-preservative-mixture-ppm-1/",
        "image_path": "images/PPM.jpg"  # Adjust the path to your image file
    },
    {
        "id": 1,
        "type": "fungicide",
        "name": "Natamycin",
        "description": "Natamycin is a natural antifungal agent derived from Streptomyces natalensis...",
        "link": "https://www.indiamart.com/proddetail/natamycin-5ml-drop-25978097812.html",
        "image_path": "images/Natamycin Fungicide.jpg"  # Adjust the path to your image file
    },
    {
        "id": 2,
        "type": "fungicide",
        "name": "Voriconazole",
        "description": "Voriconazole is an antifungal medication used to treat various fungal infections...",
        "link": "https://www.scientificlabs.co.uk/product/32483-25MG",
        "image_path": "images/Voriconazole fungicide.jpeg"  # Adjust the path to your image file
    }
]

# Insert documents into the collection and store image ObjectIds
for item in data:
    item['image'] = insert_image(item['image_path'])

# Insert the list of documents into the collection
collection.insert_many(data)
print("Successfully inserted documents with images into MongoDB")
