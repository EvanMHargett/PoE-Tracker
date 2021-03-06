from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, db
import httplib2
import json

search_routes = Blueprint('search', __name__)

@search_routes.route('/<string:name>/')
def getFlipsByName(name):
    flips = Flip.query.all()
    # flips = Flip.query.filter(Flip.input1.name.ilike(f'%{name}%') | Flip.output.name.ilike(f'%{name}%')).all()
    flipsDict = {}
    for flip in flips:
        if name.lower() in flip.input1.name.lower() or name.lower() in flip.output.name.lower():
            flipsDict[flip.id] = flip.to_dict()
    return flipsDict

@search_routes.route('/items/<string:name>/')
def getItemsByName(name):
    items = Item.query.filter(Item.name.ilike(f'%{name}%')).all()
    itemsDict = {}
    for item in items:
        itemsDict[item.id] = item.to_dict()
    return itemsDict