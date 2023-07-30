import express from 'express'
import { getProducts, getCustomers, getTransaction, getGeography } from '../controllers/clientController.js'
const clientRouter = express.Router()

clientRouter.route('/products').get(getProducts)
clientRouter.route('/customers').get(getCustomers)
clientRouter.route('/transaction').get(getTransaction)
clientRouter.route('/geography').get(getGeography)

export default clientRouter