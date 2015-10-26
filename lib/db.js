// db stuff
var Sequelize = require('sequelize');

var sequelize = new Sequelize('sequelize', 'root', 'pa55wd', {
	host: 'localhost', 
	dialect: 'mysql',

	pool: {
		max: 5, 
		min: 0, 
		idle: 1000
	}
});

module.exports = sequelize;