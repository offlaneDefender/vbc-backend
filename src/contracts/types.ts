import { Patient } from "../patients/types";
import { MedicinalProduct, PackSize, ProductPrice, Discount } from "../products/types";

export interface Contract{
    _id: string;
    patient: Patient;
    product: MedicinalProduct;
    packSize: PackSize;
    discount: Discount;
    totalValue: number;
    startDate: Date;
    notes: string;
}