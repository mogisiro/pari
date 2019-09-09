const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

const dbConn = mysql.createConnection(dbConfig);

module.exports = dbConn;