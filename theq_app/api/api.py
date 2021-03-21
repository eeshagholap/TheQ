from flask import Flask, request, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
import sqlite3
from flask import g

app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///theq.db'

@app.route('/api', methods=['GET', 'POST'])
def api():
    return{
        'userid:': 1,
        'title': "Test Flask app",
        'Completed': False
    }


### Creating the database

db = SQLAlchemy(app)

### Student input fields

class test(db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    name = db.Column(db.String(1000))
    question = db.Column(db.String(10000))  
    zoom_link = db.Column(db.String(1000))
    #place_in_queue = db.Column(db.Integer)
        
    def __init__(self, name, question, zoom_link):#,place_in_queue):
        self.name = name
        self.question = question
        self.zoom_link = zoom_link
        #self.place_in_queue = place_in_queue


@app.route('/')
def show_all():
   return render_template('show_all.html', test = test.query.all())

@app.route('/new', methods = ['GET', 'POST'])
def new():
   if request.method == 'POST':
      if not request.form['name'] or not request.form['question'] or not request.form['zoom_link']:
         flash('Please enter all the fields', 'error')
      else:
         student = test(request.form['name'], request.form['question'],
            request.form['zoom_link'])#, request.form['place_in_queue'])
         
         db.session.add(student)
         db.session.commit()
         flash('Record was successfully added')
         return redirect(url_for('show_all'))
   return render_template('new.html')




if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)