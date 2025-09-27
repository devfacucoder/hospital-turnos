import userModel from "../model/user.model.js";
import especialidadModel from "../model/especialidad.model.js";
import roleModel from "../model/role.model.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 5);

export const createMedico = async (req, res) => {
  try {
    const { nombre, apellido, contrasenna, especialidad } = req.body;
    const newMedico = new userModel({
      numId: nanoid(),
      nombre,
      apellido,
      contrasenna,
      especialidad: await especialidadModel.findOne({ nombre: especialidad }),
      role: await roleModel.findOne({ role: "medico" }),
    });
    await newMedico.save();
    res.status(201).json({ message: "successfully created medico", data: newMedico });
  } catch (error) {
    console.error("Error creating medico:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMedicos = async (req, res) => {
  try {
    const idMedicoRole = await roleModel.findOne({ role: "medico" });
    const medicos = await userModel.find({ role: idMedicoRole });
    res.status.json({message:"list of doctors obtained",data:medicos});
  } catch (error) {
    console.error("Error fetching medicos:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getMedicoById = async (req, res) => {
  try {
    const idMedicoRole = await roleModel.findOne({ role: "medico" });
    const medico = await userModel.findOne({
      _id: req.params.id,
      role: idMedicoRole._id,
    });
    if (!medico) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor obtained", data: medico });
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMedico = async (req, res) => {
  try {
    const { nombre, apellido, contrasenna, especialidad } = req.body;
    const medico = await userModel.findById(req.params.id);
    if (!medico) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    let especialidadDoc = medico.especialidad;
    if (especialidad) {
      especialidadDoc = await especialidadModel.findOne({
        nombre: especialidad,
      });
      if (!especialidadDoc) {
        return res.status(400).json({ message: "Invalid specialty" });
      }
    }
    medico.nombre = nombre ?? medico.nombre;
    medico.apellido = apellido ?? medico.apellido;
    medico.contrasenna = contrasenna ?? medico.contrasenna;
    medico.especialidad = especialidadDoc;
    await medico.save();
    res.status(200).json({ message: "Doctor updated", data: medico });
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMedico = async (req, res) => {
  try {
    const medico = await userModel.findById(req.params.id);
    if (!medico)
      return res.status(404).json({ message: "Doctor not found" });
    await userModel.findByIdAndDelete(medico);
    return res.status(200).json({ message: "Doctor deleted" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ message: "Server error" });
  }
};