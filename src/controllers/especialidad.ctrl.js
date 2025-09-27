import especialidadModel from "../model/especialidad.model.js";

export const createEspecialidad = async (req, res) => {
  try {
    const { nombre, decripcion } = req.body;
    const newEspecialidad = new especialidadModel({ nombre, decripcion });
    await newEspecialidad.save();
    res
      .status(201)
      .json({ message: "new specialty createdd", data: newEspecialidad });
  } catch (error) {
    console.error("Error creating especialidad:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getEspecialidades = async (req, res) => {
  try {
    const especialidades = await especialidadModel.find();
    res
      .status(200)
      .json({ message: "list of specialties", data: especialidades });
  } catch (error) {
    console.error("Error fetching especialidades:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getEspecialidadById = async (req, res) => {
  try {
    const { id } = req.params;
    const especialidad = await especialidadModel.findById(id);
    if (!especialidad) {
      return res.status(404).json({ message: "Especialidad not found" });
    }
    res.status(200).json({ message: "specialty obtained", data: especialidad });
  } catch (error) {
    console.error("Error fetching especialidad:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateEspecialidad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, decripcion } = req.body;
    const updatedEspecialidad = await especialidadModel.findByIdAndUpdate(
      id,
      { nombre, decripcion },
      { new: true }
    );
    if (!updatedEspecialidad) {
      return res.status(404).json({ message: "Especialidad not found" });
    }
    res.status(200).json({
      message: "successfully modified specialty",
      data: updatedEspecialidad,
    });
  } catch (error) {
    console.error("Error updating especialidad:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteEspecialidad = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEspecialidad = await especialidadModel.findByIdAndDelete(id);

    if (!deletedEspecialidad) {
      return res.status(404).json({ message: "Especialidad not found" });
    }
    res.json({ message: "Especialidad deleted", data: null });
  } catch (error) {
    console.error("Error deleting especialidad:", error);
    res.status(500).json({ message: "Server error" });
  }
};
