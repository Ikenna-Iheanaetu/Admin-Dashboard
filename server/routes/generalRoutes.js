import express from 'express'
import { getDashboardStats, getUser } from '../controllers/generalController.js'

const generalRouter = express.Router()

generalRouter.get('/user/:id', getUser)
generalRouter.get('/dashboard', getDashboardStats)

export default generalRouter