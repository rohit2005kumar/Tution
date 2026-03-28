import axios from "axios"
import { useParams ,useNavigate, Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

// const nav=useNavigate()
 export const onsave=async(id,data)=>{
    try {
        
    const token=Cookies.get('token')
    console.log(data)
    const response=await axios.patch(`/api/student/update/${id}`,{data},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    toast(response.data)
//    Navigate
        
    } catch (error) {
        toast(error.message)
    }
}
const cancle=async()=>{
nav('/studentinfo/')
}
 export const deletePaymet=async (id) => {
    const token=Cookies.get('token')

  try {  
     const response= await axios.delete(`/api/student/payment/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    toast(response.data)
    
  } catch (error) {
    toast(error.message)
    
  }
    
}