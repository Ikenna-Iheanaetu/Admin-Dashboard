import express from 'express'
import { getProducts, getCustomers } from '../controllers/clientController.js'
const clientRouter = express.Router()

clientRouter.route('/products').get(getProducts)
clientRouter.route('/customers').get(getCustomers)

export default clientRouter