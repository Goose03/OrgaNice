// Purpose: Controller functions for the backend.
//functions that will be called when the API endpoints are hit.

import db from "../db_connection.js";
import axios from 'axios';


//getters 
export const getAllStudents = (req, res) => {
  db.query("SELECT * FROM estudiantes", (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};

export const getTables = (req, res) => {
  db.query("SHOW TABLES", (error, results) => {
    if (error) {
      console.error("Error fetching tables:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};


export async function createUser(req, res) {
  try {
    // Datos del usuario a enviar
    const userData = req.body;

    // URL de la API donde se enviará el dato
    const apiUrl = 'http://localhost:3000'; // Cambiar al puerto y ruta correctos de tu servidor de Node.js

    // Realizar la solicitud POST utilizando Axios
    const response = await axios.post(apiUrl, userData);

    // Devolver la respuesta del servidor
    res.json(response.data);
  } catch (error) {
    // Manejar errores
    console.error('Error al enviar datos:', error);
    res.status(500).json({ error: 'Error al enviar datos al servidor' });
  }
}



