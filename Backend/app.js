import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectToDb from './controllers/dbConnection.js'
import userRouter from './router/authentication.js'
import studentrouter from './router/student.js'
import cookieParser from 'cookie-parser'
import checkUserIsLoginOrNot from './middleware/auth.js'
const app=express()
const PORT= process.env.PORT|| 1000
app.use(cors())
 app.listen(PORT,()=>{
    console.log(`port listening onthe port number${PORT}`)
 })
 connectToDb()

 app.use(express.json());
 app.use(express.urlencoded({extended:true}))
 app.use(cookieParser())
 app.get('/',(req,res)=>{
  
    res.send("hello")
 })
//  app.use(express.static('public'))
 
 app.use('/user',userRouter);
app.use(checkUserIsLoginOrNot)
 app.use('/student',studentrouter)
 app.get('/',(req,res)=>{
  
    res.send("hello")
 })
// console.log(process.env.PORT)