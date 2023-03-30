import { DiscountModel } from "../core/db/models/models";
import { Request, Response } from "express";
import { Types } from "mongoose";

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
        const discount = await DiscountModel.create({
            ...req.body,
            _id: new Types.ObjectId()
        });
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
