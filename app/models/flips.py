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

  def to_dict(self):
    flipDict = {
        "id": self.id,
        "cost": self.cost,
        "trades": self.trades,
        "revenue": self.revenue,
        "profit": self.profit,
        "input1Id": self.input1Id,
        "input1Name": self.input1.name,
        "input1Quantity": self.input1Quantity,
        "outputId": self.outputId,
        "outputName": self.output.name,
        "outputQuantity": self.outputQuantity,
    }
    if self.input2:
        flipDict["input2Name"] = self.input2.name 
        flipDict["input2Quantity"] = self.input2Quantity    
    else:
        flipDict["input2Name"] = ""
        flipDict["input2Quantity"] = ""   
    return flipDict