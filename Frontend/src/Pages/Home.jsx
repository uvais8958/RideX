import React, { useRef, useState } from 'react'
// import {useGsap} from'@gsap/react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import  {RiArrowDownSLine , RiUserLine , RiMoneyRupeeCircleLine}  from"@remixicon/react";
import LocationSearchPanel from '../components/LocationSearchPanel';
const Home = () => {

  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef=useRef(null)
  const vehiclePanelRef=useRef(null)
  const penelCloseRef =useRef(null)
  const [vehiclePanel,setVehiclePanel]=useState(false);

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


  useGSAP(function(){
   if(vehiclePanel){
     gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
   }else{
     gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
   }
  },[vehiclePanel])
  return (
    <>
    <div className='h-screen relative overflow-hidden'>
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

           <div className="line absolute h-20 w-1 top-[25%]  overflow-hidden ml-8  bg-gray-700 rounded-xl"></div>

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
               <LocationSearchPanel  vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
       </div>


       <div ref={vehiclePanelRef} className='fixed  z-10 w-full translate-y-full bg-white bottom-0 px-3 py-8 '>

           <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>

              <div className='flex border-2 active:border-black border-gray-700 cursor-pointer mb-2 rounded-xl w-full items-center justify-between'>
          <img className='h-20' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82NDkzYzI1NS04N2M4LTRlMmUtOTQyOS1jZjcwOWJmMWI4MzgucG5n'></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>RidexGo <span className='flex gap-2 text-black'><RiUserLine />4</span></h4>
            <h5 className='font-medium  text-base'>2 mins away</h5>
            <p className='font-normal text-base text-gray-600'>Affordable,compact rides</p>
          </div>
          <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>193.00</span></h1>
        </div>

        <div className='flex border-2 mb-2 active:border-black border-gray-700 cursor-pointer rounded-xl w-full items-center justify-between'>
          <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ucxh1zn4nuKyu5H7FvXshQQyLXBQzfmGyrXVZ_-VEw&s'></img>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span className='flex gap-2 text-black'><RiUserLine />1</span></h4>
            <h5 className='font-medium  text-base'>3 mins away</h5>
            <p className='font-normal text-base text-gray-600'>Affordable,motorcycle rides</p>
          </div>
          <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>70.00</span></h1>
        </div>


          
        <div className='flex border-2 mb-2 active:border-black border-gray-700 cursor-pointer rounded-xl w-full items-center justify-between'>
          <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-CjQDMzUqeewVhOeD_K7Zy62xNHI0ZPmtIAx9wkRUg&s'></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Auto <span className='flex gap-2 text-black'><RiUserLine />3</span></h4>
            <h5 className='font-medium  text-base'>5 mins away</h5>
            <p className='font-normal text-base text-gray-600'>Affordable,Auto rides</p>
          </div>
          <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>120.00</span></h1>
        </div>

       </div>
      
   </div>
      </>
  )
}

export default Home
