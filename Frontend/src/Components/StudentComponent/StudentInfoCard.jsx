
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Auth';

const StudentInfoCard = ({ studentInfo }) => {
  const {setcurrStudent}=useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const{id}=useParams()
  const token=Cookies.get('token')
  const nav=useNavigate()

  const handleDelete = async() => {
    try {
      const response= await axios.delete(`/api/student/delete/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      nav('/')
    toast(response.data)
      
    } catch (error) {
      toast(error.message)
    }

    // Add your delete logic here
  };

  const handleUpdate = () => {
    setcurrStudent(studentInfo);
    nav(`/update/${studentInfo._id}`)
    // console.log("Update clicked for:", studentInfo);
    // Add your update logic here
  };

  return (
    <div className="w-full sm:w-lg flex justify-center items-center p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border rounded-2xl shadow-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-full max-w-3xl p-6 relative">
        
        {/* Student Info */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
            Student Details
          </h2>
          <p className="text-lg mb-2">
            <span className="font-semibold">Name:</span> {studentInfo.name}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Father's Name:</span> {studentInfo.fathername}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Mobile:</span> {studentInfo.mobile}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Address:</span> {studentInfo.address}
          </p>
        </div>

        {/* 3-dot menu */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-white text-2xl font-bold"
          >
            ⋮
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg">
              <button
                onClick={handleUpdate}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;