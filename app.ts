import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (req: Request, res: Response) => {
    res.send("TypeScript Express App");
});