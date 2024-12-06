import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

//runs express server
const app = express();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Socialbook server is now running on port ${process.env.SERVER_PORT}`)
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

//mongoose connection
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose database is successfully connected")
});

db.on("error", console.error.bind(console, "Connection error:"));