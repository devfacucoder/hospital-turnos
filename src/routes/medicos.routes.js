import { Router } from "express";

const medicosRoutes = Router();
import {
  getMedicos,
  createMedico,
  updateMedico,
  deleteMedico,
  getMedicoById,
} from "../controllers/medico.ctrl.js";
import { login } from "../controllers/auth.ctrl.js";
medicosRoutes.get("/", getMedicos);

medicosRoutes.post("/", createMedico);
medicosRoutes.get("/:id", getMedicoById);

medicosRoutes.delete("/:id", deleteMedico);
medicosRoutes.put("/:id", updateMedico);

medicosRoutes.post("/auth", login);

export default medicosRoutes;
