import { Model, Schema, model } from 'mongoose'
import { IUsers } from './users.interface'

type UserModel = Model<IUsers, object>

const userSchema = new Schema<IUsers>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Users = model<IUsers, UserModel>('User', userSchema)
