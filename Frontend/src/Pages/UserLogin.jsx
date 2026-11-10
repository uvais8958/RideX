import React, { useState,useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import UserContext, { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {user,setUser}=useContext(UserDataContext);
  const navigate=useNavigate();

  const submitHandler=async (e)=>{
    e.preventDefault();

   const userData={
    email:email,
    password:password
   }

try{
     const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,
        userData)

   if(response.status === 200){
    const data=response.data
    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate("/home");
   } 

}catch(error){
  console.error(`Error during Login: ${error}`);
}

   setEmail('')
    setPassword('')
   
  }

  return (
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
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
             </div>

             <div>
             <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
             </div>
    </div>
  )
}

export default UserLogin
