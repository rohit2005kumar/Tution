import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useAuth } from '../Auth';

const AddStudnet = () => {
 
  const [name, setName] = useState('');
  const [uploadedfile,setUploadedFile]=useState(null)
  const [mobile, setMobile] = useState('');
  const [fathername, setFathername] = useState('');
  const [address, setAddress] = useState('');
// console.log(currStudent)
  const formSubmit = async (e) => {
    e.preventDefault();
    const userData=new FormData()
    userData.append('image',uploadedfile)
    userData.append('address',address)
    userData.append('mobile',mobile)
    userData.append('name',name)
    userData.append('fathername',fathername)
//     for (let [key, value] of userData.entries()) {
//   console.log(key, value);
// }

    try {
      const token = Cookies.get('token');
      const res = await axios.post(
        '/api/student/add',
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data);
      console.log(res);

      setAddress('');
      setFathername('');
      setMobile('');
      setName('');
      setUploadedFile(null)
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center shadow p-4">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 sm:p-12">
        <span className="font-bold text-2xl sm:text-4xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  text-center mb-6">
          Add New Student
        </span>
        <form
          onSubmit={formSubmit}
          className="w-full flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none  transition"
          />
          <input
            type="text"
            placeholder="Enter Father's Name"
            required
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none  transition"
          />
          <input
            type="number"
            placeholder="Enter Mobile Number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none  transition"
          />
          <input
            type="text"
            placeholder="Enter Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none  transition"
          />
          <input
  type="file"
  onChange={(e)=>{setUploadedFile(e.target.files[0])}}
 
  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-blue-50 file:text-blue-700
             hover:file:bg-blue-100"
/>

          <button
            type="submit"
            className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg h-12 w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudnet;