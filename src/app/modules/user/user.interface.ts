import { Model } from 'mongoose';

export type IUsers = {
  id: string;
  role: string;
  password: string;
};

export type UserModel = Model<IUsers, Record<string, unknown>>;
