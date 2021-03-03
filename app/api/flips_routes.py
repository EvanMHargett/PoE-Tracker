from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item


flip_routes = Blueprint('flips', __name__)

@flip_routes.route('/')
def getAllFlips():
    flips = Flip.query.all()
    flipsDict = {}
    for flip in flips:
        flipsDict[flip.id] = flip.to_dict()

    return flipsDict