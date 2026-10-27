import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const UserSignup = () => {

  const [firstName,setFirstName]=useState('')

const [lastName,SetLastName]=useState('')

const [email,setEmail]=useState('');

const [password,SetPassword]=useState('')

const [userData,setUserData]=useState({})
  
const submitHandler=(e)=>{
    e.preventDefault()

    const newUserData = {
      fullname:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    }

    setUserData(newUserData)
    console.log('Submitted Data:', newUserData)

    setEmail('')
    
    SetPassword('')
    
    setFirstName('')
    
    SetLastName('')

  }


  return (

<div>

        <div className='p-7 h-screen flex flex-col justify-between'>

         <div>

               <img
          className="w-37 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmpJmbk2wqQbuNMY9HE0AufgSHWliBHoMbwEod06kZw&s=10"
          alt="RideX"


/>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
        <input  
        type='text'
        className= 'bg-[#eeeeee]  rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-medium '
         placeholder='Firstname'
         value={firstName}
         onChange={(e)=>{
         setFirstName(e.target.value)
         }}
          required 
        />

        <input  
        className= 'bg-[#eeeeee]   w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-medium'
         placeholder='Lastname'
         type="text"
         value={lastName}
         onChange={(e)=>{
          SetLastName(e.target.value)
         }}
         required 
        />
        </div>


        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input  className= 'bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-medium '
         placeholder='email@example.com'
         type="email"
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
          required 
        />
        <h3 className='text-lg font-medium  mb-2'>Enter password</h3>
        <input 
         className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-medium '
        type="password"   
        required
        value={password}
        onChange={(e)=>{
          SetPassword(e.target.value)
        }}
        placeholder='password' />
        
        
        <button   
         className='bg-[#111] text-white font-semibold cursor-pointer mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-medium '>
          Loigin</button>
      
      </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>

             </div>

             <div>
            <p className='text-[10px] leading-tight '>
            This site is protected by recaptched by reCAPTHCA and the <span className='underline'>Google Privacy</span> policy and <span className='underline'>terms of services</span> applyi.
            </p>
             </div>
    </div>
    </div>
  )
}

export default UserSignup
