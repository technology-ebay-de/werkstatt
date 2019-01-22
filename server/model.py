from sqlalchemy.dialects.postgresql import UUID, TEXT
from .db import db


class User(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True, nullable=False)
    avatar = db.Column(db.String(255))

    def __repr__(self):
        return '<User %r>' % self.username


class SketchPad(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True)
    title = db.Column(db.String(255))
    code_blocks = db.relationship("CodeBlock")


class CodeBlock(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True)
    code = db.Column(TEXT)
    sketch_pad_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'sketch_pad.id'), nullable=False)
