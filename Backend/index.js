import dotenv from "dotenv"
import express from "express";
import { connectDB } from "./db/connectDB.js";

dotenv.config({
    path: "./.env"
})
const app = express();
const port = process.env.PORT || 6600

app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

import authRoute from "./routes/auth.route.js";
app.use("/api/auth", authRoute);

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    })
    .catch(() => {
        console.log("MongoDB connection failed")
    })