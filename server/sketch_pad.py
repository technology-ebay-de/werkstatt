from flask import Blueprint


bp = Blueprint('sketch_pad', __name__, url_prefix='/sketchpad')

@bp.route("/")
def hello():
    return "Hello Werkstatt!"
