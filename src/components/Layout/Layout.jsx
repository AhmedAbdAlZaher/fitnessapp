import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Box } from '@mui/material'
import Home from '../Home/Home'

export default function Layout() {
  return (
   <>
   <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
   </Box>
 
   </>
  )
}
