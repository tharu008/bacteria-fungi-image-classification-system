import pymongo

# connect to mongodb server
client = pymongo.MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB server URL

# select the databse
db = client["pathogenID"]

# select the collection
collection = db["class_information"]

# define a document to insert
data = [
    {
        "class_id": 0,
        "class_label": "Aspergillus",
        "type": "Fungi",
        "domain": "Eukaryota",
        "kingdom": "Fungi",
        "division": "Ascomycota",
        "class": "Eurotiomycetes",
        "order": "Eurotiales",
        "family": "Trichocomaceae",
        "genus": "Aspergillus"
    },
    {
        "class_id": 1,
        "class_label": "Penicillium",
        "type": "Fungi",
        "domain": "Eukaryota",
        "kingdom": "Fungi",
        "division": "Ascomycota",
        "class": "Eurotiomycetes",
        "order": "Eurotiales",
        "family": "Trichocomaceae",
        "genus": "Penicillium"
    },
    {
        "class_id": 2,
        "class_label": "Proteus",
        "type": "Bacteria",
        "domain": "Bacteria",
        "phylum": "Pseudomonadota",
        "class": "Gammaproteobacteria",
        "order": "Enterobacterales",
        "family": "Enterobacteriaceae",
        "genus": "Proteus",
        "gram_stain": "Gram-negative"
    },
    {
        "class_id": 3,
        "class_label": "Staphylococcus",
        "type": "Bacteria",
        "domain": "Bacteria",
        "phylum": "Bacillota",
        "class": "Bacilli",
        "order": "Bacillales",
        "family": "Staphylococcaceae",
        "genus": "Staphylococcus",
        "gram_stain": "Gram-positive"
    }
]

# Insert the list of documents into the collection
collection.insert_many(data)
print("Successfully entered")