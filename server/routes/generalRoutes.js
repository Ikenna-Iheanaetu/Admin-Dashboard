import express from 'express'
import { getUser } from '../controllers/generalController.js'

const generalRouter = express.Router()

generalRouter.get('/user/:id', getUser)

export default generalRouter