from __main__ import db
from datetime import datetime

class Comment(db.Model):
    __tablename__ = "comment"
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(300), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, comment, user_id, post_id):
        self.comment = comment
        self.user_id = user_id
        self.post_id = post_id

    def __repr__(self):
        return "<Comment %r>" % self.id