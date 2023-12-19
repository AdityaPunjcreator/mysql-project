const express = require('express'); // importing the express module
const controller = require('./controller/controller'); // importing the controller module which has the route handler function
const router = express.Router(); // here we have create the "router" using express.Router method and stored in the router variable

router.post('/add', controller.addtask); // here i am creating the route for the post method and using the eventhandler function as the property of the "controller" object

router.get('/all', controller.getalltask); //here i am creating the route for the get method and using the eventhandler function as the property of the "controller" object

router.delete('/delete/:id', controller.deletetask); // here i am creating the route for the delete method and using the eventhandler function as the property of the "controller" object

module.exports = router; // exporting the router
