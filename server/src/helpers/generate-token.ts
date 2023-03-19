import jwt from "jsonwebtoken";

const generateToken = async (id: string) => {
  return jwt.sign({ id }, `${process.env.JWT_PRIVATE_KEY}`, {
    expiresIn: "24hs",
  });
};

export default generateToken;
