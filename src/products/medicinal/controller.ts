import { MedicinalProductModel } from "../../core/db/models/models";
import { Request, Response } from "express";
import { Types } from "mongoose";

const controller = {
    async getMedicinalProducts(_: Request, res: Response) {
        const medicinalProducts = await MedicinalProductModel.find();
        res.json(medicinalProducts);
    },
    async getMedicinalProduct(req: Request, res: Response) {
        const medicinalProduct = await MedicinalProductModel.findById(req.params.id);
        res.json(medicinalProduct);
    },
    async createMedicinalProduct(req: Request, res: Response) {
        const medicinalProduct = await MedicinalProductModel.create({
            ...req.body,
            _id: new Types.ObjectId()
        });
        res.json(medicinalProduct);
    },
    async updateMedicinalProduct(req: Request, res: Response) {
        const updatedMedicinalProduct = await MedicinalProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedMedicinalProduct);
    },
    async deleteMedicinalProduct(req: Request, res: Response) {
        await MedicinalProductModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Medicinal product deleted" });
    }
};

export default controller;