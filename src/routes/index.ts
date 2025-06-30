import { Router } from "express";
import {
  getCar,
  getCarPaginated,
  getCars,
  postCarsSimulation,
} from "../controllers/cars";
import winston from "winston";

const { combine, timestamp, printf } = winston.format;
const logger = winston.createLogger({
  level: "debug",
  // format: winston.format.json(),
  format: combine(
    timestamp(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log", level: "error" }),
  ],
});

logger.info("An info log");
logger.error("An error log");

const router = Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCar);
router.get("/cars/filter", getCarPaginated);
// router.get("/cars/headers", getCarHeaders);
router.post("/cars", postCarsSimulation);

export default router;
