import React from 'react'
import {RiArrowDownWideLine,RiMapPinLine,RiMapPin2Fill,RiBankCardLine,RiMoneyRupeeCircleLine  } from '@remixicon/react'

const WaitingForDriver = (props) => {
  return (
       <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
             props.waitingForDriver(false)
        }}>< RiArrowDownWideLine /></h5>
                  
                  <div className='flex items-center justify-between'>
                     <img className='h-25' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82NDkzYzI1NS04N2M4LTRlMmUtOTQyOS1jZjcwOWJmMWI4MzgucG5n'></img>
                    <div className='text-right'>
                      <h2 className='text-lg font-medium'>Uvais</h2>
                      <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP24 AB 3412</h4>
                      <p className='text-sm text-gray-700'>Maruti Suzuki Alto</p>
                    </div>
                  </div>
             
             <div className='flex gap-2 items-center flex-col justify-between'>
       
              <div className='w-full mt-5'>
               <div className='flex text-lg items-center gap-5 p-3 border-b-2'>
                <RiMapPinLine />
                <div>
                   <h3 className='text-lg font-medium'>243601/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-500'>Mohalla sotha,Ghatnta gher,Budaun</p>
                </div>
               
               </div>



                    <div className='flex text-lg items-center gap-5 p-3 border-b-2'>
                   
                      <RiMapPin2Fill />
                <div>
                   <h3 className='text-lg font-medium'>243601/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-500'>Mohalla sotha,Ghatnta gher,Budaun</p>
                </div>


               </div>



               <div className='flex text-lg items-center gap-5 p-3'>
                   
                      <RiBankCardLine /> 
                <div>
                   <h3 className='text-lg font-medium flex mb-1 justify-center items-center p-1 '><div className='flex items-center justify-center gap-5 '><RiMoneyRupeeCircleLine /></div>193.00</h3>
                  <p className='text-sm -mt-1 text-gray-500'>Cash Cash</p>
                </div>
               </div>

               </div>
              </div>
    </div>
  )
}

export default WaitingForDriver
