import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

import usersRouter from './app/modules/users/user.route'
// const port = 5000

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUsers({
  //   id: '999',
  //   password: '1235',
  //   role: 'Student',
  // })
  res.send('Working Successfully!')
})

export default app
