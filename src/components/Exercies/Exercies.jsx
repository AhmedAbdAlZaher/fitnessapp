import React, { useEffect, useState } from 'react'
import { exerciseOptions , fetchData } from '../../utils/fetchData'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import ExerciseCard from '../ExerciseCard/ExerciseCard';


export default function Exercies({setExercises, exercises, bodyPart}) {

const [currentPage, setCurrentPage] = useState(1)
const exercisePerPage = 9;
const indexOfLastExericse = currentPage * exercisePerPage;
const indexOfFirstExericse =  indexOfLastExericse - exercisePerPage ;
const  currentExericse = exercises.slice(indexOfFirstExericse , indexOfLastExericse )


function paginate(e ,value){
setCurrentPage(value);
window.scrollTo({top: 1800 , behavior: "smooth"})
}

useEffect(() => {
  const fetchExercisesData = async()=>{
    let exersicsesData = []
    if(bodyPart === 'all'){
      exersicsesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
    } else{
      exersicsesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }
    setExercises(exersicsesData)
  }
  fetchExercisesData();
}, [bodyPart])

 
  return (
    <Box id="exercises"
    sx={{mt: {lg: "110px"}}}
    mt={"50px"}
    p={"20px"}>
<Typography variant='h3' mb={"46px"}>
  Showing Results
</Typography>
<Stack direction={"row"} sx={{gap:{lg :"110px" , xs: "50px"}}}
flexWrap={"wrap"}
justifyContent={"center"}>
{currentExericse.map((exercise , index)=>(
  <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
))}
</Stack>
<Stack mt={"100px"} alignItems={"center"}>
 {exercises.length > 9 &&(
  <Pagination color='standard'
  shape='rounded'
  defaultPage={1}
  count={Math.ceil(exercises.length / exercisePerPage)}
  page={currentPage}
  onChange={paginate}
  size='large'/>
 )}

</Stack>
    </Box>
  )
}
