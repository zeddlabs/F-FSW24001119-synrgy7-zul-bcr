import { Request } from "express";
import IUser from "./user.type";

export default interface IRequest extends Request {
  headers: {
    authorization: string
  },
  user: IUser,
}