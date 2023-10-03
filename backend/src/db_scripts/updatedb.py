import pymongo
from gridfs import GridFS
import os

# Connect to MongoDB server
client = pymongo.MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB server URL

# Select the database
db = client["pathogenID"]

# Select the collection
collection = db["remedies"]

# Define a function to update images in GridFS and return their ObjectIds
def update_image(doc_id, file_path):
    fs = GridFS(db)
    with open(file_path, 'rb') as image_file:
        image_id = fs.put(image_file, filename=os.path.basename(file_path))
    return image_id

# Update document with ID 1
new_link_1 = "https://www.marknature.com/products/natamycin-pure-powder"
new_image_path_1 = "images/natamycin2.jpg"
new_image_id_1 = update_image(1, new_image_path_1)

collection.update_one(
    {"id": 1},
    {
        "$set": {
            "link": new_link_1,
            "image_path": new_image_path_1,
            "image": new_image_id_1
        }
    }
)

# Update document with ID 3
new_link_3 = "https://www.bioind.com/worldwide/gentamycin-sulfate-solution/"
new_image_path_3 = "images/gentamicin2.jpg"
new_image_id_3 = update_image(3, new_image_path_3)

collection.update_one(
    {"id": 3},
    {
        "$set": {
            "link": new_link_3,
            "image_path": new_image_path_3,
            "image": new_image_id_3
        }
    }
)

# Update document with ID 4
new_link_4 = "https://www.rpicorp.com/products/zymo-products/antibiotics/chloramphenicol-solution-5-ml-1-x-5-ml.html"
new_image_path_4 = "images/chlorophenical 2.jpg"
new_image_id_4 = update_image(4, new_image_path_4)

collection.update_one(
    {"id": 4},
    {
        "$set": {
            "link": new_link_4,
            "image_path": new_image_path_4,
            "image": new_image_id_4
        }
    }
)

print("Successfully updated documents in MongoDB")
