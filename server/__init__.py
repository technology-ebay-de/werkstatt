import os

from flask import Flask


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://werkstatt:werkstatt@localhost/werkstatt'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from .db import db, migrate
    db.init_app(app)
    migrate.init_app(app, db)

    from .page import page
    app.register_blueprint(page)

    from .user import user
    app.register_blueprint(user)

    from .sketch_pad import sketch_pad
    app.register_blueprint(sketch_pad)

    return app
