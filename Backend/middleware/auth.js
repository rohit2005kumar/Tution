import jwt from 'jsonwebtoken'
const checkUserIsLoginOrNot=(req,res,next)=>{
//     try {
//         const {token}=req.cookies;
//     if(!token)return res.send({message:"Login please"});
//    const ismatch= jwt.verify(token,process.env.JWTSECRETKEY);
//    if(!ismatch) return res.send({message:"invaild token"})
//     next()
//     } catch (error) {
//         res.send({message:error.message})
//     }
const authheader=req.headers["authorization"];
if(!authheader) return res.status(401).send("No token provided")
   
    try {
        const token=authheader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
        req.user = decoded; // attach user info to request
    next();
    } catch (error) {
        return res.status(403).json({ er: "Invalid token" ,error});

    }
   

}
export default checkUserIsLoginOrNot;