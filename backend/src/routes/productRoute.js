import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.getAll);
// router.get("/:id", ...)
// router.post("/", ...)
// router.put("/:id", ...)
// router.delete("/:id", ...)

export default router;