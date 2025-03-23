import jwt from "jsonwebtoken";
import { Employee } from "../model/emoloyee.js";
const newEmployee = async (req, res) => {
  try {
    const { name, email, department, dateOfJoining } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const employeeExist = await Employee.findOne({
      email,
    });
    if (employeeExist) {
      return res.status(400).json({ message: "Employee already exist" });
    }

    const employee = await Employee.create({
      name,
      email,
      department,
      dateOfJoining,
    });
    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET);
    return res
      .status(201)
      .cookie("cookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      })
      .json({ success: true, message: "employee created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    return res.status(200).json({ success: true, employees });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    console.log(id);
    if (!id) {
      return res.status(400).json({ message: "Employee Id is required" });
    }
    const employee = await Employee.findById(id);
    return res.status(200).json({ success: true, employee });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Employee Id is required" });
    }
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, email, department },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ success: true, message: "Employee updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Employee Id is required" });
    }
    await Employee.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Employee deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  newEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
