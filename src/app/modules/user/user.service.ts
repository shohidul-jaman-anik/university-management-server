/* eslint-disable no-unused-vars */
import config from '../../../config/index';
import ApiError from '../../../errors/ApiErro';
import { AcademicSemester } from '../academicSemester/academicSemesterModel';
import { IStudent } from '../student/student.interface';
import { IUsers } from './user.interface';
import { Users } from './user.model';
import { generateFacultyId, generateStudentId } from './user.utils';

const createStudent = async (
  student: IStudent,
  user: IUsers
): Promise<IUsers | null> => {
  // const academicSemester = {
  //   code: '01',
  //   year: '2025',
  // };
  // // Auto Generate Incremental id
  // const id = await generateFacultyId();

  // user.id = id;

  // set role
  user.role = 'student';

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );

  // Generate Student id
  const id = await generateFacultyId();

  // Default Password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  const createUser = await Users.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Fail to create Error');
  }
  return createUser;
};

export const UserService = {
  createStudent,
};
