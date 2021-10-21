from flask import Flask
from flask import send_from_directory
from werkzeug.routing import BaseConverter
from flask import request
from flask import jsonify

app = Flask(__name__, static_url_path="", static_folder="www/dist/base")

class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


app.url_map.converters['regex'] = RegexConverter

# @app.route("/")
# def hello():
#     return "Hello World!"

@app.route("/")
def angular():
    return send_from_directory("www/dist/base", "index.html") 

@app.route("/<regex('\w\.(js|css)'):path>")
def angular_src(path):
    return send_from_directory("www/dist", path)

@app.route("/search", methods=['GET', 'POST','DELETE', 'PATCH'])
def search():
 if request.method == 'POST':
    data = request.json
    print(data)
    return jsonify(data) # Return Object
if __name__ == "__main__":
    app.run()
