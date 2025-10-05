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
export const getTurnosById = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscamos al médico y populamos sus turnos
    const medico = await userModel.findById(id).populate("turnos");

    if (!medico) {
      return res.status(404).json({ message: "Médico no encontrado" });
    }

    // Respondemos con los turnos del médico
    res.status(200).json({ data: medico.turnos });
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
export const editTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombrePaciente,
      apellidoPaciente,
      fecha,
      hora,
      dniPaciente,
      telefonoPaciente,
    } = req.body;

    const turno = await turnosModel.findById(id);
    if (!turno) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }

    // Actualizar campos
    if (nombrePaciente !== undefined) turno.nombrePaciente = nombrePaciente;
    if (apellidoPaciente !== undefined) turno.apellidoPaciente = apellidoPaciente;
    if (fecha !== undefined) turno.fecha = fecha;
    if (hora !== undefined) turno.hora = hora;
    if (dniPaciente !== undefined) turno.dniPaciente = dniPaciente;
    if (telefonoPaciente !== undefined) turno.telefonoPaciente = telefonoPaciente;

    await turno.save();

    return res.status(200).json({ message: "Turno editado correctamente", data: turno });
  } catch (error) {
    console.error("Error editando turno:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};