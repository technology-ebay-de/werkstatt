import os
from flask import Blueprint, send_file


user = Blueprint('user', __name__, url_prefix='/api/user')


@user.route('/current/')
def serve():
    return send_file('data/user.json')
