import express from "express";
import * as productController from "../controllers/productController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


router.get("/", productController.getAll);
router.get("/:id", productController.getById);


router.post("/", verifyToken, productController.create);
router.put("/:id", verifyToken, productController.update);
router.delete("/:id", verifyToken, productController.remove);

export default router;