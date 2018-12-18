import os
from flask import Blueprint, send_from_directory


bp = Blueprint('sketch_pad', __name__, url_prefix='/sketchpad')

@bp.route('/', defaults={'path': ''})
@bp.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists('static' + path):
        return send_from_directory('static', path)
    else:
        return send_from_directory('static', 'index.html')
