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
        "id": 3,
        "type": "antibiotic",
        "name": "Gentamicin",
        "description": "Gentamicin, a potent aminoglycoside antibiotic, proves to be a valuable asset in the realm of tissue culture. Renowned for its broad-spectrum activity against both Gram-negative and some Gram-positive bacteria, gentamicin acts by disrupting protein synthesis in bacterial cells. In tissue culture, where maintaining a sterile environment is paramount, gentamicin serves as an effective defense against bacterial contamination. Its mechanism of action, targeting the bacterial ribosomes, not only ensures its efficacy but also contributes to its specificity, sparing eukaryotic cells, including those of plants, from significant interference. With a well-established safety profile and minimal impact on mammalian and plant cells, gentamicin stands as a reliable choice for researchers and practitioners aiming to preserve the purity and integrity of cell cultures in various tissue culture applications.",
        "link": "https://www.healthguard.lk/bactigen",
        "image_path": "images/bactigen gentamacin.jpg"  # Adjust the path to your image file
    },
    {
        "id": 4,
        "type": "antibiotic",
        "name": "Chloramphenicol",
        "description": "Chloramphenicol, a bacteriostatic antibiotic, has proven efficacy as a reliable antimicrobial agent in tissue culture applications. With a broad spectrum of activity against both Gram-positive and Gram-negative bacteria, Chloramphenicol inhibits protein synthesis in bacterial cells, impeding their growth and division. In tissue culture, where maintaining aseptic conditions is critical, Chloramphenicol serves as an effective safeguard against bacterial contamination. Its stability in solution and relatively low cytotoxicity to eukaryotic cells, including plant and animal cells, make it suitable for long-term use in cell culture media. Researchers often incorporate Chloramphenicol into their protocols to ensure the integrity and purity of cell cultures, attesting to its importance as a dependable antibiotic in the field of tissue culture.",
        "link": "https://usnpharmaceuticals.lk/Cloze-drop",
        "image_path": "images/chlorophenical  antibiotic.jpg"  # Adjust the path to your image file
    }
]

# Insert documents into the collection and store image ObjectIds
for item in data:
    item['image'] = insert_image(item['image_path'])

# Insert the list of documents into the collection
collection.insert_many(data)
print("Successfully inserted documents with images into MongoDB")
