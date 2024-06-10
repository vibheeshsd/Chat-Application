import express, { json } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// import cors from 'cors'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDb from './Db/connectToMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/" , (req, res)=>{
    // root route http://localhost:5000/
//     res.send("Hello World!")
// })


app.listen(PORT, () =>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})