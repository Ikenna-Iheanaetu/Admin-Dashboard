import express from 'express'
import { getSales } from '../controllers/salesController.js'

const salesRouter = express.Router()

salesRouter.route('/sales').get( getSales )

export default salesRouter
