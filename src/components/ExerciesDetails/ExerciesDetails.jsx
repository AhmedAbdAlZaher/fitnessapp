import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../Detail/Detail'
import ExerciesVideos from '../ExerciesVideos/ExerciesVideos'
import SimilarExercises from '../SimilarExercises/SimilarExercises'
import { useParams } from 'react-router-dom'




export default function ExerciesDetails() {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerisesData = async () => {
      const exeriseDbURl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`
      const exeriseDetailData = await fetchData(`${exeriseDbURl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exeriseDetailData)
      const exersieVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exeriseDetailData.name}`, youtubeOptions)
setExerciseVideos(exersieVideoData)

    }

    fetchExerisesData()

  }, [id]);



  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}
