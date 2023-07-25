import { Router } from "express";
import photoRoutes from "./photo.js"

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});


router.use("/photo", photoRoutes);

export default router;