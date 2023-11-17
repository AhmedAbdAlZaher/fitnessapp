import { Box, Button, Typography , button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../../assets/images/banner.png'
export default function HeroBanner() {

function exploreExercises(){
  window.scrollTo(0, 1200);
}

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position={'relative'} p={'20px'}>
      <Typography
        color={"#ff2625"}
        fontWeight={"600"}
        fontSize={"26px"} >
        FitnessClub
      </Typography>
      <Typography
      fontWeight={'700'}
      sx={{fontSize:{lg: "44px" , xs:'40px'}}}
      mb={'23px'}
      mt={'30px'}>
        Sweat , Smile <br />
        and Repeat
      </Typography>
      <Typography fontFamily={'22px'} lineHeight={'35px'} mb={4}>
        Cheak out the most effective exercise
      </Typography>
      <Button onClick={exploreExercises} variant="contained"  color="error" sx={{backgroundColor:"#ff2625" , padding:'10px'}} >Explore Exercises </Button>
      <Typography
      fontWeight={600}
      color={"#ff2625"}
      sx={{
        opacity: 0.1,
        display:{lg:'block' , xs:'none'},
      }}
      fontSize={'200px'}>
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}
