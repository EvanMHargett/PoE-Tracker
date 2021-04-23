from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, db, Comment, Favorite
import httplib2
import json





item_routes = Blueprint('items', __name__)

@item_routes.route('/')
def getAllItems():
    flips = Flip.query.all()
    flipsCopy = []
    for flip in flips:
        flipDict = flip.to_dict()
        flipsCopy.append(flipDict)

    favorites = Favorite.query.all()
    favoritesCopy = []
    for favorite in favorites:
        favoritesCopy.append(favorite.to_dict())

    comments = Comment.query.all()
    commentsCopy = []
    for comment in comments:
        commentsCopy.append(comment.to_dict())

    
    db.session.execute('TRUNCATE items CASCADE;')
    db.session.execute("ALTER SEQUENCE items_id_seq RESTART WITH 1")
    resp, content = httplib2.Http().request("https://poe.ninja/api/data/currencyoverview?league=Ultimatium&type=Currency")
    decoded = content.decode('ascii')
    jsonObj = json.loads(decoded)
    item_list = jsonObj["lines"]
    for item in item_list:
        newItem = Item(
            name=item["currencyTypeName"],
            priceInC=item['chaosEquivalent']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=DivinationCard")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=Prophecy")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=UniqueJewel")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=UniqueWeapon")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=UniqueArmour")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ultimatium&type=UniqueAccessory")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)

    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    db.session.commit()

    
    for flip in flipsCopy:
    
        input1 = Item.query.filter_by(name=flip["input1Name"]).first()
        output = Item.query.filter_by(name=flip["outputName"]).first()
        newFlip = Flip(
            input1Id=input1.id,
            input1Quantity=flip["input1Quantity"],
            # input2Id=flip.input2Id,
            # input2Quantity=flip.input2Quantity,
            outputId=output.id,
            outputQuantity=flip["outputQuantity"],
            trades=int(flip["input1Quantity"])+ 1,
            cost=input1.priceInC * int(flip["input1Quantity"]),
            revenue=output.priceInC * int(flip["outputQuantity"]),
            profit= output.priceInC * int(flip["outputQuantity"]) - (input1.priceInC * int(flip["input1Quantity"])),
        )

        db.session.add(newFlip)
        db.session.commit()
        for favorite in favoritesCopy:
            if flip["id"] == favorite["id"]:
                newFavorite = Favorite(
                    userId=favorite["userId"],
                    flipId=newFlip.id
                )
                db.session.add(newFavorite)
        
        for comment in commentsCopy:
            if flip["id"] == comment["flipId"]:
                newComment = Comment(
                    userId=comment["userId"],
                    flipId=newFlip.id,
                    content=comment["content"]
                )
                db.session.add(newComment)

    db.session.commit()
    return content
