const database = require('../mysql'); // importing the connection to mysql database

// post request

const addtask = (request, response) => {
  const { tasks } = request.body; // destructuring the request body
  database.query(
    'insert into mytasks (tasks) values (?);', // writing the query to insert into the database
    // the "question(?)" symbol is serving as a placeholder
    [tasks],
    (err, result) => {
      if (err) {
        console.log('error');
        response.status(500).send('internal server error');
      } else {
        response
          .status(201)
          .send({ message: 'data added successfully', result });
      } // sending the response on successful addition of the task
    }
  );
};
// get request
const getalltask = (request, response) => {
  database.query('select * from mytasks', (err, result) => {
    if (err) {
      console.error(err);
      response.status(404).send("couldn't find tasks");
    } else {
      console.log(result);
      response.status(200).send(result);
    }
  });
};

// delete tasks

const deletetask = (request, response) => {
  const { id } = request.params; // destructuring the request.param object to get the id
  database.query('delete from mytasks where id = ?', [id], (err, result) => {
    if (id > result.length) {
      response.send('id not found');
    } else if (err) {
      console.error(err);
      response.status(404).send('not found');
    } else {
      response.status(202).send('deleted successfully');
    }
  });
};

module.exports = { addtask, getalltask, deletetask }; // exporting the fuctions
