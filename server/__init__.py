import os

from flask import Flask


def create_app(test_config=None):
    app = Flask(__name__, static_url_path='')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://werkstatt:werkstatt@db/werkstatt'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from .model import db
    db.init_app(app)

    from .db import migrate
    migrate.init_app(app, db)

    from .page import page
    app.register_blueprint(page)

    from .user import user
    app.register_blueprint(user)

    from .sketch_pad import sketch_pad
    app.register_blueprint(sketch_pad)

    return app
