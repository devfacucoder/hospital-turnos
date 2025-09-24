import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then(() => console.log("Conectado a la base de datos"))
.catch((error) => console.error("Error de conexión a la base de datos:", error));

export default mongoose;
