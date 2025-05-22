import { Request, Response } from "express";

export const getCars = (req: Request, res: Response) => {
  res.send("Many cars");
};
export const getCar = (req: Request, res: Response) => {
  res.send("Single car");
};
export const getCarPaginated = (req: Request, res: Response) => {
  res.send("Filter cars you get");
};
export const getCarHeaders = (req: Request, res: Response) => {
  res.send("Get headers only");
};
export const postCarsSimulation = (req: Request, res: Response) => {
  res.send("Test post on data not persisted");
};
