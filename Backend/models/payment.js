import mongoose from "mongoose";
const paymentschema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    month:{
         type:String,
         required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
},{timestamps:true}
)
const Payment=mongoose.model('payment',paymentschema);
export default Payment