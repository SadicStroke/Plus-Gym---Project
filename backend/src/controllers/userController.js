import * as userService from "../services/userService.js";

export const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: "Usuario creado con éxito", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const token = await userService.loginUser(email, contraseña);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};