import { createTheme } from '@mui/material'
import { PRIMARY_LIGHT } from './colors'

export const charactersGridTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          '&.char_item': {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all .2s',
            '&:hover': {
              backgroundColor: PRIMARY_LIGHT,
            },
          },
        },
      },
    },
  },
})
