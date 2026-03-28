import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import Navbar from './StudentComponent/Navbar'

const Dashboard = () => {
  const { user, logout, allstudent } = useAuth()
  const nav = useNavigate()

  return (
    <div className=' '>
      
      <Navbar/>
<div className=' h-full w-full mt-2  '>
   <Outlet />
</div>
      {/* <Outlet /> */}
    </div>
  )
}

export default Dashboard