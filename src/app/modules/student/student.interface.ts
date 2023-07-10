import { InferSchemaType, Model } from 'mongoose';
import { studentSchema } from './student.model';

export type IStudent = InferSchemaType<typeof studentSchema>;

export type UserModel = Model<IStudent, Record<string, unknown>>;
