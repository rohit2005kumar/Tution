import React from 'react'
import Cookies from 'js-cookie';
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    // const {login,logout,user}=useAuth();
    const token=Cookies.get("token");
    
    
    if(!token){
       return <Navigate to="/login"/>
    }
    // login('rohan')
  return children
  
}

export default Protected