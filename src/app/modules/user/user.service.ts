import config from '../../../config/index';
import ApiError from '../../../errors/ApiErro';
import { IUsers } from './user.interface';
import { Users } from './user.model';
import { generateFacultyId } from './user.utils';

const createUsers = async (user: IUsers): Promise<IUsers | null> => {
  const academicSemester = {
    code: '01',
    year: '2025',
  };
  // Auto Generate Incremental id
  const id = await generateFacultyId();

  user.id = id;

  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createUser = await Users.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Fail to create Error');
  }
  return createUser;
};

export const UserService = {
  createUsers,
};
