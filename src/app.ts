import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();

import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { generateFacultyId } from './app/modules/user/user.utils';
import router from './routes';
// const port = 5000

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);
app.use('/api/v1/', router);

app.get('/', () => {
  // throw new ApiError(400,'Ore baba error !')
  // throw new Error('Testing Error logger !')
  // next('Ore baba error !')
  // Promise.reject(new Error('Unhandle promise rejection'))
});

// Global Error Handler
app.use(globalErrorHandler);

// Handle Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   code: '01',
//   year: '2025',
// };

const testId = async () => {
  const testId = await generateFacultyId();
  // console.log(testId, 'iddddddddddd');
};
testId();

export default app;
