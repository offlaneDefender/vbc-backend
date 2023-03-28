import { BrandedProductModel, ContractModel, DiscountModel, MedicinalProductModel, PackSizeModel, PatientModel, ProductPriceModel } from "../core/db/models/models";

export const createTestData = async () => {
    console.log("[📝] Creating test data...");

    const testPatient = new PatientModel({
        name: "Test Patient",
        age: 30,
        stage: 1,
        pfs: 0,
        os: 0,
    });

    try {
        await testPatient.save();
        console.log("[✅] Created 1 test Patient.")
    } catch (error) {
        console.error(
            `[❌] Error creating test Patient: ${error}`
        );
    }

    const testDiscount = new DiscountModel({
        name: "Test Discount",
        value: 0.1,
    });

    try {
        await testDiscount.save();
        console.log("[✅] Created 1 test Discount.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test Discount: ${error}`
        );
    }

    const testPackSize = new PackSizeModel({
        name: "Test Pack Size",
        size: 10,
    });

    try {
        await testPackSize.save();
        console.log("[✅] Created 1 test Pack Size.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test Pack Size: ${error}`
        );
    }

    const testPrice = new ProductPriceModel({
        name: "Test Price",
        price: 10,
        packSize: testPackSize._id,
    });

    try {
        await testPrice.save();
        console.log("[✅] Created 1 test Price.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test Price: ${error}`
        );
    }

    const testMedicinalProduct = new MedicinalProductModel({
        name: "Test Medicinal Product",
        prices: [testPrice._id],
    });

    try {
        await testMedicinalProduct.save();
        console.log("[✅] Created 1 test Medicinal Product.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test MedicinalProduct: ${error}`
        );
    }

    const testBrandedProduct = new BrandedProductModel({
        name: "Test Branded Product",
        company: "Test Company",
        products: [testMedicinalProduct._id],
    });

    try {
        await testBrandedProduct.save();
        console.log("[✅] Created 1 test Branded Product.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test BrandedProduct: ${error}`
        );
    }

    const testContract = new ContractModel({
        name: "Test Contract",
        products: [testBrandedProduct._id],
        discount: testDiscount._id,
        patient: testPatient._id,
        notes: '',
        packSize: testPackSize._id,
        totalValue: 0,
        startDate: new Date(),
    });

    try {
        await testContract.save();
        console.log("[✅] Created 1 test Contract.")
    }
    catch (error) {
        console.error(
            `[❌] Error creating test contract: ${error}`
        );
    }

    console.log("[✅] Test data created successfully.");
}

export const clearTestData = async () => {
    console.log("[🗑️] Clearing test data...");

    try {
        await ContractModel.deleteMany();
        console.log("[✅] Deleted test Contracts.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Contracts: ${error}`
        );
    }


    try {
        await BrandedProductModel.deleteMany();
        console.log("[✅] Deleted test Branded Products.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Branded Products: ${error}`
        );
    }


    try {
        await MedicinalProductModel.deleteMany();
        console.log("[✅] Deleted test Medicinal Products.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Medicinal Products: ${error}`
        );
    }


    try {
        await ProductPriceModel.deleteMany();
        console.log("[✅] Deleted test Prices.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Prices: ${error}`
        );
    }


    try {
        await PackSizeModel.deleteMany();
        console.log("[✅] Deleted test Pack Sizes.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Pack Sizes: ${error}`
        );
    }


    try {
        await DiscountModel.deleteMany();
        console.log("[✅] Deleted test Discounts.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Discounts: ${error}`
        );
    }


    try {
        await PatientModel.deleteMany();
        console.log("[✅] Deleted test Patients.")
    }
    catch (error) {
        console.error(
            `[❌] Error deleting test Patients: ${error}`
        );
    }

    console.log("[✅] Test data cleared successfully.");
}

export const testDataCheck = async () => {
    console.log("[🔎] Checking for test data...");

    const testContract = await ContractModel.findOne({ name: "Test Contract" });

    if (testContract) {
        console.log("[✅] Test data already exists.");
        return true;
    }
    else {
        console.log("[❌] Test data does not exist.");
        return false;
    }
}