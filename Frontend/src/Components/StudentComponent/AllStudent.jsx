import React from 'react'
import { useAuth } from '../Auth'
import CardStudentInfo from './CardStudentInfo';
import { Link,useNavigate } from 'react-router-dom';
import StudentCard from './StudentCard';

export const AllStudent = () => {
    const {allstudent}=useAuth();
    const nav=useNavigate()
  return<div className='mb-8  flex flex-col gap-2 sm:gap-4 sm:grid sm:grid-cols-3'>
  { allstudent.length==0? <h2>No more students</h2> :allstudent.map((ele)=>{
    return (
  <StudentCard  key={ele._id}student={ele} onclickcustom={()=>{
     nav(`/studentinfo/${ele._id}`)
     
  }}/>
    //  <CardStudentInfo key={ele._id}  name={ele.name} fathername={ele.fathername} address={ele.address} mobile={ele.mobile}/>
   
  )
  })}
  </div>
}
