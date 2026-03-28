import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Payment = () => {
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const formsubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('token');
      const response = await axios.post(
        'https://tutionbackend.onrender.com/student/payment',
        { name, fathername, amount, month },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAmount('');
      setFathername('');
      setMonth('');
      setName('');
      toast.success(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 sm:p-12">
        <span className="font-bold text-2xl sm:text-4xl text-red-500 text-center mb-6">
          Accept Payment
        </span>
        <form
          onSubmit={formsubmit}
          className="w-full flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="text"
            placeholder="Enter Father's Name"
            required
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="number"
            placeholder="Enter Amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="text"
            placeholder="Enter Month"
            required
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition text-white font-semibold rounded-lg h-12 w-full"
          >
            Accept
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;