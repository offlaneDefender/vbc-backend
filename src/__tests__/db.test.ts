/**
 * jest test to see if the test database is connected.
 */

import { expect } from "chai";
import { config } from "dotenv";
import mongoose from "mongoose";
import connectDB from "../core/db/connect";

config();

const testDbUrl = (process.env.TEST_DB_URL || "").replace("<password>", process.env.TEST_DB_PASSWORD || "");
const testDbName = process.env.TEST_DB_NAME || "";

describe('Database tests', () => { 
    before(async () => {
        process.env.NODE_ENV = 'test';
        await connectDB(testDbUrl, testDbName);
    });

    after(async () => {
        await mongoose.connection.close();
    });

    it('should connect to the test database', async () => {
        const { databaseName } = mongoose.connection.db;
        expect(databaseName).to.equal('test');
        expect(mongoose.connection.readyState).to.equal(1);
    });

    it('should have a Patient model', async () => {
        expect(mongoose.models.Patient).to.not.be.undefined;
    });

    it('should have a Discount model', async () => {
        expect(mongoose.models.Discount).to.not.be.undefined;
    });

    it('should have a PackSize model', async () => {
        expect(mongoose.models.PackSize).to.not.be.undefined;
    });

    it('should have a ProductPrice model', async () => {
        expect(mongoose.models.ProductPrice).to.not.be.undefined;
    });

    it('should have a MedicinalProduct model', async () => {
        expect(mongoose.models.MedicinalProduct).to.not.be.undefined;
    });

    it('should have a BrandedProduct model', async () => {      
        expect(mongoose.models.BrandedProduct).to.not.be.undefined;
    });

    it('should have a Contract model', async () => {
        expect(mongoose.models.Contract).to.not.be.undefined;
    });
    
    it('should disconnect from the test database', async () => {
        await mongoose.connection.close();
        expect(mongoose.connection.readyState).to.equal(0);
    });
 })