import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../HorzontalScrollbar/HorzontalScrollbar'
import Loader from '../Loader/Loader'
export default function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction={'row'} sx={{ p: "", position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader></Loader>}
      </Stack>


      <Typography variant='h3' mb={5}>Exercises that target the same equipment group</Typography>
      <Stack direction={'row'} sx={{ p: "", position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader></Loader>}
      </Stack>


    </Box>
  )
}
