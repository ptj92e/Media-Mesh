from __main__ import db
from datetime import datetime
from flask import jsonify

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    artform = db.Column(db.String(50), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, name, email, password, artform):
        self.name = name
        self.email = email
        self.password = password
        self.artform = artform

    def __repr__(self):
        return {"id": self.id,
                "name": self.name,
                "email": self.email,
                "artform": self.artform}