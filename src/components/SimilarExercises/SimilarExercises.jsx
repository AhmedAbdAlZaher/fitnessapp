import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
<Typography variant='h3'>Exercises that target the same muscle group</Typography>
    </Box>
  )
}
