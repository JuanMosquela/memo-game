import jwt from "jsonwebtoken";

const generateToken = async (id: string) => {
  const token = jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "24h",
  });

  return token;
};

export default generateToken;
