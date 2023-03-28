import { BrandedProductSchema } from "../schemas/productSchemas";
import { ContractSchema } from "../schemas/contractSchema";
import { MedicinalProductSchema } from "../schemas/productSchemas";
import { PackSizeSchema } from "../schemas/productSchemas";
import { PatientSchema } from "../schemas/patientSchema";
import { ProductPriceSchema } from "../schemas/productSchemas";
import { DiscountSchema } from "../schemas/productSchemas";
import mongoose from "mongoose";

export const ContractModel = mongoose.model("Contract", ContractSchema);
export const PatientModel = mongoose.model("Patient", PatientSchema);
export const MedicinalProductModel = mongoose.model("MedicinalProduct", MedicinalProductSchema);
export const BrandedProductModel = mongoose.model("BrandedProduct", BrandedProductSchema);
export const ProductPriceModel = mongoose.model("ProductPrice", ProductPriceSchema);
export const PackSizeModel = mongoose.model("PackSize", PackSizeSchema);
export const DiscountModel = mongoose.model("Discount", DiscountSchema);
