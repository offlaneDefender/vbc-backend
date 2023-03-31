import { Discount } from "../products/types";

export interface Patient{
    _id: string;
    name: string;
    age: number;
    stage: 1 | 2 | 3 | 4;
    pfs: number;
    os: number;
    discount: Discount;
}