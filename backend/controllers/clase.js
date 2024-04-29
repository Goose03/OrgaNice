import db from "../db_connection.js";

export const getAlumno=(req,res)=>{
    db.query("SELECT nombre_estudiante FROM estudiante", (error, results) => {
        if (error) {
          console.error("Error fetching estudiantes:", error);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json(results);
      });
    };