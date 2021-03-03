from .db import db

class Flip(db.Model, UserMixin):
  __tablename__ = 'flips'

  id = db.Column(db.Integer, primary_key = True)
  input1Id = db.Column(db.Integer, nullable = False)
  input1Quantity = db.Column(db.Integer, nullable = False)
  input2Id = db.Column(db.Integer)
  input2Quantity = db.Column(db.Integer)
  outputId = db.Column(db.Integer, nullable = False)
  outputQuantity = db.Column(db.Integer, nullable = False)
  cost = db.Column(db.Integer, nullable = False)
  revenue = db.Column(db.Integer, nullable = False)
  trades = db.Column(db.Integer, nullable = False)
  profit = db.Column(db.Integer, nullable = False)