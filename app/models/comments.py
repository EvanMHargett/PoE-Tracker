from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  flipId = db.Column(db.Integer, db.ForeignKey("flips.id"), nullable = False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  content = db.Column(db.String, nullable = False)
