var mysql = require('mysql');
var config = require('./db.config.js');

const db = mysql.createConnection(config);

module.exports = db;