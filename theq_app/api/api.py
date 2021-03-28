from flask import Flask, request, url_for, redirect, render_template,flash,jsonify
from flask_sqlalchemy import SQLAlchemy
import sqlite3
from flask import g

app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///theq.db'

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


@app.route('/api', methods=['GET', 'POST'])
def api():
   if request.method == 'POST':
      student = test(request.form['name'], request.form['question'],request.form['link'])
      db.session.add(student)
      db.session.commit()
      items = test.query.all()
      for item in items:
         print(item.id)
         print(item.name)
         print(item.question)
         print(item.zoom_link)
      return redirect(url_for('show_all'))
      


   return{
        'userid:': 1,
        'title': "Test Flask app",
        'Completed': False
   }

@app.route('/queue')
def queue():
   students_list = test.query.all()
   students = []

   for item in students_list:
      students.append({'name':item.name , 'question': item.question, 'zoom_link': item.zoom_link, 'id' : item.id})

   return jsonify({'students' : students})

@app.route('/delete/<input>')
def delete(input):
   test.query.filter_by(id=input).delete()
   db.session.commit()

   return redirect(url_for('queue'))

   





if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)