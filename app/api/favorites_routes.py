from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, Favorite

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/')
def getAllFavorites():
    favorites = Favorite.query.all()
    # print("---------------------------------", favorites)
    favoritesDict = {}
    for favorite in favorites:
        favoritesDict[favorite.id] = favorite.to_dict()

    return favoritesDict


@favorite_routes.route('/<int:flipId>')
def setFavorite(flipId):
    favorite = Favorite(
        userId=current_user.id,
        flipId=flipId
    )
    db.session.add(favorite)
    db.session.commit()
    return favorite.to_dict()

@favorite_routes.route('/<int:flipId>')
def deleteFavorite(flipId):
    favorite = Favorite.query.filter_by(
        userId=current_user.id,
        flipId=flipId
    ).first()
    db.session.delete(favorite)
    db.session.commit()
    return "Deleted the favorite"