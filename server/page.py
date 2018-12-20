import os
from flask import Blueprint, send_from_directory


page = Blueprint('page', __name__)


@page.route('/', defaults={'path': ''})
@page.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists('static' + path):
        return send_from_directory('static', path)
    else:
        return send_from_directory('static', 'index.html')
