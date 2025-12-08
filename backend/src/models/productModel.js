import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

export default mongoose.model("Product", productSchema);