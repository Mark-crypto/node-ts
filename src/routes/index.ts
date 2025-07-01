import { Router } from "express";
import {
  getCar,
  getCarPaginated,
  getCars,
  postCarsSimulation,
} from "../controllers/cars";
require("../logger/logger.ts");
import dotenv from "dotenv";
dotenv.config();
import winston from "winston";

const paymentLogger = winston.loggers.get("paymentLogger");
const orderLogger = winston.loggers.get("orderLogger");

paymentLogger.info("Payment received");
orderLogger.info("Order was made");

let requestHandler = (path: string) => {
  let j;
  const profiler = paymentLogger.startTimer();
  for (let i = 0; i < 1000000000; i++) {
    j = i * 2;
  }
  profiler.done({ message: `Request to the ${path} is processed` });
};
requestHandler("/payment");
const router = Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCar);
router.get("/cars/filter", getCarPaginated);
// router.get("/cars/headers", getCarHeaders);
router.post("/cars", postCarsSimulation);

export default router;
