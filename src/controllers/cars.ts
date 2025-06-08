import { Request, Response } from "express";
import connection from "../database";
import { CreateCars } from "../types/CarTypes";

export const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rows } = await connection.query("SELECT * FROM cars");
    res.status(200).json({ data: rows.length > 0 ? rows : [], success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong. Try again later.",
    });
  }
};

export const getCar = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const { rows } = await connection.query(
      "SELECT * FROM cars WHERE car_id=$1",
      [id]
    );
    res
      .status(200)
      .json({ data: rows.length > 0 ? rows[0] : [], success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong. Try again later.",
    });
  }
};

export const getCarPaginated = async (
  req: Request,
  res: Response
): Promise<void> => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;
  const limitString = limit.toString();
  const offsetString = offset.toString();
  try {
    const { rows: paginatedRows } = await connection.query(
      "SELECT * FROM cars LIMIT $1 OFFSET $2",
      [limitString, offsetString]
    );
    const { rows: singleRow } = await connection.query(
      "SELECT COUNT(*) AS total FROM cars"
    );

    const total = singleRow[0]?.total || 0;
    res.status(200).json({
      data: paginatedRows.length > 0 ? paginatedRows[0] : [],
      success: true,
      meta: { totalPages: Math.ceil(total / limit), page, limit, total },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong. Try again later.",
    });
  }
};

export const postCarsSimulation = (req: Request, res: Response) => {
  const { model, make, year, body_type, speed } = req.body as CreateCars;
  const carObj = { model, make, year, body_type, speed };
  const tempArray = [];
  try {
    tempArray.push(carObj);
    res.status(201).json({ data: tempArray, success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong. Try again later.",
    });
  }
};

// export const getCarHeaders = async(req: Request, res: Response) => {
//   try {
//   } catch (error) {}
//   res.send("Get headers only");
// };
