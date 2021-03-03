from .db import db

class Favorites(db.Model, UserMixin):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key = True)
  flipId = db.Column(db.Integer, nullable = False)
  userId = db.Column(db.Integer, nullable = False)
