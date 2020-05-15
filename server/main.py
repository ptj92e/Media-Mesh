from flask import Flask, render_template

app = Flask("__name__")

@app.route("/")
def index():
    return render_template("index.html", token="Hello Flask_React")

if __name__ == "__main__":
    app.run(debug=True)