import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useAuth } from '../Auth';

const AddStudnet = () => {
 
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [fathername, setFathername] = useState('');
  const [address, setAddress] = useState('');
// console.log(currStudent)
  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get('token');
      const res = await axios.post(
        '/api/student/add',
        { name, fathername, address, mobile },
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
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-linear-to-r from-green-400 via-teal-400 to-blue-500 p-4">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 sm:p-12">
        <span className="font-bold text-2xl sm:text-4xl text-green-600 text-center mb-6">
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
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="text"
            placeholder="Enter Father's Name"
            required
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="number"
            placeholder="Enter Mobile Number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="text"
            placeholder="Enter Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition text-white font-semibold rounded-lg h-12 w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudnet;