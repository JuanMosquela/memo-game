import jwt from "jsonwebtoken";

const generateToken = async (id: string) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "24h",
  });
};

export default generateToken;
