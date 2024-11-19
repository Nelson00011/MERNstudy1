//COMMENT:  BACKEND
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//COMMENT: middle ware to accept JSON data
app.use(express.json());

//COMMENT:ROUTER METHODS - got moved to ROUTER FILE
app.use("/api/products", productRoutes);

//COMMENT: LISTENING AT PORT: 5000
app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server started at localhost ${PORT}`)

});

// PASSCODE: 
