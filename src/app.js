import express from "express";
const app = express();
import cors from "cors";
import mongoose from "./database.js";
//import routes
import especialidadRoutes from "./routes/especialidad.routes.js";
import medicosRoutes from "./routes/medicos.routes.js";
import turnosRoutes from "./routes/turnos.routes.js";
//config
import createRoles from "./config/roles.js";
import createAdmin from "./config/admin.js";

createRoles();
createAdmin();

//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bienvenido a mi servidor express para pedir turnos al medicos");
});
app.use("/api/especialidades", especialidadRoutes);
app.use("/api/medicos", medicosRoutes);
app.use("/api/turnos", turnosRoutes);

export default app;
