import mongoose from "mongoose";

export const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    stage: {
        type: Number,
        required: true,
    },
    pfs: {
        type: Number,
        required: true,
    },
    os: {
        type: Number,
        required: true,
    },
});
