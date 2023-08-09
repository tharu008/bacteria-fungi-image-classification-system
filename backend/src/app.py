from flask import Flask, jsonify;
from flask_pymongo import PyMongo, ObjectId;
from flask_cors import CORS;

app = Flask(__name__);
app.config['MONGO_URI'] = 'mongodb://localhost/pythonreactdb';

