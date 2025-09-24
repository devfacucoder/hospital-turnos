import { Schema, model } from "mongoose";

const turnosSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: [true, "La fecha del turno es obligatoria"],
    },
    hora: {
      type: String,
      required: [true, "La hora del turno es obligatoria"],
      match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato de hora inválido (HH:mm)"],
    },
    nombrePaciente: {
      type: String,
      required: [true, "El nombre del paciente es obligatorio"],
      trim: true,
    },
    apellidoPaciente: {
      type: String,
      required: [true, "El apellido del paciente es obligatorio"],
      trim: true,
    },
    dniPaciente: {
      type: String,
      required: [true, "El DNI del paciente es obligatorio"],
      unique: true,
      match: [/^\d{7,8}$/, "El DNI debe tener entre 7 y 8 dígitos"],
    },
    telefonoPaciente: {
      type: String,
      required: false,
      match: [/^\+?\d{7,15}$/, "Número de teléfono inválido"],
    },
    medico: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El médico asignado es obligatorio"],
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt
    versionKey: false, // quita __v
  }
);

// 🔹 Índices útiles para búsqueda rápida
turnosSchema.index({ fecha: 1, hora: 1, medico: 1 }, { unique: true }); 
// Evita que un mismo médico tenga dos turnos a la misma hora

export default model("Turno", turnosSchema);
