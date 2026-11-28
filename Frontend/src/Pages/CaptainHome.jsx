import React from 'react'
import {RiArrowDownWideLine,RiTimerLine,RiDashboard3Line,RiBookletLine ,RiLogoutBoxRLine,RiMapPinLine,RiMapPin2Fill,RiBankCardLine,RiMoneyRupeeCircleLine,RiHome4Line  } from '@remixicon/react'
import {Link} from 'react-router-dom'

const CaptainHome = () => {
  return (
      <div className='h-screen'>
        
        <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
                <img
          className="w-20 rounded-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmpJmbk2wqQbuNMY9HE0AufgSHWliBHoMbwEod06kZw&s=10"
          alt="RideX"
        />
          
           <Link to="/home" className=' h-20  w-20 bg-white flex items-center justify-center rounded-full text-lg font-bold  '>
            <RiLogoutBoxRLine />
        </Link>
       
       </div>
     
      <div className='h-1/2'>
           <img className='h-full w-full object-cover' src=" https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="hhome_image"/>
      </div>
           
           <div className='h-1/2 p-4'>

           <div className='flex'>
            <div >
              <img className='h-25 w-25 object-cover rounded-full' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
              <h4>Zuber Khan</h4>
            </div>
            <div>
              <h4> < RiMoneyRupeeCircleLine/>295</h4>
              <p>Earned</p>
            </div>
           </div>


           <div className='text-center'>
            <div>
          <div className='text-2xl font-thin'><RiTimerLine/></div>
           <h5 className='text-lg font-medium text-gray-600'>10.5</h5>
           <p>Hours Online</p>
            </div>
            <div className='text-center'>
              
             <div className='text-2xl font-thin'> <RiDashboard3Line /></div>
              <h5 className='text-lg font-medium text-gray-600'>10.5</h5>
           <p>Hours Online</p>
            
            </div>
            <div className='text-center'>
              
             <div><RiBookletLine /></div>

              <h5>10.5</h5>
              <p>Hours Online</p>

            </div>
           </div>
           
                
             
             
           

           </div>
         
      </div>
  )
}

export default CaptainHome
