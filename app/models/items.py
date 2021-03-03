from .db import db

class Item(db.Model):
  __tablename__ = 'items'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(50), nullable = False)
  priceInC = db.Column(db.Numeric(10, 2), nullable = False)
