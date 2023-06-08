import express from 'express'
import userController from './users.controller'

const route = express.Router()

route.post('/create-user', userController.createUser)

export default route
