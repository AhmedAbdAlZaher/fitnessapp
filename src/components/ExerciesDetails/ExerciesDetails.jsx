import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../Detail/Detail'
import ExerciesVideos from '../ExerciesVideos/ExerciesVideos'
import SimilarExercises from '../SimilarExercises/SimilarExercises'
import { useParams } from 'react-router-dom'




export default function ExerciesDetails() {

  const [exeriseDetail, setExeriseDetail] = useState()

  const { id } = useParams();

  useEffect(() => {
    const fetchExerisesData = async () => {
      const exeriseDbURl = `https://exercisedb.p.rapidapi.com`
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const exeriseDetailData = await fetchData(`${exeriseDbURl}/exersices/${id}` , exerciseOptions)
      setExeriseDetail(exeriseDetailData)


    }
    fetchExerisesData()
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exeriseDetail} />
      <ExerciesVideos />
      <SimilarExercises />
    </Box>
  )
}
