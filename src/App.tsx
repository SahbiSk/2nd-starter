import { ThemeProvider } from '@mui/material'
import React from 'react'
import MainRoutes from './routes/'
import Guard from 'shared/guard'
import { mainTheme } from 'shared/themes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Guard>
        <MainRoutes />
      </Guard>
    </ThemeProvider>
  )
}

export default App
