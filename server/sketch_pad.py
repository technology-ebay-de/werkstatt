import os
import json
from flask import Blueprint, jsonify, send_file


sketch_pad = Blueprint('sketch_pad', __name__, url_prefix='/api/sketchpad')
parsedData = []
dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(dir, 'data', 'sketch-pad.json')) as f:
    parsedData = json.load(f)

@sketch_pad.route('/')
def list():
    return jsonify(parsedData)

@sketch_pad.route('/<id>/')
def get(id):
    return jsonify(parsedData[id])
