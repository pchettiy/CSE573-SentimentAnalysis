from flask import Flask, jsonify, request
from flask_cors import CORS
# initialize our Flask application
app= Flask(__name__)
cors = CORS(app)



@app.route("/name", methods=["POST"])
def setName():
    if request.method=='POST':
        posted_data = request.get_json()
        data = posted_data['tweet']
        predicted_json = {
            "sentiment": "positive"
        }
        return predicted_json
@app.route("/message", methods=["GET"])
def message():
    posted_data = request.get_json()
    name = posted_data['name']
    return jsonify(" Hope you are having a good time " +  name + "!!!")
#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)
