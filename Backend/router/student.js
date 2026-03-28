import express from 'express'
const router=express.Router()
import { addStudent,searchstudent,deletepayment ,allstudent,deleteStudent,updateStudent,getpayment,studentPayment, studentinfobyitsid} from '../controllers/student.js'
router.get('/allstudent',allstudent)

router.post('/add',addStudent)
router.get('/:id',studentinfobyitsid)
router.post('/search',searchstudent)
router.delete('/delete/:id',deleteStudent);
router.patch('/update/:id',updateStudent);
router.post('/payment',getpayment)
router.delete('/payment/:id',deletepayment)
router.get('/:id/allpayment',studentPayment)
export default router;