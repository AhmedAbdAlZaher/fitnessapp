import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../HeroBanner/HeroBanner'
import SearchExersices from '../SearchExersices/SearchExersices'
import Exercies from '../Exercies/Exercies'
export default function Home() {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])



  return (
    <Box>
      <HeroBanner/>
      <SearchExersices setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>
      <Exercies setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}
