from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..config import Config
from app.models import Flip, Item, Comment, db

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def getAllComments():
    comments = Comment.query.filter(Comment.userId==current_user.id).all()
    commentsDict = {}
    for comment in comments:
        commentsDict[comment.flipId] = comment.to_dict()
    return commentsDict

@comment_routes.route('/<int:flipId>/new/', methods=["POST"])
@login_required
def addComment(flipId):
    comment = Comment.query.filter_by(
        flipId=flipId,
        userId=current_user.id
    ).first()

    if comment:
        db.session.delete(comment)
        db.session.commit()

    commentContent = request.data.decode('ascii')

    newComment = Comment(
        flipId=flipId,
        userId=current_user.id,
        content=commentContent
    )
    
    db.session.add(newComment)
    db.session.commit()

    return newComment.to_dict()

@comment_routes.route('/<int:flipId>/delete/', methods=["POST"])
@login_required
def deleteComment(flipId):
    comment = Comment.query.filter_by(
        flipId=flipId,
        userId=current_user.id
    ).first()

    db.session.delete(comment)
    db.session.commit()
    
    return "Deleted"