import express, { Request, Response } from "express";
import { Application } from "express";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Hotlancer server");
});

export default app;
