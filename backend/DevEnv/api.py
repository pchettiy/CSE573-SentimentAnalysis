# -*- coding: utf-8 -*-
"""
Instructions to run on terminal

pip install transformers
pip install Flask_Cors
pip install flask-ngrok
pip install pyngrok==4.1.1
ngrok authtoken 2I9NnkYkN2IApaxrzazjXt3Kl0r_7gNNdQdNiK9LyNDrL37Nv
"""


from transformers import TFAutoModel, BertTokenizer
from flask_ngrok import run_with_ngrok
from tensorflow import keras
import tensorflow as tf
import numpy as np
from sklearn.preprocessing import LabelEncoder
from flask import Flask, jsonify, request
from flask_cors import CORS

def getSentiment(tweet):
  test_encoded_inputs = tokenizer([tweet],
                                 add_special_tokens = True,
                                 padding='max_length', 
                                 truncation=True, 
                                 max_length=30, 
                                 return_token_type_ids=False,
                                 return_tensors = 'tf')
  encoder = LabelEncoder()
  encoder.classes_ = np.load('BERT_label_encoder_classes.npy', allow_pickle=True)
  test_dataset = tf.data.Dataset.from_tensor_slices(dict(test_encoded_inputs))
  test_ds = test_dataset.batch(1)
  test_pred = modelLoaded.predict(test_ds)
  test_pred_flatten = np.argmax(test_pred, axis = 1)
  test_pred_flatten_labelled = encoder.inverse_transform(test_pred_flatten)
  return test_pred_flatten_labelled[0]

app= Flask(__name__)
bert = TFAutoModel.from_pretrained('bert-base-uncased')
modelLoaded = keras.models.load_model('BertNewModel_1126_lessdata.h5' ,custom_objects={'TFBertModel':bert})
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', do_lower_case=True)



@app.route("/name", methods=["POST"])
def setName():
    if request.method=='POST':
        posted_data = request.get_json()
        data = posted_data['tweet']
        predicted_json = {
            "sentiment": getSentiment(data)
        }
        return predicted_json
        
@app.route("/message", methods=["GET"])
def message():
    posted_data = request.get_json()
    name = posted_data['name']
    return jsonify(" Hope you are having a good time " +  name + "!!!")
#  main thread of execution to start the server

run_with_ngrok(app)
app.run()