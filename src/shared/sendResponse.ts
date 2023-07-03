// import { Response } from 'express';

// const sendResponse = <T>(
//   res: Response,
//   data: {
//     statusCode: number;
//     success: boolean;
//     message?: string;
//     errorMessage: string | null;
//     data?: T;
//   }
// ): void => {
//   res.status(data.statusCode).json({
//     statusCode: data.statusCode,
//     success: data.success,
//     message: data.message || null,
//     data: data.data || null,
//   });
// };

// export default sendResponse;

import { Response } from 'express';

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};
const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const sendResponse: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null,
    data: data.data || null,
  };
  res.status(data.statusCode).json(sendResponse);
};

export default sendResponse;
