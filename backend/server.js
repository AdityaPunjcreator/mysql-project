const express = require('express'); // importing the express package
const database = require('./mysql'); // importing the connection to mysql database
const taskrouter = require('./router'); // importing the router middleware
const cors = require('cors'); // importing cors to allow cross origin resource sharing
const app = express(); // storing the function in "app" variable, which will then be used as object
app.use(express.json()); // using the express.json middle ware as a request body parser

app.use(cors()); // here we are using the cors middleware

port = 5000; // specified the port i am using

// using the connect method of the database object to - initiate the connection to the mysql database
database.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('connected to database');
  app.use(
    '/api/v1/tasks',
    taskrouter
  ); /*  I am using this "taskrouter" middleware, we are basically mounting this middleware on the "path" specified within quotes
,as the first argument in the use() method indicates to the path to which we want to apply the middle ware
moreove, the path specified here will be appended to the path specified in the taskrouter */

  // this listen method on app is going to listen the incoming request on the specified port
  app.listen(port, () => {
    console.log('listening on port', port);
  });
});
