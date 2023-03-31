import { Request, Response } from 'express'
import { Types } from 'mongoose'
import { PatientModel } from '../core/db/models/models';

const patientsController = {
    getPatients: async (_: Request, res: Response) => {
        const patients = await PatientModel.find().populate("discount");
        res.json(patients);
    },
    getPatient: async (req: Request, res: Response) => {
        const patient = await PatientModel.findById(req.params.id);
        res.json(patient);
    },
    createPatient: async (req: Request, res: Response) => {
        const patient = await PatientModel.create({
            ...req.body,
            _id: new Types.ObjectId()
        });
        res.json(patient);
    },
    updatePatient: async (req: Request, res: Response) => {
        const updatedPatient = await PatientModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPatient);
    },
    deletePatient: async (req: Request, res: Response) => {
        const deletedPatient = await PatientModel.findByIdAndDelete(req.params.id);
        res.json(deletedPatient);
    }
}

export default patientsController;