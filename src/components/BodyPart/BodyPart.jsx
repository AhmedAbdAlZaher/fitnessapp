import { Stack } from '@mui/material'
import React from 'react'
import Icon from '../../assets/icons/gym.png'
export default function BodyPart({item  ,setBodyPart, bodyPart}) {
  return (
    <Stack
    type="button"
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx= {
      bodyPart === item ? {
        borderTop: "4px solid #ff2625",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px"
      } : ""
    }>

<img src={Icon} alt="dumbbell"  style={{width: "40px" , height:"40px"}}/>

    </Stack>
  )
}
