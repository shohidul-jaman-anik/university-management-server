import config from '../../../config/index'
import ApiError from '../../../errors/ApiErro'
import { IUsers } from './users.interface'
import { Users } from './users.model'
import { generateUserId } from './users.utils'

const createUsers = async (user: IUsers): Promise<IUsers | null> => {
  // Auto Generate Incremental id
  const id = await generateUserId()

  user.id = id

  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await Users.create(user)

  if (!createUser) {
    throw new ApiError(400,'Fail to create Error')
  }
  return createUser
}

export default {
  createUsers,
}
