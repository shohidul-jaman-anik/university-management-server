import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from '../user/user.controller';
import { UserValidation } from '../user/user.validation';
import { StudentController } from './student.controller';
// import userController from './user.controller'

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.patch(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
);

export const StudentRoutes = router;
