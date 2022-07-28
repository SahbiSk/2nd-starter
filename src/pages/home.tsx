import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../modules/layout/layout.component'

const Home = () => {
  return (
    <Layout>
      <Typography>Home</Typography>
    </Layout>
  )
}

export default React.memo(Home)
