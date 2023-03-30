import { PackSizeModel } from "../core/db/models/models";
import { Request, Response } from "express";
import { Types } from "mongoose";

const controller = {
    async getPackSizes(_: Request, res: Response) {
        const packSizes = await PackSizeModel.find();
        res.json(packSizes);
    },
    async getPackSize(req: Request, res: Response) {
        const packSize = await PackSizeModel.findById(req.params.id);
        res.json(packSize);
    },
    async createPackSize(req: Request, res: Response) {
        const packSize = await PackSizeModel.create({
            ...req.body,
            _id: new Types.ObjectId()
        });
        res.json(packSize);
    },
    async updatePackSize(req: Request, res: Response) {
        const updatedPackSize = await PackSizeModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedPackSize);
    },
    async deletePackSize(req: Request, res: Response) {
        const deletedPackSize = await PackSizeModel.findByIdAndDelete(req.params.id);
        res.json(deletedPackSize);
    }
};

export default controller;