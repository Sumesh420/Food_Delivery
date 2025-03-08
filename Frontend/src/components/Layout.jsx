import React from 'react'
import Navbar from './Navbar/Navbar'
import {Outlet} from "react-router-dom"
import UserContextProvider from '../context/StoreContextProvider'
import Footer from './Footer/Footer'
import AppDownload from './AppDownload/AppDownload'
export default function Layout() {
  return (
    <div>
      <UserContextProvider>
      <Navbar/>
      <Outlet/>
      <AppDownload/>
      </UserContextProvider>
    </div>
  )
}
