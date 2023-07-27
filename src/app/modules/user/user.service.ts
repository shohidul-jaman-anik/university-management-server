/* eslint-disable no-unused-vars */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiErro';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemesterModel';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUsers } from './user.interface';
import { Users } from './user.model';
import { generateStudentId } from './user.utils';

const createStudent = async (
  student: IStudent,
  user: IUsers
): Promise<IUsers | null> => {
  // Default Password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }
  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );
  console.log(academicSemester, 'academic');

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // Generate Student id
    const id = await generateStudentId(academicSemester as IAcademicSemester);
    console.log(id, 'student id');
    // set custom id into both  student & user
    user.id = id as string;
    student.id = id as string;

    const newStudent = await Student.create([student], { session });

    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Faild to create student');
    }

    // set student _id --> into  user.student
    user.student = newStudent[0]._id;

    const newUser = await Users.create([user]);
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Faild to create student');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();

    throw error;
  }
  
  if (newUserAllData) {
    newUserAllData = await Users.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }
  // console.log(newUserAllData)

  return newUserAllData;
};

export const UserService = {
  createStudent,
};
