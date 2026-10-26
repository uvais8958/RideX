import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const UserLogin = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userData,setUserData]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
        setEmail('')
    setPassword('')
   
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
               <img
          className="w-37 mb-3"
          src="https://ridex.mv/assets/ridex/logo-black.png"
          alt="RideX"
        />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input  className= 'bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
         placeholder='email@example.com'
         type="email"
         value={email}
        onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <h3 className='text-lg font-medium  mb-2'>Enter password</h3>
        <input type="password" 
            value={password}
      onChange={(e) => setPassword(e.target.value)}
           className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
        required
        placeholder='password' />
        <button    className=
        'bg-[#111] text-white font-semibold cursor-pointer mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>
          Loigin</button>
      </form>
      <p className='text-center'>New here?<Link to="/signup" className='text-blue-400'> Create a new Account</Link></p>

             </div>

             <div>
              <Link to="/captain-signup" className='flex items-center justify-center bg-[#10b461] text-white font-semibold cursor-pointer mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>
                Sign in as Captain
              </Link>
             </div>
    </div>
  )
}

export default UserLogin
