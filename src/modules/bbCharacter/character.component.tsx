import React from 'react'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

const CharacterDetails = () => {
  const { id } = useParams()
  console.log(id)
  return <Container></Container>
}

export default CharacterDetails
