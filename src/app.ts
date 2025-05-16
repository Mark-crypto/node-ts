import express from "express";
import indexRouter from "./routes/index";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is connected on ${PORT}`);
});
