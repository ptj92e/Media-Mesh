from __main__ import app
from flask import Flask, render_template
import classes.Comment
import classes.Friend
import classes.Post
import classes.User

@app.route("/")
def index():
    return render_template("index.html", token="Hello Flask_React")

@app.route("/api/login", methods=["POST"])
def login():
    print("Logged In")

@app.route("/api/user", methods=["POST"])
def user():
    print("New User")