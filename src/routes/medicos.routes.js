import { Router } from "express";

const medicosRoutes = Router();
import { getMedicos } from "../controllers/medico.ctrl.js";

medicosRoutes.get("/",getMedicos )
/*
medicosRoutes.post("/", )
medicosRoutes.get("/:id", )
medicosRoutes.put("/:id", )
medicosRoutes.delete("/:id", )
*/
export default medicosRoutes;