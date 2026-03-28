import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Search, Menu, X, PlusCircle, Users, ReceiptText, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { logout, searchstu, setSearchstu } = useAuth()
  const nav = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const token = Cookies.get('token')
    {
      if(!search)return toast("enter a valid name")
    }
    const response = await axios.post('https://tutionbackend.onrender.com/student/search', { search },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    // console.log(response)

    setSearch('')
    setSearchstu(response.data)
    nav('/search')

  }

  const enterpress = async (e) => {

    if (e.key == "Enter") {
      fetchData()
      // setSearchStudent('')


    }

    // console.log(search)
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* 1. Logo Section */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
              Khushboo Tution
            </span>
          </div>

          {/* 2. Desktop Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              {/* <form action="" onSubmit={enterpress}> */}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-purple-400 transition-all text-sm"
                placeholder="Search students..."
                onKeyPress={enterpress}
                required

              />
              {/* </form> */}
            </div>
          </div>

          {/* 3. Desktop Menu Fields */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => { nav('/') }}
            >
              <Users size={18} />
              <span>Total Students</span>

            </button>
            <button onClick={() => { nav('/payment') }} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              <ReceiptText size={18} />
              <span>Add Fee</span>
            </button>
            <button onClick={() => { nav('/addnew') }} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              <PlusCircle size={18} />
              <span>Add New</span>
            </button>

            {/* Logout Button with your Gradient */}
            <button onClick={() => { logout() 
                  
                 }} 
                  className="flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95 transition-all shadow-md">
              <LogOut size={16}
                
              />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-hidden"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-100 p-4 space-y-4`}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
          placeholder="Search..."
          onKeyPress={enterpress}
        />
        <div className="flex flex-col space-y-3">
          <Link to={'/'} className="text-gray-600 font-medium">Total Students</Link>
          <Link to={'/payment'} className="text-gray-600 font-medium">Add Fee</Link>
          <Link to={'/addnew'} className="text-gray-600 font-medium">Add New</Link>
          <button className="w-full py-3 rounded-xl text-white font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => { logout() }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;