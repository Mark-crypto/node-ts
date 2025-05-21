import { Router } from "express";
import { getCars } from "../controllers/cars";

const router = Router();

router.get("/cars", getCars);

export default router;
