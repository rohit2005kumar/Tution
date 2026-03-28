import express from 'express'
const app=express()
import 'dotenv/config'
 app.use(express.static('public'))
 const PORT= 8080
app.listen(PORT,()=>{
    console.log(`port listening onthe port number${PORT}`)
 })
  app.get('/',(req,res)=>{
  
    res.send('apma')
 })