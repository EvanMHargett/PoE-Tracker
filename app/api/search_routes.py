from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, db
import httplib2
import json

search_routes = Blueprint('search', __name__)

@search_routes.route('/<string:name>')
def getItemsByName(name):
    flips = Flips.query.filter(Flip.input1.name.ilike(f'%{name}%') | Flip.input2.name.ilike(f'%{name}%') | Flip.output.name.ilike(f'%{name}%'))
    flipsDict = {}
    for flip in flips:
        flipsDict[flip.id] = flip.to_dict{}
    return flipsDict