import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const { ...userData } = req.body;
  const result = await UserService.createUsers(userData);

  // res.status(200).json({
  //   success: true,
  //   message: 'User create successfully',
  //   data: result,
  // });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
