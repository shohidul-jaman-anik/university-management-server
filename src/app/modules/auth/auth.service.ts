import { Users } from '../user/user.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  //   Check user exist
const isUserExist =await Users.findOne({id},{id:1,password:1,needsPassword:1})
  return {};
};

export const AuthService = {
  loginUser,
};
