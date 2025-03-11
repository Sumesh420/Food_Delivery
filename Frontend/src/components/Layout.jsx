import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import {Outlet} from "react-router-dom"
import UserContextProvider from '../context/StoreContextProvider'
import LoginPopUp from './LoginPopUp/LoginPopUp'
export default function Layout() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <div>
      <UserContextProvider>
        {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Outlet/>
      </UserContextProvider>
    </div>
  )
}
