import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/user.route'
// const port = 5000

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // await usersService.createUsers({
  //   id: '999',
  //   password: '1235',
  //   role: 'Student',
  // })
  // res.send('Working Successfully!')

  // throw new ApiError(400,'Ore baba error !')
  next('Ore baba error !')
})

// Global Error Handler
app.use(globalErrorHandler)

export default app

