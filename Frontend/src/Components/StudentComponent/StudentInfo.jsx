import axios from 'axios';
import  { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import PaymentCardinfo from './PaymentCardInfo';
import StudentInfoCard from './StudentInfoCard';
import {deletePaymet} from './Update'

const StudentInfo = () => {
  const {id}=useParams();
  const [studentInfo,setStudentInfo]=useState({})
  const [allPayment,setAllPayment]=useState([])
  const token=Cookies.get('token')
  const fetchdata=async()=>{
   try {
     const response=await axios.get(`/api/student/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const paymentres=await axios.get(`/api/student/${id}/allpayment`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    setStudentInfo(response.data)
    setAllPayment(paymentres.data|| [])
    // console.log(paymentres)
    // console.log(response)
   } catch (error) {
    toast(error.message)
    
   }

  }
  useEffect(()=>{
fetchdata()
  },[])
  return (
   <div className='p-4 h-full   flex justify-center items-center flex-col rounded-2xl gap-4' >
      <StudentInfoCard studentInfo={studentInfo}/>

          <div className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl text-white text-center sm:w-md'>All Payment</div>
          {
            allPayment .length==0 ? <h2>No payment found</h2> :
           
             allPayment.map((ele)=>{
              return <PaymentCardinfo key={ele._id} payment={ele} onDelete={deletePaymet} />
            })
           
          }
    </div>
  )
}

export default StudentInfo