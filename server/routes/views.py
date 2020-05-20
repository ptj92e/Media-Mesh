from __main__ import app, db, bcrypt
from flask import Flask, render_template, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from classes.Comment import Comment
from classes.Friend import Friend
from classes.Post import Post
from classes.User import User

@app.route("/")
def index():
    return render_template("index.html", token="Hello Flask_React")

@app.route("/api/login", methods=["POST"])
def login():
    if request.method == "POST":
        session.pop("id", None)
        req = request.get_json()
        users = User.query.all()
        for user in users:
            if user.email == req.get("email") and bcrypt.check_password_hash(user.password, req.get("password")):
                session["id"] = user.id
                return jsonify(user.__repr__())
            else:
                pass
        
    else:
        print("No User")
    return "Hello"
        


@app.route("/api/user", methods=["POST"])
def new_user():
    if request.method == "POST":

        req = request.get_json()

        name = req.get("name")
        email = req.get("email")
        password = bcrypt.generate_password_hash(req.get("password")).decode("utf-8")
        artform = req.get("artform")

        new_user = User(name, email, password, artform)

        try:
            db.session.add(new_user)
            db.session.commit()
            return "New user created."
        except:
            return "There was an error creating a new user."
    else: 
        return "Not JSON"