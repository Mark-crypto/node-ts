import { Request, Response } from "express";
type CreateCars = {
  model: string;
  make: string;
  year: number;
  body_type: string;
  speed: number;
};

export const getCars = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
  res.send("Many cars");
};
export const getCar = (req: Request, res: Response) => {
  const id = req.params;
  try {
  } catch (error) {}
  res.send("Single car");
};
export const getCarPaginated = (req: Request, res: Response) => {
  const page = req.query;
  const limit = req.query;
  try {
  } catch (error) {}
  res.send("Filter cars you get");
};
export const getCarHeaders = (req: Request, res: Response) => {
  try {
  } catch (error) {}
  res.send("Get headers only");
};
export const postCarsSimulation = (req: Request, res: Response) => {
  const { model, make, year, body_type, speed }: CreateCars = req.body;
  const carObj = { model, make, year, body_type, speed };
  const tempArray = [];
  try {
    tempArray.push(carObj);
    res.status(201).json({ data: tempArray, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error });
  }
};
