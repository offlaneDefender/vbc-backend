import mongoose from "mongoose";
import { clearTestData, createTestData, testDataCheck } from "../../testData";

const connectDB = async (url: string) => {
    try {
        const conn = await mongoose.connect(url);

        console.log(`[✅] MongoDB Connected: ${conn.connection.host}`);

        if (process.env.NODE_ENV === "development") {
            mongoose.set("debug", true);
        }
        
        await clearTestData();

        await createTestData();
    } catch (error) {
        console.error(`[❌] MongoDB connection Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;