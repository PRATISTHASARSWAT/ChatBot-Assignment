from flask import Flask, request, jsonify
from flask_cors import CORS  # type: ignore
from generate_ans import answer


app = Flask(__name__)



CORS(app)

@app.route('/get-ans', methods=['POST'])
def get_ans():
    query = request.get_json()['query']
    
    if not query:
        return jsonify({"error": "Query parameter is missing"}), 400
    result = answer(query)
    
    return jsonify({"answer": result}), 200

    

if __name__ == '__main__':
    app.run(debug=True)
