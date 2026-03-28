import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateStudent = ({ student, onSave, onCancel }) => {
  const nav=useNavigate()
  const [formData, setFormData] = useState({
    name: student.name || '',
    fathername: student.fathername || '',
    mobile: student.mobile || '',
    address: student.address || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call parent handler or API
    if (onSave) {
      onSave(student._id,formData);
      nav(`/studentinfo/${student._id}`)
      
    }
  };

  return (
    <div className="w-full sm:w-lg flex justify-center items-center p-4">
      <div className="flex flex-col border rounded-2xl shadow-lg bg-white w-full max-w-3xl p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-indigo-600">
          Update Student Info
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Father's Name</span>
            <input
              type="text"
              name="fathername"
              value={formData.fathername}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Mobile</span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Address</span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;