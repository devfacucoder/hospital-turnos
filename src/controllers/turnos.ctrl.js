import roleModel from "../model/role.model.js";
import turnosModel from "../model/turnos.model.js";
import userModel from "../model/user.model.js";
export const createTurno = async (req, res) => {
  try {
    const {
      hora,
      fecha,
      nombrePaciente,
      apellidoPaciente,
      dniPaciente,
      telefonoPaciente,
      idMedico,
    } = req.body;

    // Verificar que exista el médico
    const medico = await userModel.findById(idMedico);
    if (!medico) {
      return res.status(404).json({ message: "Médico no encontrado" });
    }

    // Crear turno
    const newTurno = new turnosModel({
      nombrePaciente,
      apellidoPaciente,
      fecha, // asegurar que sea tipo Date
      hora,
      dniPaciente,
      telefonoPaciente,
      medico: medico._id,
    });

    const turnoDB = await newTurno.save();

    // Asociar turno al médico
    medico.turnos.push(turnoDB._id);
    await medico.save();

    return res.status(201).json({message:"created turno", data: turnoDB });
  } catch (error) {
    console.error("Error creando turno:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};



export const getAllTurnos = async (req, res) => {
  try {
    const turnosDB = await turnosModel.find();
    res.status(200).json({ message: "Appointments list obtained", data: turnosDB });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    const turnoDelete = await turnosModel.findById(req.params.id);

    if (!turnoDelete) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Find associated doctor
    const medicoDB = await userModel.findById(turnoDelete.medico);
    if (!medicoDB) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Remove appointment from doctor's array
    medicoDB.turnos.pull(turnoDelete._id);
    await medicoDB.save();

    // Delete appointment from collection
    await turnosModel.findByIdAndDelete(turnoDelete._id);

    return res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Server error" });
  }
};