import db from "../db_connection.js";

export const getEstudianteId = (req, res) => {
  const estudianteName = req.query.estudianteName;

  // Call the stored procedure
  db.query("CALL getEstudianteId(?, @est_id)", [estudianteName], (error, results) => {
    if (error) {
      console.error("Error fetching student ID:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    // Fetch the output parameter from the results object
    const estudianteId = results[0][0].est_id;

    // Send the student ID in the response
    res.json({ estudianteId });
  });
};
