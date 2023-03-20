import { Request } from "express";

export default interface RequestUserId extends Request {
  userId?: string;
}
