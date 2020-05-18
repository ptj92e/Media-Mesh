from __main__ import db
from datetime import datetime

class Friend(db.Model):
    __tablename__ = "friend"
    id = db.Column(db.Integer, primary_key=True)
    user_id_1 = db.Column(db.Integer, db.ForeignKey("user.id"))
    user_id_2 = db.Column(db.Integer, db.ForeignKey("user.id"))
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, user_id_1, user_id_2):
        self.user_id_1 = user_id_1
        self.user_id_2 = user_id_2

    def __repr__(self):
        return "<Friend %r>" % self.id