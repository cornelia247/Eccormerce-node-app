const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-ecomerce','root','cornelia247',{dialect: 'mysql',
host: 'localhost'});

module.exports = sequelize;