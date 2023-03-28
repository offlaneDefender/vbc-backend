export interface BrandedProduct{
    _id: string;
    name: string;
    company: string;
    products: MedicinalProduct[];
}

export interface MedicinalProduct{
    _id: string;
    name: string;
    prices: ProductPrice[];
}

export interface ProductPrice{
    _id: string;
    price: number;
    packSize: PackSize;
}

export interface PackSize{
    _id: string;
    size: number;
}

export interface Discount{
    _id: string;
    value: number; // percentage discount as a number between 0 and 1 (0.1 = 10%)
}