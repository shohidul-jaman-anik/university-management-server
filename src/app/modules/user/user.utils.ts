// import Users from './users.model'

import { Users } from './user.model';

export const findLastUserId = async () => {
  const lastUser = await Users.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString();
  //   increment by 1
  // const incrementedId = parseInt(currentId) +1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementedId;
};
