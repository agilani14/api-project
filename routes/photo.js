import { Router } from "express";
import * as controllers from "../controllers/photo.js";

const router = Router();

router.get("/", controllers.getPhotos);
router.get("/:id", controllers.getPhoto);
router.post("/", controllers.createPhoto);
router.put("/:id", controllers.updatePhoto);
router.delete("/:id", controllers.deletePhoto);

export default router;