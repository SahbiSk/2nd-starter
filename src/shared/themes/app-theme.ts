import { createTheme } from '@mui/material'

export const mainTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: '18px',
        },
      },
    },
  },
})
