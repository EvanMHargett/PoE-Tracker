from .db import db

class Item(db.Model, UserMixin):
  __tablename__ = 'items'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(55), nullable = False)
  priceInC = db.Column(db.Integer, nullable = False)
