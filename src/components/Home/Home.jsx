import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../HeroBanner/HeroBanner'
import SearchExersices from '../SearchExersices/SearchExersices'
import Exercies from '../Exercies/Exercies'
export default function Home() {
  return (
    <Box>
      <HeroBanner/>
      <SearchExersices/>
      <Exercies/>
    </Box>
  )
}
