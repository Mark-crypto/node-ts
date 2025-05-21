import { Request, Response } from "express"

export const getCars = (req:Request,res:Response)=>{
res.send("Many cars")
}