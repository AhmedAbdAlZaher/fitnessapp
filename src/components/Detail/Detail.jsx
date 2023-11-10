import React from 'react'
import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'
import { Stack } from '@mui/material';
export default function Detail({exeriseDetail}) {

  const { name , target ,equipment} = exeriseDetail;



  return (
    <Stack gap={"60px"} sx={{flexDirection: {lg:"row"}, p: "20px" , alignItems: 'center'}}>
{/* <img src={} alt={name} loading='lazy' className='detail-image' /> */}

    </Stack>
  )
}
