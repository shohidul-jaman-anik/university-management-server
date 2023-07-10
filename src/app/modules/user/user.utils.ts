// import Users from './users.model'

import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { Users } from './user.model';

export const findLastStudentId = async () => {
  const lastStudent = await Users.findOne(
    { role: 'student' },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(5) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester 
): Promise<string | undefined> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  //   increment by 1
  // const incrementedId = parseInt(currentId) +1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`;

  return incrementedId;
};

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await Users.findOne(
    { role: 'faculty' },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(3) : undefined;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `F-${incrementedId}`;

  return incrementedId;
};
