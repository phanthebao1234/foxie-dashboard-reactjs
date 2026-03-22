import { BaseModel } from "../common/base.type";

export interface User extends BaseModel {
  username: string;
  phone?: string;
  role: "admin" | "user";
}

export interface UserPayload {
  username: string;
  password: string;
  phone?: string;
  role?: "admin" | "user";
}