from batlang.bat_interpreter import run_user_code

# app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/api/runCode', methods=['POST'])
def run_code():
    try:
        user_code = request.json['code']
        results = run_user_code(user_code)
        outputs = []
        for result in results:          
            if(isinstance(result, tuple)):
                if(result[1] == "output"):
                    for r in result[0]:
                        outputs.append(r)                  
            if(isinstance(result, list)):
                for res in result:
                    if(isinstance(res, tuple)):
                        if(res[1] == 'output'):
                            for r in res[0]:
                                outputs.append(r)
                                
        return {"result" : outputs}
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
