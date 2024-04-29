// Purpose: Controller functions for the backend.
//functions that will be called when the API endpoints are hit.

import db from "./db_connection.js";

export const getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};

export const getTables = (req, res) => {
  db.query("SHOW TABLES", (error, results, fields) => {
    if (error) {
      console.error("Error fetching tables:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
};




