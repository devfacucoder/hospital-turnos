import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["admin", "medico", "secretario"],
      required: [true, "El rol es obligatorio"],
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,  // agrega createdAt y updatedAt
    versionKey: false, // quita __v
  }
);

// 🔹 Evitar roles duplicados en la colección
roleSchema.index({ role: 1 }, { unique: true });

export default model("Role", roleSchema);
