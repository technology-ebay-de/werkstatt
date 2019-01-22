import os
import json
from flask import Blueprint, jsonify, send_from_directory, request


sketch_pad = Blueprint('sketch_pad', __name__, url_prefix='/sketchpad')
parsedData = []
dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(dir, 'data', 'sketch-pad.json')) as f:
    parsedData = json.load(f)

@sketch_pad.route('')
def list():
    if (request.accept_mimetypes.accept_html):
        return send_from_directory('static', 'index.html')
    else:
        return jsonify(parsedData)

@sketch_pad.route('/<id>')
def get(id):
    if (request.accept_mimetypes.accept_html):
        return send_from_directory('static', 'index.html')
    else:
        return jsonify(parsedData[id])
