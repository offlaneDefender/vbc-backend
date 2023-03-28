import mongoose from "mongoose";
import { clearTestData, createTestData, testDataCheck } from "../../testUtils";

const connectDB = async (url: string, name: string) => {
    try {
        const conn = await mongoose.connect(url, {dbName: name});

        console.log(`[✅] MongoDB Connected: ${conn.connection.host}`);

        if (process.env.NODE_ENV === "development") {
            mongoose.set("debug", true);
        }

        await initData();
    } catch (error) {
        console.error(`[❌] MongoDB connection Error: ${error}`);
        process.exit(1);
    }
};

const initData = async () => {
    if( process.env.NODE_ENV !== 'test' ) return;
    try {
        if(await testDataCheck()) {
            await clearTestData();
        }
        await createTestData();
    } catch (error) {
        console.error(`[❌] Error checking test data: ${error}`);
    }
};

export default connectDB;