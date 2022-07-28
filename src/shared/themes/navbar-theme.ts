import { createTheme } from '@mui/material'

export const navbarTheme = createTheme({
  components: {
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          '& nav': {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.nav-title': {
            flexGrow: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.nav-item': {
            my: 2,
            color: 'white',
            display: 'block',
            '&:hover': {
              background: 'white',
            },
          },
        },
      },
    },
  },
})
