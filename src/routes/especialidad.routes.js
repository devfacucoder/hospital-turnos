import { Router } from "express";
import { getEspecialidades,createEspecialidad, deleteEspecialidad,getEspecialidadById,updateEspecialidad } from "../controllers/especialidad.ctrl.js";
const especialidadesRoutes = Router();

especialidadesRoutes.get("/", getEspecialidades);
especialidadesRoutes.post("/", createEspecialidad);

especialidadesRoutes.get("/:id",getEspecialidadById )
especialidadesRoutes.put("/:id", updateEspecialidad)
especialidadesRoutes.delete("/:id", deleteEspecialidad)

export default especialidadesRoutes;