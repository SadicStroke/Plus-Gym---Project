import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("contraseña")) return next();
  this.contraseña = await bcrypt.hash(this.contraseña, 10);
  next();
});

export default mongoose.model("User", userSchema);
