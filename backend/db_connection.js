// Initiate MySQL connection and export the connection object
//test query aswell
//this file is exported to the index.js file and to the controllers.js file
// index.js file calls the connection and routes the requests to the controllers.js file

import mysql from 'mysql';
// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'organice'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database', db.config.database);
});

//Test query obtained from the MySQL documentation
db.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
        console.error('Error executing MySQL query:', error);
        return;
    }
    console.log('The solution is:', results[0].solution);
});

export default db;