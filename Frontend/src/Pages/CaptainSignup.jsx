import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [captainData,setCaptainData]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptainData({
      email:email,
      password
    })
        setEmail('')
    setPassword('')
   
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
               <img
          className="w-37 mb-10"
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
      <p className='text-center'>Join a fleet?<Link to="/captain-signup" className='text-blue-400'> Register as a Captain</Link></p>

             </div>

             <div>
              <Link to="/login" className='flex items-center justify-center bg-[#d5622d] text-white font-semibold cursor-pointer mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>
                Sign in as User
              </Link>
             </div>
    </div>
  )
}

export default CaptainSignup
