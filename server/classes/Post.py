from __main__ import db
from datetime import datetime

class Post(db.Model):
    __tablename__ = "post"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    post = db.Column(db.String(300), nullable=False)
    url = db.Column(db.String(300), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, title, post, user_id):
        self.title = title
        self.post = post
        self.url = url
        self.user_id = user_id
    
    def __repr__(self):
        return "<Post %r>" % self.id