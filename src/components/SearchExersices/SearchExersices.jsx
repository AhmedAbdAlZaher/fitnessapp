import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import { useEffect } from 'react'
import HorzontalScrollbar from '../HorzontalScrollbar/HorzontalScrollbar'
export default function SearchExersices( {setExercises , bodyPart , setBodyPart}) {


  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
  }, [])




  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercises) => exercises.name.toLocaleLowerCase().includes(search)
          || exercises.target.toLocaleLowerCase().includes(search)
          || exercises.equipment.toLocaleLowerCase().includes(search)
          || exercises.bodyPart.toLocaleLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)

    }
  }
  return (
    <Stack alignItems={'center'}
      mt={"37px"}
      justifyContent={'center'}
      p={"20px"}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}>
        Awsome Exercises You<br /> Should Know
      </Typography>
      <Box position={'relative'} mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: 'none', borderRadius: "4px" },
            width: { lg: '800px', xs: "100%" },
            backgroundColor: "#fff", borderRadius: '40px'
          }}
          height="72px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()) }}
          placeholder='Search Exercises'
          type='text' />
        <Button className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: '175px', xs: "80px" },
            fontSize: { lg: '20px', xs: "14px" },
            height: "56px",
            position: 'absolute',
            right: "0",
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative' , width: '100%', p: "20px"
      }}>
<HorzontalScrollbar  data={bodyParts} bodyParts  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}
