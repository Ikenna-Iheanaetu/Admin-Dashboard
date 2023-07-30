import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

// Routers
import generalRouter from './routes/generalRoutes.js'
import clientRouter from './routes/clientRoutes.js';
import salesRouter from './routes/salesRoutes.js';
import managementRouter from './routes/managementRoutes.js';


// Configuration 
dotenv.config()
const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use("/client", clientRouter)
app.use("/general", generalRouter)
app.use("/management", managementRouter)
app.use("/sales", salesRouter)

const PORT = process.env.PORT || 9000

async function startServer(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to the database');
    } catch (error) {
        console.log(error);
    }
    app.listen(PORT, () => {
        console.log(`Connected to the backend at port ${PORT}`);
    })
}

startServer()
