from .db import db

class Favorite(db.Model):
  __tablename__ = 'favorites'

  id = db.Column(db.Integer, primary_key = True)
  flipId = db.Column(db.Integer, db.ForeignKey("flips.id"), nullable = False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)

  def to_dict(self):
      return {
          "id": self.id,
          "flipId": self.flipId,
          "userId": self.userId,
      }
