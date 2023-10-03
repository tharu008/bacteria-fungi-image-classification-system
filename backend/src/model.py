# model.py
from tensorflow import keras
from PIL import Image
import numpy as np

class ImageModel:
    def __init__(self, model_path):
        self.model = keras.models.load_model(model_path)

    def preprocess_image(self, image_path):
        image = Image.open(image_path)
        image = image.resize((500, 500))  # Replace with your model's input size
        image = np.array(image) / 255.0  # Normalize
        image = np.expand_dims(image, axis=0)  # Add batch dimension
        return image

    def predict_class(self, image):
        prediction = self.model.predict(image)
        return int(np.argmax(prediction))
