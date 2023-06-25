import cors from 'cors';
import express, { Application } from 'express';
const app: Application = express();

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
// const port = 5000

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use('/api/v1/users/', UserRoutes);

app.get('/', () => {
  // throw new ApiError(400,'Ore baba error !')
  // throw new Error('Testing Error logger !')
  // next('Ore baba error !')
  // Promise.reject(new Error('Unhandle promise rejection'))
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
