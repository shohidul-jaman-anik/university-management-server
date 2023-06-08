import { Request, Response } from 'express'
import userService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUsers(user)
    res.status(200).json({
      success: true,
      message: 'User create successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to create user ${error}`,
    })
  }
}

export default {
    createUser
}
