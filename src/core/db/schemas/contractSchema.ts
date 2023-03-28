import mongoose from "mongoose";

export const ContractSchema = new mongoose.Schema({
    patient: {
        type: Object,
        required: true,
    },
    product: {
        type: Object,
        required: true,
    },
    packSize: {
        type: Object,
        required: true,
    },
    discount: {
        type: Object,
        required: true,
    },
    totalValue: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
});