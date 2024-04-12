import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import OPUS from './assets/OPUS.png';

const App = () => {
  return (
    <div>
      <div className='w-[150px] h-[150px] top-0 left-0 fixed'>
        <a href=""><img src={OPUS} alt="" /></a>
      </div>
      <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read/:id' element={<Read />} />
      <Route path='/update/:id' element={<Update />} />
</Routes>
 </BrowserRouter>
      </div>
  )
}

export default App
