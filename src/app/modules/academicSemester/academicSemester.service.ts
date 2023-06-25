import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemeter } from './academicSemesterModel';

const createSemester = async (payload: IAcademicSemester): Promise<IAcademicSemester> => {
  const result = await AcademicSemeter.create(payload);
  return result;
};

export const AcademicSemesterService={
    createSemester,
}