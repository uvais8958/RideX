import React from 'react'
import homeImage from '../assets/HomeImage.avif'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-center w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="min-h-screen w-full bg-black/20 flex flex-col justify-between px-0 py-8">
        <img
          className="w-43 ml-9"
          src="https://ridex.mv/assets/ridex/logo-black.png"
          alt="RideX"
        />

        <div className=" w-50% bg-white py-5 px-4 pb-7 mx-4 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center">Get Started With RideX</h2>
          <Link to= '/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-5 cursor-pointer">
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
