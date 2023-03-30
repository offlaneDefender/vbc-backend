import { DiscountModel } from "../core/db/models/models";
import { Request, Response } from "express";

const discountsController = {
    getDiscounts: async (_: Request, res: Response) => {
        const discounts = await DiscountModel.find();
        res.json(discounts);
    },
    getDiscount: async (req: Request, res: Response) => {
        const discount = await DiscountModel.findById(req.params.id);
        res.json(discount);
    },
    createDiscount: async (req: Request, res: Response) => {
        const discount = await DiscountModel.create(req.body);
        res.json(discount);
    },
    updateDiscount: async (req: Request, res: Response) => {
        const updatedDiscount = await DiscountModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedDiscount);
    },
    deleteDiscount: async (req: Request, res: Response) => {
        const deletedDiscount = await DiscountModel.findByIdAndDelete(
            req.params.id
        );
        res.json(deletedDiscount);
    },
}

export default discountsController;
