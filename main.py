from random import randint

import flask
from flask import render_template

app = flask.Flask(__name__)

MAX_1 = 0
MAX_2 = 10


@app.route('/')
def index():
    a = randint(MAX_1, MAX_2)
    b = randint(MAX_1, MAX_2)
    return render_template("index.html", value=f"{a}|{b}", value1=a, value2=b)


@app.route("/random/")
def randgen():
    return str(randint(MAX_1, MAX_2)) + "|" + str(randint(MAX_1, MAX_2))


if __name__ == '__main__':
    app.run(debug=True)
