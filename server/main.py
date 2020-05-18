from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import pymysql
import secrets
from datetime import datetime

conn = "mysql+pymysql://{0}:{1}@{2}/{3}".format(secrets.dbuser, secrets.dbpass, secrets.dbhost, secrets.dbname)

app = Flask("__name__")

app.config["SQLALCHEMY_DATABASE_URI"] = conn
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

import routes.views
import classes.Comment
import classes.Friend
import classes.Post
import classes.User


db.create_all()
db.session.commit()

if __name__ == "__main__":
    app.run(debug=True)