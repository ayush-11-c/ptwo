import { User } from "../model/user.js";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res
      .status(201)
      .cookie("cookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      })
      .json({ success: true, message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res
      .status(200)
      .cookie("cookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      })
      .json({ success: true, message: "User logged" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { signup, login };
