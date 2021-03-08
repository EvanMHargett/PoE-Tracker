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
    print("dir request", request.get_data())
    flipInfo = request.get_data()
    decoded = flipInfo.decode('ascii')
    print("decoded ", decoded)
    jsonObj = json.loads(decoded)
    print("JSON OBJ ", jsonObj)
    flip = Flip(
        input1Id=jsonObj["input1Id"],
        input1Quantity=jsonObj["input1Quantity"],
        # input2Id=jsonObj.input2Id,
        # input2Quantity=jsonObj.input2Quantity,
        outputId=jsonObj["outputId"],
        outputQuantity=jsonObj["outputQuantity"],
        trades=1,
        cost=1,
        revenue=1,
        profit=1,
    )
    db.session.add(flip)
    db.session.commit()

    return "Adedd flip"