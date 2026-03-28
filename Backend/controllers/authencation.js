import User from "../models/user.js";
import jwt from 'jsonwebtoken'
// import 'dotenv/config'
import { passwordComparing, passwordHasing } from "../service/auth.js";

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existUser = await User.findOne({ username: username })
        if (existUser) {
            return res.send('user exist');
        }
        const hashpassword = await passwordHasing(password)
        // console.log(hashpassword)
        const newUser = await User.create({ username, password: hashpassword, email })
        //    const data=await newUser.save()
        res.send(` user saved ${newUser}`)

    } catch (error) {
        res.send(error.message)
    }


}
const login = async (req, res) => {
   try {
     const { username, password } = req.body;
    const curruser= await User.findOne({username});
    if(!curruser) return res.send("Wrong credentials");
     const isMatch= await passwordComparing(password,curruser.password);
     if(isMatch){
       const token =jwt.sign({"username":username,}, process.env.JWTSECRETKEY,{expiresIn:'1h'});
       res.cookie("token",token,)
       return res.send("login successfully")
     }
     res.send("wrong password credentials");
   } catch (error) {
    return res.send(error.message)
    
   }
}
export { signup , login };