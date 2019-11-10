from flask import render_template, jsonify, request
from app import app, db
from app.models import Crime


@app.route('/')
@app.route('/index')
@app.route('/index/')
def index():
    members = [
        {'first_name': 'Chloe', 'last_name': 'Jew'},
        {'first_name': 'Kendall', 'last_name': 'Kempton'},
        {'first_name': 'Tj', 'last_name': 'Ngo'},
        {'first_name': 'Cory', 'last_name': 'Powell'},
        {'first_name': 'Scott', 'last_name': 'Keegan'}
    ]

    return render_template('index.html', title='Home', members=members, token="My Token")


# Handles calls to entire database
@app.route('/api/crimes', methods=['GET', 'POST', 'DELETE'])
@app.route('/api/crimes/', methods=['GET', 'POST', 'DELETE'])
def all_crimes():

    # Retrieve all Crime objects in database
    if request.method == 'GET':
        qryresult = db.session.query(Crime).all()
        # Return list of retrieved objects
        return jsonify([i.serialized for i in qryresult])

    # Add new crime object to database
    if request.method == 'POST':
        crime = Crime(request.json)
        db.session.add(crime)
        db.session.commit()
        # Return the added object
        return jsonify(crime.serialized)

    # Delete all Crime objects
    if request.method == 'DELETE':
        qryresult = db.session.query(Crime).all()
        for crime in qryresult:
            db.session.delete(crime)
        db.session.commit()
        return jsonify([i.serialized for i in qryresult])


# Handles references to Crime object based on crimedate
@app.route('/api/crimedate=<date>', methods=['GET'])
@app.route('/api/crimedate=<date>/', methods=['GET'])
def get_crime_crimedate(date):

    # Retrieve a Crime object based on its crimedate
    if request.method == 'GET':
        qryresult = db.session.query(Crime).filter(Crime.crimedate==date)
        # Return the object
        return jsonify([i.serialized for i in qryresult.all()])
