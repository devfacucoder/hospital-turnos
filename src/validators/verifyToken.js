import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];

    if (!headerToken) {
      return res.status(401).json({ message: "No se proporcionó token" });
    }
    // Extraer el token sin el "Bearer "
    const token = headerToken.startsWith("Bearer ")
      ? headerToken.slice(7, headerToken.length)
      : headerToken;

    // Verificar token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Guardar info del usuario en el request
    req.userId = decoded._id; // depende de qué guardaste en el payload
    next();
  } catch (error) {
    console.error("Error en verifyToken:", error.message);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

export default verifyToken;
