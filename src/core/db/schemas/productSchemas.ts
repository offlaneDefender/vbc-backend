import mongoose from "mongoose";

export const BrandedProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
});

export const MedicinalProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    prices: {
        type: Array,
        required: true,
    },
});

export const ProductPriceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    packSize: {
        type: Object,
        required: true,
    },
});

export const PackSizeSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: true,
    },
});

export const DiscountSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
});
