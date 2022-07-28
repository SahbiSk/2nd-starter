import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../modules/layout/layout.component'

const HomePage = () => {
  return (
    <Layout>
      <Typography>Home</Typography>
    </Layout>
  )
}

export const Home = React.memo(HomePage)
