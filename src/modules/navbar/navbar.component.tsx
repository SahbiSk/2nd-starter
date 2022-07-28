// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  ScopedCssBaseline,
  Slide,
  ThemeProvider,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import { navbarTheme } from 'shared/themes'
import { Link } from 'react-router-dom'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}
function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const MuiNavbar: React.FC = () => {
  const routes = [
    { page: 'home', path: '/' },
    { page: 'characters', path: '/characters' },
  ]
  return (
    <ThemeProvider theme={navbarTheme}>
      <ScopedCssBaseline>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <Typography className="nav-title" variant="h6" component="div">
                boom
              </Typography>
              <Box component="nav">
                {routes.map(({ page, path }) => (
                  <Button
                    component={Link}
                    to={path}
                    className="nav-item"
                    key={page}
                  >
                    {page}
                  </Button>
                ))}
                <IconButton>
                  <Avatar src="https://i1.sndcdn.com/artworks-cuFMbITqjLiBu8nD-07sKAA-t500x500.jpg" />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}

export default React.memo(MuiNavbar)
