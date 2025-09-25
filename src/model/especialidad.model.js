import { Schema, model } from "mongoose";

const especialidadSchema = new Schema(
  {
    nombre: { type: String, required: true, unique: true },
    decripcion: { type: String },
  },
  { timestamps: true }
);

export default model("Especialidad", especialidadSchema);
