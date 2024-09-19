import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONG0DB_URI}/MERNAUTH`);
        console.log(`MongoDB connected succesfully || Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection failed due to ${error}`)
        process.exit(1)
    }
}