from crypt import methods
from distutils.log import debug
from flask import Flask, jsonify


app = Flask(__name__)

# Espacio para firebase databse implementation


@app.route('/', methods=['GET'])
def get_page():
    return jsonify({"Hello": "World"})


if __name__ == '__main__':
    app.run(debug=True)
