import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import RequestUserId from "../types/types";

interface IPayload extends Request {
  id: string;
  iat: number;
  exp: number;
}

const verifyToken = (req: RequestUserId, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).send({ msg: "No estas autenticado" });
  }

  const payload = jwt.verify(
    token,
    `${process.env.JWT_SECRET_KEY}`
  ) as IPayload;

  req.userId = payload.id;

  next();
};

export default verifyToken;
