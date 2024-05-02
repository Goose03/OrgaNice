// initializes the backend server using Express and 
// listens on port 5000. It also imports the db_connection.js file,
// which establishes a connection to the MySQL database.
// defines the API endpoints and routes requests to the corresponding controller functions.

import express from 'express';
import cors from 'cors';
import {getAllUsers, getTables, getEstudianteId} from './endpoint_handlers/test_endpoint.js';


//Define port
const Port = 5000;

// Initialize Express for backend server 
const app = express();

// Middleware
app.use(cors());

// Start server
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});


//Testing route 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World');
});


//MySQL routes (these functions are imported as routes from the controllers.js file)
app.get('/tables', getTables);
app.get('/users', getAllUsers);

app.get('/estudianteID', getEstudianteId)  //estudianteID?estudianteName=