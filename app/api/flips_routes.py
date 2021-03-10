from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, db
import json


flip_routes = Blueprint('flips', __name__)

@flip_routes.route('/')
def getAllFlips():
    flips = Flip.query.all()
    flipsDict = {}
    for flip in flips:
        flipsDict[flip.id] = flip.to_dict()

    return flipsDict

@flip_routes.route('/', methods=["POST"])
def createFlip():
    flipInfo = request.get_data()
    decoded = flipInfo.decode('ascii')
    jsonObj = json.loads(decoded)
    input1 = Item.query.filter_by(id=jsonObj["input1Id"]).first()
    output = Item.query.filter_by(id=jsonObj["outputId"]).first()

    flip = Flip(
        input1Id=jsonObj["input1Id"],
        input1Quantity=jsonObj["input1Quantity"],
        # input2Id=jsonObj.input2Id,
        # input2Quantity=jsonObj.input2Quantity,
        outputId=jsonObj["outputId"],
        outputQuantity=jsonObj["outputQuantity"],
        trades=int(jsonObj["input1Quantity"])+ 1,
        cost=input1.priceInC * int(jsonObj["input1Quantity"]),
        revenue=output.priceInC * int(jsonObj["outputQuantity"]),
        profit= output.priceInC * int(jsonObj["outputQuantity"]) - (input1.priceInC * int(jsonObj["input1Quantity"])),
    )
    db.session.add(flip)
    db.session.commit()

    return "Adedd flip"