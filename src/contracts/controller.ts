import { Request, Response } from "express";
import { Types } from "mongoose";
import { ContractModel } from "../core/db/models/models";

const contractsController = {
    getContracts: async (_: Request, res: Response) => {
        const contracts = await ContractModel.find();
        res.json(contracts);
    },
    getContract: async (req: Request, res: Response) => {
        const contract = await ContractModel.findById(req.params.id);
        res.json(contract);
    },
    createContract: async (req: Request, res: Response) => {
        const contract = await ContractModel.create({
            ...req.body,
            _id: new Types.ObjectId()
        });
        res.json(contract);
    },
    updateContract: async (req: Request, res: Response) => {
        const updateContract = await ContractModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updateContract);
    },
    deleteContract: async (req: Request, res: Response) => {
        const deleteContract = await ContractModel.findByIdAndDelete(
            req.params.id
        );
        res.json(deleteContract);
    },
}

export default contractsController;
