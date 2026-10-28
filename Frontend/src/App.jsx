import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom';
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin';
import UserSignup from './Pages/UserSignup';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignup from './Pages/CaptainSignup';
import Home from './Pages/Home';

import { UserDataContext } from './context/UserContext';

const App = () => {
 const ans= useContext(UserDataContext)
 console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route parh=  "/home" element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
