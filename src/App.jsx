import React from 'react'
import { Box } from '@mui/material'
import {  RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import "./App.css"

import ExerciesDetails from "./components/ExerciesDetails/ExerciesDetails"
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

export default function App() {
  
  const routers = createHashRouter([
{
  path: "/", element: <Layout></Layout>, children:[
    { index: true, element: <Home></Home> },
    { path: "/exercise/:id", element:<ExerciesDetails /> },
  ]
},
]);

  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
  
}
