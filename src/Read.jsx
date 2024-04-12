import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <div className='w-[50%] rounded-lg bg-gray-500 shadow-2xl p-4 mt-40 items-center justify-center mx-auto text-white'>
        <div className='text-4xl text-white text-extrabold uppercase mb-4 mx-6'>
          <h1>Details of user</h1>
        </div>
        <div className='text-2xl text-semibold mb-4 leading-12'>
          <h2>Name : {data.name}</h2>
        </div>
        <div className='text-2xl text-semibold mb-4 leading-12'>
          <h2>Email : {data.email}</h2>
        </div>
        <div className='text-2xl text-semibold mb-4 leading-12'>
          <h2>Phone : {data.phone}</h2>
        </div>
        <div className='flex flex-row text-lg'>
          <Link to = {`/update/${id}`} className='bg-green-600 px-3 py-2 rounded-lg mx-2'>Edit</Link>
          <Link to='/' className='bg-blue-600 px-3 py-2 rounded-lg mx-2'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
