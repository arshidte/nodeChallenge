//Used express framework
//To run the code - npm run server

import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();
app.use(express.json());
dotenv.config();
connectDB();

import userRoutes from "./routes/userRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

app.use('/api/users', userRoutes);
app.use('/api/company', companyRoutes);


app.listen(5000, () => {
    console.log(`Server is running in port 5000`);
  });