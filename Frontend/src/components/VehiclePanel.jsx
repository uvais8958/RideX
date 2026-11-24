import React from 'react'
import  { RiUserLine ,RiArrowDownWideLine, RiMoneyRupeeCircleLine}  from"@remixicon/react";
const VehiclePanel = (props) => {
  return (
    <div>
                 <h5 
                     onClick={()=>{
                      props.setVehiclePanel(false)
                     }}
                      className='p-3 text-center absolute  mb-2 top-1 right-[50%] text-xl  text-gray-500 font-semibold py-10 '>< RiArrowDownWideLine /></h5>
                      
                 <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
      
                    <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 active:border-black border-gray-700 cursor-pointer mb-2 rounded-xl w-full items-center justify-between'>
                <img className='h-20' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82NDkzYzI1NS04N2M4LTRlMmUtOTQyOS1jZjcwOWJmMWI4MzgucG5n'></img>
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>RidexGo <span className='flex gap-2 text-black'><RiUserLine />4</span></h4>
                  <h5 className='font-medium  text-base'>2 mins away</h5>
                  <p className='font-normal text-base text-gray-600'>Affordable,compact rides</p>
                </div>
                <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>193.00</span></h1>
              </div>
      
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 mb-2 active:border-black border-gray-700 cursor-pointer rounded-xl w-full items-center justify-between'>
                <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ucxh1zn4nuKyu5H7FvXshQQyLXBQzfmGyrXVZ_-VEw&s'></img>
                <div className='-ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Moto <span className='flex gap-2 text-black'><RiUserLine />1</span></h4>
                  <h5 className='font-medium  text-base'>3 mins away</h5>
                  <p className='font-normal text-base text-gray-600'>Affordable,motorcycle rides</p>
                </div>
                <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>70.00</span></h1>
              </div>
      
      
                
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 mb-2 active:border-black border-gray-700 cursor-pointer rounded-xl w-full items-center justify-between'>
                <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-CjQDMzUqeewVhOeD_K7Zy62xNHI0ZPmtIAx9wkRUg&s'></img>
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Auto <span className='flex gap-2 text-black'><RiUserLine />3</span></h4>
                  <h5 className='font-medium  text-base'>5 mins away</h5>
                  <p className='font-normal text-base text-gray-600'>Affordable,Auto rides</p>
                </div>
                <h1 className='text-2xl flex justify-center items-center font-semibold'><RiMoneyRupeeCircleLine /><span className='text-bold font-semibold'>120.00</span></h1>
              </div>
    </div>
  )
}

export default VehiclePanel
