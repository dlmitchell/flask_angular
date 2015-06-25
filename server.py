from flask import Flask, request, send_from_directory, render_template, jsonify
from flask.ext.triangle import Triangle
import json
import urllib2

app = Flask(__name__)
Triangle(app)
@app.route("/")
def index():
    return render_template('index.html')    
    
@app.route("/user")
def data():
    data = json.loads(urllib2.urlopen("http://api.randomuser.me/").read())    
    return jsonify(data) 

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, use_reloader=False, port=8080)