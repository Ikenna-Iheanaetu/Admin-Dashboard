
import express from 'express'
import { getAdmins, getPerformance } from '../controllers/managementController.js'
const managementRouter = express.Router()

managementRouter.route("/admin").get( getAdmins )
managementRouter.route("/performance/:id").get( getPerformance )


export default managementRouter