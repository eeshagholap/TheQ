from flask import Flask, request, url_for, redirect, render_template,flash,jsonify,make_response,send_from_directory
from flask_sqlalchemy import SQLAlchemy
import sqlite3
from flask import g
import datetime
from sqlalchemy import func,create_engine


# engine = create_engine('sqlite:///theq.db')

# engine.execute('alter table test add column sessiontype String')

app = Flask(__name__,static_folder='../build', static_url_path='')

app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///theq.db'

### Creating the database

db = SQLAlchemy(app)

### Student input fields

class test(db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    name = db.Column(db.String(1000))
    question = db.Column(db.String(10000))  
    zoom_link = db.Column(db.String(1000))
    sessiontype = db.Column(db.String(1000))
    
    
    #place_in_queue = db.Column(db.Integer)
    

        
    def __init__(self, name, question, zoom_link,sessiontype):#,place_in_queue):
        self.name = name
        self.question = question
        self.zoom_link = zoom_link
        self.sessiontype = sessiontype
        
        
        #self.place_in_queue = place_in_queue


@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

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
      print(request.form)
      student = test(request.form['name'], request.form['question'],request.form['link'],request.form['sessiontype'])
      db.session.add(student)
      
      db.session.commit()
      items = test.query.all()
      for item in items:
         print(item.sessiontype)
      res = make_response("")
      res.set_cookie("name", request.form.get('name'))
      return res
      
         
   return redirect(url_for('show_all'))
      


@app.route('/queue')
def queue():
   students_list = test.query.all()
   students = []

   for item in students_list:
      students.append({'name':item.name , 'question': item.question, 'zoom_link': item.zoom_link, 'id' : item.id ,'sessiontype' : item.sessiontype})

   return jsonify({'students' : students})

@app.route('/delete/<input>')
def delete(input):
   test.query.filter_by(id=input).delete()
   db.session.commit()

   return redirect(url_for('queue'))

   
# @app.route('/studentinfo')
# def studentinfo():
#    x = request.cookies.get('name')
#    query = db.session.query(
#    test, 
#    func.row_number()\
#       .over(
#          order_by = test.id,
#          partition_by = test.id,
#       )\
#       .label('rank')
#    )
#    # now filter
#    # now execute:
#    # student = query.filter_by(name = x).first()
#    # result = .all()
#    # print(result.name)
#    query = query.filter_by(name = "Eesha")
#    # now execute:
#    result = query.all()

#    print(result)

#    # query = query.filter_by(movie_id=movie_id)
#    # # now execute:
#    # my_movie = query.all()
#    return str(result)

@app.route('/getcookie')
def getcookie():
   x = request.cookies.get('name')
   return jsonify(x)






if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)
