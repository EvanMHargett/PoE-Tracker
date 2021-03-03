from .db import db

class Flip(db.Model):
  __tablename__ = 'flips'

  id = db.Column(db.Integer, primary_key = True)
  input1Id = db.Column(db.Integer, db.ForeignKey("items.id"),nullable = False)
  input1Quantity = db.Column(db.Integer, nullable = False)
  input2Id = db.Column(db.Integer, db.ForeignKey("items.id"))
  input2Quantity = db.Column(db.Integer)
  outputId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable = False)
  outputQuantity = db.Column(db.Integer, nullable = False)
  cost = db.Column(db.Integer, nullable = False)
  revenue = db.Column(db.Integer, nullable = False)
  trades = db.Column(db.Integer, nullable = False)
  profit = db.Column(db.Integer, nullable = False)

  input1 = db.relationship("Item", foreign_keys=[input1Id])
  input2 = db.relationship("Item", foreign_keys=[input2Id])
  output = db.relationship("Item", foreign_keys=[outputId])