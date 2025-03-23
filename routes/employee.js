import express from "express";
import {
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  newEmployee,
  updateEmployee,
} from "../controller/emoloyee.js";
import { isAuth } from "../middleware/auth.js";
const app = express();

app.get("/employees", getEmployees);
app.post("employee", newEmployee);
app.use(isAuth);
app.get("/employee/:id", getEmployeeById);
app.delete("/employee/:id", deleteEmployee);
app.put("/employee/:id", updateEmployee);

export default app;
