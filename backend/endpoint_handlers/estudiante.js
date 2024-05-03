import db from "../db_connection.js";

export const createEstudiante=(req, res) => {
  const name = req.query.name;
  const contraseina=req.query.contraseina;
  db.query("CALL postEstudiante (?,?)", [name,contraseina], (error, results) => {
  
    if (error) {
      console.error("Error creating student:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results[0]);
  });
};


export const getEstudianteId = (req, res) => {
  const estudianteName = req.query.estudianteName;

  // Call the stored procedure
  db.query("CALL getEstudianteId(?)", [estudianteName], (error, results) => {
    if (error) {
      console.error("Error fetching student ID:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    res.json(results[0]);
  });
};

export const getClaseEstudiante=(req,res)=>{
  const id = req.query.id;
  db.query("CALL getClaseEstudiante (?)", [id], (error, results) => {
  
    if (error) {
      console.error("Error fetching student classes:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results[0]);
  });
}



export const deleteEstudiante=(req, res) => {
  const id = req.query.id;
  db.query("CALL deleteEstudiante (?)", [id], (error, results) => {
  
    if (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results[0]);
  });
};