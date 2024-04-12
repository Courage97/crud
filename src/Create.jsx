import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [value, setValue] = useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/user', value)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <div className='w-[50%] rounded-lg bg-gray-500 shadow-2xl p-4 mt-40 items-center justify-center mx-auto'>
          <h1 className='text-white text-2xl font-bold py-4'>ADD USER</h1>
          <form action="" className='text-lg text-white mx-4' onSubmit={handleSubmit}>
            <label htmlFor="">
              Name:
              <input type="text" placeholder='Enter Name' required
              onChange={e =>setValue({...value, name: e.target.value})}
              className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3' />
            </label><br />
            <label htmlFor="">
              Email:
              <input type="text"  placeholder='Enter email' required
              onChange={e =>setValue({...value, email: e.target.value})}
              className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3'/>
            </label><br />
            <label htmlFor="">
              Phone:
              <input type="text"  placeholder='enter phone number' required
              onChange={e =>setValue({...value, phone: e.target.value})}
              className='outline-none bg-transparent border border-white rounded-lg p-1 w-[100%] mx-2 my-3'/>
            </label>
            <div className='flex flex-row text-lg'>
                <button type = "submit"className='bg-green-600 px-3 py-2 rounded-lg mx-2'>Submit</button>
                <Link to = '/' className='bg-blue-600 px-3 py-2 rounded-lg mx-2'>Back</Link>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Create
