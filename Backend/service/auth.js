import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const salt=10;

const passwordHasing=async(password)=>{
  const hashpass = await bcrypt.hash(password,salt)
  return hashpass;
}
const passwordComparing=async(userPassword,hashpassword)=>{
    const isMatch= await bcrypt.compare(userPassword,hashpassword);
    return isMatch;

}
export {passwordComparing,passwordHasing};
// const token=jwt.sign('rohit',"apna")
// console.log(token)
// console.log(jwt.verify(token,"apna"))
// console.log( Date().toISOString())