import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from  'dotenv'


import postRoutes from './routes/posts.js';


const app= express();
dotenv.config()
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use('/posts',postRoutes)
//mongodb

const PORT = process.env.PORT|| 5000
const CONNECTION_URL=process.env.CONNECTION_URL
mongoose.connect(CONNECTION_URL,{useNewUrlParser : true,useUnifiedTopology:true})
.then(() => { app.listen(PORT,()=>{
    console.log(`the server is running sucessfully: ${PORT}`)
    
})} )
.catch((error)=>{
    console.log(`${error} did not connect`)
})
mongoose.set('useFindAndModify',false)