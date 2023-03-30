import { ProductPriceModel } from "../core/db/models/models";
import { Request, Response } from "express";

const controller = {
    async getPrices(_: Request, res: Response) {
        const prices = await ProductPriceModel.find();
        res.json(prices);
    },
    async getPrice(req: Request, res: Response) {
        const price = await ProductPriceModel.findById(req.params.id);
        res.json(price);
    },
    async createPrice(req: Request, res: Response) {
        const price = await ProductPriceModel.create(req.body);
        res.json(price);
    },
    async updatePrice(req: Request, res: Response) {
        const updatedPrice = await ProductPriceModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedPrice);
    },
    async deletePrice(req: Request, res: Response) {
        const deletedPrice = await ProductPriceModel.findByIdAndDelete(req.params.id);
        res.json(deletedPrice);
    }
};

export default controller;