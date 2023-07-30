import express from 'express'
import { getProducts, getCustomers, getTransaction } from '../controllers/clientController.js'
const clientRouter = express.Router()

clientRouter.route('/products').get(getProducts)
clientRouter.route('/customers').get(getCustomers)
clientRouter.route('/transaction').get(getTransaction)

export default clientRouter