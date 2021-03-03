from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item
import httplib2





item_routes = Blueprint('items', __name__)

@item_routes.route('/')
def getAllItems():
    resp, content = httplib2.Http().request("https://poe.ninja/api/data/currencyoverview?league=Ritual&type=Currency")
    print("stuff from request ------------------", resp, content)
    return content
    # req = urllib.request.Request(url = 'https://poe.ninja/api/data/currencyoverview?league=Ritual&type=Currency')
    # with urllib.request.urlopen(req) as response:
    #     html = response.read()
    #     print('response ---------------------', html)
    #     return html

    # flips = Flip.query.all()
    # flipsDict = {}
    # for flip in flips:
    #     flipsDict[flip.id] = flip.to_dict()

    # return flipsDict