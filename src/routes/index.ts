import { Router, Response, Request } from "express";

const router = Router();

router.get("/home", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default router;
