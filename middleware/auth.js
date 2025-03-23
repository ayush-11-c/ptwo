import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies["cookie"];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized Login First " });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded._id;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { isAuth };
