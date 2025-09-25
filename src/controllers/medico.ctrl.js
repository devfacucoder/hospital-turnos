import userModel from "../models/user.model.js";
import especialidadModel from "../model/especialidad.model.js";
export const createMedico = async (req, res) => {
  try {
    const { name, email, password, especialidad } = req.body;
    const newMedico = new userModel({
      name,
      email,
      password,
      especialidad:await especialidadModel.findById(especialidad),
      role: "medico",
    });
    await newMedico.save();
    res.status(201).json(newMedico);
  }
  catch (error) {
    console.error("Error creating medico:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const getMedicos = async (req, res) => {
  try {
    const medicos = await userModel
      .find({ role: "medico" })
    res.json(medicos);
  } catch (error) {
    console.error("Error fetching medicos:", error);
    res.status(500).json({ message: "Server error" });
  }
};




