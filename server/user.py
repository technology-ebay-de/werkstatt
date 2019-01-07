import os
from flask import Blueprint, send_file


user = Blueprint('user', __name__, url_prefix='/api/user')


@user.route('/current/')
def serve():
    from .model import User
    print('Found users: ' + str(len(User.query.all())))
    return send_file('data/user.json')
