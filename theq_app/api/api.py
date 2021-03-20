from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import os 

app = Flask(__name__)




@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        print(request.form)
        print(request.form['name'])
    return{
        'userid:': 1,
        'title': "Test Flask app",
        'Completed': False
    }


