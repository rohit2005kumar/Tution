import React, { useState } from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://tutionbackend.onrender.com/user/login', { username, password });
      login(username);
      nav('/');
      setPassword('');
      setUsername('');
      toast(res.data);
    } catch (err) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-md">
        <span className="font-bold text-3xl sm:text-4xl text-indigo-600 mb-6">Login</span>
        <form onSubmit={formSubmit} className="w-full flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg h-12 w-full px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-lg h-12 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;