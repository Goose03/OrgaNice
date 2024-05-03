import db from "../db_connection.js";

export const getTareasEstudiante=(req,res)=>{
        const id = req.query.id;
        db.query("CALL getTareasEstudiante (?)", [id], (error, results) => {
        
            if (error) {
                console.error("Error fetching student tasks:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.json(results[0]);
            });
    }

export const patchTareaComp=(req,res)=>{
    const est_id = req.query.est_id;
    const hw_id = req.query.hw_id;
    db.query("CALL patchTareaComp (?,?)", [est_id,hw_id], (error, results) => {
    
        if (error) {
            console.error("Error updating student tasks:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.json(results[0]);
        });
}