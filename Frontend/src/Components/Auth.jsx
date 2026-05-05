import { createContext,  useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const authcontext=createContext(null);
export const AuthProvider=({children})=>{
    const [user,setuser]=useState('')
    const [allstudent,setAllStudent]=useState([])
    const[searchstu,setSearchstu]=useState([])
    const[currStudent,setcurrStudent]=useState([]);
    const nav=useNavigate()
    const login=(userdata)=>{
        setuser(userdata)
    }
    const logout=()=>{
        Cookies.remove('token')
        setuser('')
        toast("logout Successfully")
        nav('/login')
    }
    const token=Cookies.get('token')
    useEffect(()=>{
        async function fetchuser() {
              const studentdata =  await axios.get("/api/student/allstudent",{headers:{Authorization:`Bearer ${token}`,
}}) 
 setAllStudent(studentdata.data);
        }
        fetchuser()
   

    },[])
    
    return  (<authcontext.Provider value={{login,logout,user,allstudent,searchstu,setSearchstu,currStudent,setcurrStudent}}>
        {children}
    </authcontext.Provider>) 
   

}
export const useAuth=()=>{
    return useContext(authcontext)
}