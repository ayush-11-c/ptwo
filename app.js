import express from "express";
import connectDB from "./util/utility.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({});
import employee from "./routes/employee.js";
import user from "./routes/user.js";
const uri = process.env.CONNRCTING_STRING;
connectDB(uri);
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", user);
app.use("/api/v1", employee);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
