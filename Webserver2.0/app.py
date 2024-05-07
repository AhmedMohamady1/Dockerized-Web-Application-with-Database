from flask import Flask, render_template, jsonify
import mysql.connector

app = Flask(__name__)

# Replace with your database connection details
config = {
  'user': 'myuser',
  'password': 'password',  # Replace with your actual password
  'host': 'db',
  'database': 'mydatabase',  # Change this to your actual database name
}

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/index')
def index():
  return render_template('index.html')

@app.route('/contact')
def contact():
  return render_template('contact.html')

@app.route('/data')
def get_data():
  connection = mysql.connector.connect(**config)
  cursor = connection.cursor()

  # SQL query to fetch data
  sql = "SELECT * FROM students"
  cursor.execute(sql)
  data = cursor.fetchall()

  connection.close()

  # Convert data to list of dictionaries
  data_list = []
  for row in data:
    data_list.append({'ID': row[0], 'name': row[1], 'age': row[2], 'CGPA': row[3]})

  return jsonify(data_list)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
