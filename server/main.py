from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pymysql
import secrets
from datetime import datetime

conn = "mysql+pymysql://{0}:{1}@{2}/{3}".format(secrets.dbuser, secrets.dbpass, secrets.dbhost, secrets.dbname)

app = Flask("__name__")
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = conn
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

import classes.Comment
import classes.Friend
import classes.Post
import classes.User

db.create_all()
db.session.commit()

import routes.views

if __name__ == "__main__":
    app.run(debug=True)