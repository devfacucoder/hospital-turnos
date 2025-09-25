import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    apellido: {
      type: String,
      required: [true, "El apellido es obligatorio"],
      trim: true,
    },
    
    contrasenna: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
      select: false, // por seguridad no devolverla en queries
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    especialidad: {
      type: Schema.Types.ObjectId,
      ref: "Especialidad",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


// 🔹 Middleware para hashear la contraseña antes de guardar

userSchema.pre("save", async function (next) {
  if (!this.isModified("contrasenna")) return next();
  this.contrasenna = await bcrypt.hash(this.contrasenna, 10);
  next();
});
// 🔹 Método para comparar contraseñas
userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.contrasenna);
};

export default model("User", userSchema);
