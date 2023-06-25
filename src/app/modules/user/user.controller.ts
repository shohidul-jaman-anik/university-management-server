import { NextFunction, Request, Response } from 'express';
// import { z } from 'zod'
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const createUserZodSchema = z.object({
    //   body: z.object({
    //     role: z.string({
    //       required_error: 'Role is required',
    //     }),
    //   }),
    //   password: z.string().optional(),
    // })

    // await createUserZodSchema.parseAsync(req)

    const { user } = req.body;
    const result = await UserService.createUsers(user);
    res.status(200).json({
      success: true,
      message: 'User create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
