import { Router } from "express";

const turnosRoutes = Router();
import {
  createTurno,
  getAllTurnos,
  deleteTurno,
  getTurnosById,
  editTurno,
} from "../controllers/turnos.ctrl.js";
turnosRoutes.get("/", getAllTurnos);
turnosRoutes.get("/:id", getTurnosById);
turnosRoutes.put("/:id", editTurno);
turnosRoutes.post("/", createTurno);
turnosRoutes.delete("/:id", deleteTurno);

export default turnosRoutes;
