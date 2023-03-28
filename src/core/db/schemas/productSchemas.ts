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
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "MedicinalProduct" }]
});

export const MedicinalProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    prices: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProductPrice" }],

});

export const ProductPriceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    packSize: { type: mongoose.Schema.Types.ObjectId, ref: "PackSize" }
});

export const PackSizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
