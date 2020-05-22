from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dotenv import load_dotenv
import pymysql
import secrets
import os
from datetime import datetime

load_dotenv(verbose=True)

USER = os.getenv("dbuser")
PASSWORD = os.getenv("dbpass")
HOST = os.getenv("dbhost")
NAME = os.getenv("dbname")

conn = "mysql+pymysql://{0}:{1}@{2}/{3}".format(USER, PASSWORD, HOST, NAME)

app = Flask("__name__")
bcrypt = Bcrypt(app)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = conn
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config.update(SECRET_KEY=os.urandom(16))
db = SQLAlchemy(app)
# from db import db

import classes.Comment
import classes.Friend
import classes.Post
import classes.User

db.create_all()
db.session.commit()

import routes.views

if __name__ == "__main__":
    app.run(debug=True)