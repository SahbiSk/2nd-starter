import { createTheme } from '@mui/material'

export const charactersGridTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          '&.character_item': {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: 'black',
            },
          },
        },
      },
    },
  },
})
