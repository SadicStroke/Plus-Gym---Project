import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (data) => User.create(data);

export const loginUser = async (email, contraseña) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuario no encontrado");
  
  const isMatch = await bcrypt.compare(contraseña, user.contraseña);
  if (!isMatch) throw new Error("Contraseña incorrecta");
  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return { user, token };
};