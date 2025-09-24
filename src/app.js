import express from "express";
const app = express();

import mongoose from "./database.js";




app.get("/", (req, res) => {
  res.send("bienvenido a mi servidor express para pedir turnos al medicos");
});





export default app;
