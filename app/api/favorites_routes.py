from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, Favorite

favorite_routes = Blueprint('items', __name__)

@favorite_routes.route('/')
def getAllFavorites():
    favorites = Favorite.query.all()
    favoritesDict = {}
    for favorite in favorites:
        favoritesDict[favorite.id] = favorite.to_dict()

    return favoritesDict