import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  try {
    const { cod, contrasenna } = req.body;

    // Buscar usuario por código
    const codFound = await userModel.findOne({ numId: cod }).select("+contrasenna"); 
    if (!codFound) {
      return res
        .status(404)
        .json({ message: "Usuario o contraseña no encontrados" });
    }

    // Verificar contraseña
    const passValid = await codFound.comparePassword(contrasenna);
    if (!passValid) {
      return res
        .status(404)
        .json({ message: "Usuario o contraseña no encontrados" });
    }

    // Generar token
    const token = jwt.sign(
      { id: codFound._id, role: codFound.role }, // payload
      process.env.SECRET,                       // clave secreta
      { expiresIn: "1h" }                       // opcional: expira en 1h
    );

    // Respuesta
    return res.status(200).json({
      message: "session activated",
      token,
      user: {
        id: codFound._id,
        nombre: codFound.nombre,
        apellido: codFound.apellido,
        role: codFound.role,
      },
    });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default login;
