import express from 'express'
import { login, signup } from '../controllers/authencation.js';

const router=express.Router();
router.post('/login',login);
router.post('/signup',signup);
// router.get("/apna",(req,res)=>{
//     res.send("apna college")
// })

export  default router;