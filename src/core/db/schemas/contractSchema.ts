import mongoose from "mongoose";

export const ContractSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicinalProduct",
    },
    packSize: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PackSize",
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discount",
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
        required: false,
    },
});