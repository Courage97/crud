import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdAdd } from 'react-icons/io';

const Home = () => {
  const [data, setData] = useState([]);
  const [nextId, setNextId] = useState(1); // Initial ID counter

  useEffect(() => {
    axios
      .get('http://localhost:3000/user')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate(); 

  const handleDelete = (id, index) => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then((res) => {
        console.log(res);
        // Update the state to reflect the deletion
        setData((prevData) => prevData.filter((item, i) => i !== index));
      })
      .catch((err) => console.log(err));
  };

  const getNextId = () => {
    const id = nextId;
    setNextId((prevId) => prevId + 1); // Increment the ID counter
    return id;
  };

  const handleAdd = () => {
    const newItem = {
      id: getNextId(), // Get the next sequential ID
      name: 'New User',
      email: '',
      phone: ''
    };
    setData([...data, newItem]); // Add the new item to the list
  };
  return (
    <div className='max-w-full min-h-screen'>
      <div className='text-white text-4xl text-center font-semibold tracking-widest mt-12'>
        <h1>OPUS CRUD OPERATION</h1>
        <div className='w-[100%] rounded-lg bg-gray-500 shadow-2xl p-4 mt-8 items-center justify-center mx-auto'>
          <div className='flex flex-row mb-4 justify-end text-xl'>
            <Link to='/create' className='bg-violet-500 rounded-lg px-4 py-2'>
              ADD+
            </Link>
          </div>
          <table className='text-xl table-fixed border-separate border-spacing-2 border border-white'>
            <thead>
              <tr>
                <th className='border border-collapse p-1'>ID</th>
                <th className='border border-collapse p-1'>NAME</th>
                <th className='border border-collapse p-1'>EMAIL</th>
                <th className='border border-collapse p-1'>PHONE</th>
                <th className='border border-collapse p-1'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-400' : 'bg-gray-500'}>
                  <td className='border border-collapse p-2'>{d.id}</td>
                  <td className='border border-collapse p-2'>{d.name}</td>
                  <td className='border border-collapse p-2'>{d.email}</td>
                  <td className='border border-collapse p-2'>{d.phone}</td>
                  <td className='border border-collapse p-2 flex flex-row'>
                    <Link
                      to={`/update/${d.id}`}
                      className='mx-1 px-4 py-2 rounded-lg bg-orange-700'
                    >
                      EDIT
                    </Link>
                    <Link to={`/read/${d.id}`} className='mx-1 px-4 py-2 rounded-lg bg-blue-700'>
                      READ
                    </Link>
                    <button onClick={() => handleDelete(d.id, i)} className='mx-1 px-4 py-2 rounded-lg bg-green-700'>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;