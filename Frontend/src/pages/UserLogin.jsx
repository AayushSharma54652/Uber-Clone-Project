import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {

  const[email,setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password 
    })    
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="../uber logo black.png" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin