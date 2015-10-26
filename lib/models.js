// models stuff
var sequelize = require('./db.js');
var Sequelize = require('sequelize'),
	passportSequelize = require('passport-local-sequelize');


var User = sequelize.define('User', {
	username: Sequelize.STRING,
	passwordhash: Sequelize.STRING, 
	passwordsalt: Sequelize.STRING
});


passportSequelize.attachToUser(User, {
	usernameField: 'username', 
	hashField: 'passwordhash',
	saltField: 'passwordsalt'
});

module.exports = User;