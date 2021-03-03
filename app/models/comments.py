from .db import db

class Comment(db.Model, UserMixin):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  flipId = db.Column(db.Integer, nullable = False)
  userId = db.Column(db.Integer, nullable = False)
  content = db.Column(db.String, nullable = False)
