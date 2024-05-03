import db from "../db_connection.js";

export const postInscribirClase=(req, res) => {
    const est_id = req.query.est_id;
    const class_id = req.query.class_id;
    db.query("CALL postInscribirClase (?,?)", [est_id,class_id], (error, results) => {
    
        if (error) {
            console.error("Error en la inscripcion de la clase:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.json(results[0]);
    });
};