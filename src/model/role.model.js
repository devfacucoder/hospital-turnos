import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  role: {
    type: String,
    enum: ["admin", "medico", "secretario"],
    default: "user",
  },
});

export default model("Role", roleSchema);
