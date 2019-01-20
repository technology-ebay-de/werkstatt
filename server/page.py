import os
from flask import Blueprint, send_from_directory


page = Blueprint('page', __name__)


@page.route('/')
def home_page():
    return send_from_directory('static', 'index.html')
