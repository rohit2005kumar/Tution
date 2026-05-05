import express from 'express'
import { upload } from '../service/cloudinary.js'
const router=express.Router()
import { addStudent,searchstudent,deletepayment ,allstudent,deleteStudent,updateStudent,getpayment,studentPayment, studentinfobyitsid} from '../controllers/student.js'
router.get('/allstudent',allstudent)

router.post('/add',upload.single('image'),addStudent)
router.get('/:id',studentinfobyitsid)
router.post('/search',searchstudent)
router.delete('/delete/:id',deleteStudent);
router.patch('/update/:id',updateStudent);
router.post('/payment',getpayment)
router.delete('/payment/:id',deletepayment)
router.get('/:id/allpayment',studentPayment)
export default router;