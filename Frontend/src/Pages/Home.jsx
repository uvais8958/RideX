import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import  {RiArrowDownSLine}  from"@remixicon/react";
import LocationSearchPanel from '../components/LOcationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {

  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef=useRef(null)
  const vehiclePanelRef=useRef(null)
  const penelCloseRef =useRef(null)
  const confirmRidePanelRef=useRef(null)
  const vehicleFoundRef=useRef(null)
const waitingForDriverRef=useRef(null)

  const [vehiclePanel,setVehiclePanel]=useState(false)
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState(false)
  const [waitingForDriver,setWaitingForDriver]=useState(false)



  const  submitHandler=(e)=>{
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


  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[confirmRidePanel])



  
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[vehicleFound])


   useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[waitingForDriver])



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


       <div ref={vehiclePanelRef} className='fixed  z-10 w-full translate-y-full bg-white bottom-0 px-3 py-10 pt-12 '>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
       </div>

          <div ref={confirmRidePanelRef} className='fixed  z-10 w-full translate-y-full bg-white bottom-0 px-3 py-6 pt-12 '>
            <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
       </div>

         <div ref={vehicleFoundRef} className='fixed  z-10 w-full translate-y-full bg-white bottom-0 px-3 py-6 pt-12 '>
            <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>


          <div ref={waitingForDriverRef} className='fixed  z-10 w-full  bg-white bottom-0 px-3 py-6 pt-12 '>
            <WaitingForDriver  waitingForDriver={waitingForDriver}/>
        </div>
      
   </div>
      </>
  )
}

export default Home
