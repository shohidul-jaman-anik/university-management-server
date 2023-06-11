import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()

import usersRouter from './app/modules/users/user.route'
// const port = 5000

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: stirng | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

app.get('/', (req: Request, res: Response,next:NextFunction) => {
  // await usersService.createUsers({
  //   id: '999',
  //   password: '1235',
  //   role: 'Student',
  // })
  // res.send('Working Successfully!')

  throw new ApiError(400,'Ore baba error !')
 
})




export default app
