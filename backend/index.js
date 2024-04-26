// initializes the backend server using Express and 
// listens on port 5000. It also imports the db_connection.js file,
// which establishes a connection to the MySQL database.
// defines the API endpoints and routes requests to the corresponding controller functions.

import express from 'express';
import cors from 'cors';
import db from './db_connection.js';
import {getAllUsers} from './controllers.js';


const Port = 5000;

const app = express();

// Start server
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});


//Testing route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Testing MySQL connection
console.log(db);


//MySQL routes 
app.get('/users', getAllUsers);