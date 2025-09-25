import express from "express";
const app = express();

import mongoose from "./database.js";
//import routes
import especialidadRoutes from "./routes/especialidad.routes.js";


//config
import createRoles from "./config/roles.js";
import createAdmin from "./config/admin.js";
createRoles();
createAdmin();


//middlewares
app.use(express.json());


app.get("/", (req, res) => {
  res.send("bienvenido a mi servidor express para pedir turnos al medicos");
});
app.use("/api/especialidades", especialidadRoutes);
export default app;
