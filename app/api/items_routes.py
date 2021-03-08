from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, db
import httplib2
import json





item_routes = Blueprint('items', __name__)

@item_routes.route('/')
def getAllItems():
    db.session.execute('TRUNCATE items CASCADE;')
    db.session.execute("ALTER SEQUENCE items_id_seq RESTART WITH 1")
    resp, content = httplib2.Http().request("https://poe.ninja/api/data/currencyoverview?league=Ritual&type=Currency")
    # print("stuff from request ------------------", resp, content)
    decoded = content.decode('ascii')
    jsonObj = json.loads(decoded)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list = jsonObj["lines"]
    for item in item_list:
        newItem = Item(
            name=item["currencyTypeName"],
            priceInC=item['chaosEquivalent']
        )
        db.session.add(newItem)

    # await asyncio.sleep(10)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=DivinationCard")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=Prophecy")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=UniqueJewel")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=UniqueWeapon")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=UniqueArmour")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    resp2, content2 = httplib2.Http().request("https://poe.ninja/api/data/itemoverview?league=Ritual&type=UniqueAccessory")
    decoded2 = content2.decode('ascii')
    jsonObj2 = json.loads(decoded2)
    # print("---------------------", jsonObj["lines"])
    # print("dir ****************", dir(jsonObj))
    item_list2 = jsonObj2["lines"]
    for item in item_list2:
        newItem = Item(
            name=item["name"],
            priceInC=item['chaosValue']
        )
        db.session.add(newItem)

    db.session.commit()
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