var express = require('express');
var User=require('./dbSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	
  getUsers(res);
  
});

function getUsers(res){
	User.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			//res.json(todos); // return all todos in JSON format
			res.render('index', { title: 'harish',userList:users });
		});
};

module.exports = router;
