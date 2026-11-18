import React, { useRef, useState } from 'react'
// import {useGsap} from'@gsap/react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import  {RiArrowDownSLine}  from"@remixicon/react";
import LocationSearchPanel from '../components/LOcationSearchPanel';
const Home = () => {

  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef=useRef(null)
  const penelCloseRef =useRef(null)

  const  submitHandler=()=>{
   e.preventDedault()  
  }

 useGSAP(function(){
   if(panelOpen){
       gsap.to(panelRef.current,{
      height:'70%',
      padding:24
    })

    gsap.to(penelCloseRef.current,{
      opacity:1
    })
   }else{
     gsap.to(panelRef.current,{
      height:'0%',
      padding:0
    })
    gsap.to(penelCloseRef.current,{
      opacity:0
    })
   }
  },[panelOpen])
  return (
    <>
    <div className='h-screen relative'>
      <img className='w-20 absolute left-6 top-6' src="https://ridex.mv/assets/ridex/logo-black.png" alt="" />

      <div className="h-screen w-screen">
       <img className='h-full w-full object-cover' src=" https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="hhome_image"/>
      </div>
    </div>


  <div className='flex flex-col justify-end h-screen  absolute top-0  w-full '>
     <div className='h-[30%] p-6 bg-white relative'>
     
      <h5 ref={penelCloseRef} onClick={()=>{
        setPanelOpen(false)
      }} className='absolute right-6 top-6 text-2xl'><RiArrowDownSLine /></h5>
     
     
      <h4 className='text-2xl font-semibold'>Find a trip</h4>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>

           <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

      <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
         onClick={()=>{
          setPanelOpen(true)
         }}       
       value={pickup}

       onChange={(e)=>{
        setPickup(e.target.value)
       }}      
      type="text" 
      placeholder='Add pick-up location'/>
      
      <input 
      className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
         onClick={()=>{
          setPanelOpen(true)
         }} 
        value={destination}
        onChange={(e)=>{
          setDestination(e.target.value)
        }}
      type="text"
        placeholder='Enter your Destination' />
    </form>
</div>
    
       <div ref={panelRef} className='bg-gray-200 h-0'>
               <LocationSearchPanel/>
       </div>
   </div>
      </>
  )
}

export default Home
