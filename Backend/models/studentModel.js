import mongoose, { set } from "mongoose";
import Payment from "./payment.js";
const studentModel= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        set:(v)=>  v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()

    },
    fathername:{
        type:String,
        required:true,
        set:(v)=>  v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
    },
    mobile:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
        set:(v)=>  v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
    },
    image:{
        type:String,
        default:"https://res-console.cloudinary.com/dnp5p4by7/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/amFxZ29nY3g4Zmp6dm53b29tYzA=/template_primary"
    }

})
studentModel.virtual('paymentStudent',{
    ref:"payment",
    localField:"_id",
    foreignField:"user"
})
studentModel.set('toObject',{virtuala:true})
studentModel.set('toJSON',{virtuals:true})

studentModel.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Payment.deleteMany({ user: doc._id });
    console.log('Deleted payments for student:', doc._id);
  }
});
 const Student=mongoose.model("Student",studentModel)
 export default Student;