import e from "express";
import Payment from "../models/payment.js";
import Student from "../models/studentModel.js";
const allstudent=async (req,res) => {
    const studentdata=await Student.find();
    res.send(studentdata)
    
}
const addStudent=async(req,res)=>{
 try {
       const{name,fathername,mobile,address}=req.body;
    // const existStudnet=await Student.findOne({$and:[{name},{fathername}]});
    const existStudnet=await Student.findOne({name,fathername});
    if(existStudnet){ return res.send('Student already exist');}
    const newStudent= new Student({name,fathername,mobile,address});
    const savedata=await newStudent.save();
    res.send("student Added successfully",savedata);
 } catch (error) {
    console.log(error.message)
   return res.send(error.message)
 }

}
const deleteStudent=async(req,res)=>{
  try {
      const {id}=req.params;
    const studentinfo =  await Student.findByIdAndDelete(id);
    if(studentinfo)return res.send('student deleted successfully',studentinfo)
    res.send("studnet not exist");
    
        
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}
const updateStudent=async(req,res)=>{
    try {
        const {id}=req.params;
        const updates=req.body.data
        // console.log(updates)
       const studentinfo= await Student.findById(id);
       if(!studentinfo)return res.send("student does not exist")
      const upadatedStudent=  await Student.findByIdAndUpdate(id,updates);
     res.send("Student details upadted successfully",upadatedStudent)

        
    } catch (error) {
        console.log(error)
       return res.send(error.message)
    }
    

}
const getpayment=async(req,res)=>{
        try {
            const{name,fathername,month,amount}=req.body;
        const student=await Student.findOne({name,fathername});
        if(!student)return res.send("Student not Found")
        const{_id}=student;
        const newpayment= await Payment.create({user:_id,month,amount})
        res.send("payment accepted successfully",newpayment)
        } catch (error) {
           return res.student(error.message)
            
        }
        
       

    }
    const studentPayment=async(req,res)=>{
        try {
            const{id}=req.params;
            const allpaymentmadebystudent=await Payment.find({user:id})
            if(allpaymentmadebystudent==0) return res.send([])
                res.send(allpaymentmadebystudent)

            
        } catch (error) {
            res.send(error.message)
        }

    }
    const studentinfobyitsid=async(req,res)=>{
       try {
         const{id}=req.params;
         const student=await Student.findById(id);
         if(!student) return res.send("student info not found");
         res.send(student);

       } catch (error) {
        res.send(error.message)
       }
        

    }
    const searchstudent=async(req,res)=>{
        try {
            const {search}=req.body;
           
            const student=await Student.find({name:{$regex:search,$options:"i"}}).populate('paymentStudent');
            if(!student) return res.send("No Student found");
            res.send(student)
        } catch (error) {
            res.send(error.message)
        }
    }

    const deletepayment=async(req,res)=>{
        try {
        const {id}=req.params
        const delepayment=await Payment.findByIdAndDelete(id);
        if(!delepayment) return res.send("payment not deleted")
        res.send('payment deleted successfully')
        } catch (error) {
            res.send(error.message)
            
        }

    }
export{addStudent,deletepayment,deleteStudent,updateStudent,allstudent,getpayment,studentPayment,studentinfobyitsid,searchstudent}