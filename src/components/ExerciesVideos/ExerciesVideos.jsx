import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ExerciesVideos({exerciseVideos , name}) {



  return (
   <Box sx={{marginTop:{lg:'200px' ,xs:"20px"}}} p={"20px"}>
<Typography variant='h4' mb="33px">
Watch <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exersise videos
</Typography>
   </Box>
  )
}
