import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  h-screen pt-8 w-full flex justify-between flex-col'>
        <img className='w-20 ml-8'src="../uber logo black.png"></img>
          <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
          </div>
        </div>
    </div>
  )
}

export default Start