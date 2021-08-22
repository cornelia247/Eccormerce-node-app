const mysql = require ('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-ecomerce',
    password: 'cornelia247'
});

module.exports = pool.promise();