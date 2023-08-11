from flask import Flask, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/pathogenid'
mongo = PyMongo(app)
CORS(app)

#creating a collection
db = mongo.db.image
#@app.route("/")
#def index():
#    return "Hello, World!"



if __name__ == "__main__":
    app.run(debug=True)