import React from 'react'
import {RiMapPin2Fill} from '@remixicon/react'

const LocationSearchPanel = (props) => {
  console.log(props)
  //sample array location

  const locations=["UP24,Surkh Sayyad ki zayarat Budaun,U.P.",
               "Ghanta gher Budaun ",
               "Birhampura,Budaun"
  ];

  return (
    <div>
      {/* this is just a sample data */}
    
          {
            locations.map((elem) => {
               return <div key={elem} onClick={() => {
                props.setVehiclePanel(true)
               }} className='flex gap-4  cursor-pointer border-2 p-3 border-gray-400 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-16 rounded-full '> <RiMapPin2Fill /></h2>
          <h4  className='font-medium'>{elem}</h4>
        </div>
            })
          }

  
    </div>
  )
}

export default LocationSearchPanel
