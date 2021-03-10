from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, Favorite, db

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/')
def getAllFavorites():
    favorites = Favorite.query.filter(Favorite.userId == current_user.id).all()
    favoritesDict = {}
    for favorite in favorites:
        favoritesDict[favorite.flipId] = favorite.to_dict()

    return favoritesDict


@favorite_routes.route('/<int:flipId>/', methods=["POST"])
@login_required
def setFavorite(flipId):
    favorite = Favorite(
        userId=current_user.id,
        flipId=flipId
    )
    db.session.add(favorite)
    db.session.commit()
    return favorite.to_dict()

@favorite_routes.route('/<int:flipId>/delete/', methods=["POST"])
@login_required
def deleteFavorite(flipId):
    favorite = Favorite.query.filter_by(
        userId=current_user.id,
        flipId=flipId
    ).first()
    db.session.delete(favorite)
    db.session.commit()
    return "Deleted the favorite"