import roleModel from "../model/role.model.js";
import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();
const createAdmin = async () => {
  try {
    const adminRole = await roleModel.findOne({ role: "admin" });
    if (!adminRole) {
      throw new Error("Admin role not found. Please create roles first.");
    }
    const existingAdmin = await userModel.findOne({
      nombre: process.env.ADM_NOMBRE,
      apellido: process.env.ADM_APELLIDO,
      role: adminRole._id,
    });
    if (existingAdmin){

      console.log("Admin user already exists");
      return;
    } 
    const adminUser = new userModel({
      nombre: process.env.ADM_NOMBRE,
      apellido: process.env.ADM_APELLIDO,
      contrasenna: process.env.ADM_PASS,
      role: adminRole._id,
    });
    await adminUser.save();
    console.log("Admin user created");
  } catch (error) {
    console.error("Error creating admin user:", error);
    throw error;
  }
};
export default createAdmin;
