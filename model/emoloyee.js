import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    dateOfJoining: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", schema);
