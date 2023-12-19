const mysql = require('mysql'); // importing the mysql module

/* In the below code i am using the createConnection method on the mysql object for creating a connection 
to mysql database and storing it in a variable called "database" */
const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task',
});

module.exports = database; // here i am exporting the database object
