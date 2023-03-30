import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import connectDB from "./src/core/db/connect";
import mongoose from "mongoose";
import patientRoutes from './src/patients/routes';
import packSizeRoutes from './src/packSizes/routes';
import contractRoutes from './src/contracts/routes';
import discountRoutes from './src/discounts/routes';
import productRoutes from './src/products/routes';

config();

const url = process.env.DB_URL || "";
const completeUrl = url.replace("<password>", process.env.DB_PASSWORD || "")
const dbName = process.env.DB_NAME || "";

connectDB(completeUrl, dbName);

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//error handling
app.use((err: Error, _: Request, res: Response, __: Function) => {
    console.error("[❌] Error: ", err.message);
    res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`listening on port ${port}`));


app.get("/", (_: Request, res: Response) => {
    res.send("TypeScript Express App");
});

app.use('/patients', patientRoutes);

app.use('/products', productRoutes);

app.use('/packSizes', packSizeRoutes);

app.use('/contracts', contractRoutes);

app.use('/discounts', discountRoutes);

// graceful shutdown
process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log('[💤] Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});