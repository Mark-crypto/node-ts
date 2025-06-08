import { Router } from "express";
import {
  getCar,
  getCarPaginated,
  getCars,
  postCarsSimulation,
} from "../controllers/cars";

const router = Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCar);
router.get("/cars/filter", getCarPaginated);
// router.get("/cars/headers", getCarHeaders);
router.post("/cars", postCarsSimulation);

export default router;
