import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import connectDB from "./src/core/db/connect";

config();

const url = process.env.DB_URL || "";
const completeUrl = url.replace("<password>", process.env.DB_PASSWORD || "")

connectDB(completeUrl);

const app: Express = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (req: Request, res: Response) => {
    res.send("TypeScript Express App");
});