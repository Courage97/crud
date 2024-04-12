// Update.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        navigate("/")
    axios.put(`http://localhost:3000/user/${id}`, formData)
      .then(() => {
        console.log('User updated successfully');
        history.push(`/read/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
    <div className='w-[50%] rounded-lg bg-gray-500 shadow-2xl p-4 mt-40 items-center justify-center mx-auto'>
      <h1 className='text-white text-2xl font-bold py-4'>Update User Details</h1>
      <form onSubmit={handleSubmit}  className='text-lg text-white mx-4'>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}
        className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3' />

        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} 
        className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3'/>

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}
        className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3' />
       <div className='flex flex-row text-lg' >
       <button className='bg-green-600 px-3 py-2 rounded-lg mx-2'>Update</button>
        <Link to={`/read/${id}`} className='bg-blue-600 px-3 py-2 rounded-lg mx-2'>Cancel</Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Update;
