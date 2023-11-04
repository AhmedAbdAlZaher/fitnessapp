import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../HeroBanner/HeroBanner'
import SearchExersices from '../SearchExersices/SearchExersices'
import Exercies from '../Exercies/Exercies'
export default function Home() {

  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExersices setExercises={setExercises} bodyPart={bodyPart}  setbodyPart={setbodyPart}/>
      <Exercies setExercises={setExercises} bodyPart={bodyPart}  setbodyPart={setbodyPart}/>
    </Box>
  )
}
