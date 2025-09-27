import { Router } from "express";

const turnosRoutes = Router();
import {
  createTurno,
  getAllTurnos,
  deleteTurno,
} from "../controllers/turnos.ctrl.js";
turnosRoutes.get("/", getAllTurnos);
turnosRoutes.post("/", createTurno);
turnosRoutes.delete("/:id", deleteTurno);

export default turnosRoutes;
