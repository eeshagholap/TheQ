from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET', 'POST'])
def api():
    return{
        'userid:': 1,
        'title': "Test Flask app",
        'Completed': False
    }