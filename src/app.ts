import express from "express";
import indexRouter from "./routes/index";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 5001;
const limit = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: "To many requests.Try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limit);
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is connected on ${PORT}`);
});
