import { BrandedProductModel } from "../../core/db/models/models";
import { Request, Response } from "express";

const controller = {
    async getBrandedProducts(_: Request, res: Response) {
        const brandedProducts = await BrandedProductModel.find();
        res.json(brandedProducts);
    },
    async getBrandedProduct(req: Request, res: Response) {
        const brandedProduct = await BrandedProductModel.findById(req.params.id);
        res.json(brandedProduct);
    },
    async createBrandedProduct(req: Request, res: Response) {
        const brandedProduct = await BrandedProductModel.create(req.body);
        res.json(brandedProduct);
    },
    async updateBrandedProduct(req: Request, res: Response) {
        const updatedBrandedProduct = await BrandedProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedBrandedProduct);
    },
    async deleteBrandedProduct(req: Request, res: Response) {
        const deletedBrandedProduct = await BrandedProductModel.findByIdAndDelete(req.params.id);
        res.json(deletedBrandedProduct);
    }
}

export default controller;