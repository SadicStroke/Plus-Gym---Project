import express from "express";
import * as categoryController from "../controllers/categoryController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", verifyToken, categoryController.create);
router.put("/:id", verifyToken, categoryController.update);
router.delete("/:id", verifyToken, categoryController.remove);

export default router;