import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { useGetCharactersQuery } from 'services'
import { charactersGridTheme } from 'shared/themes/characters-grid-theme'
import { useNavigate } from 'react-router-dom'

const Characters: React.FC = () => {
  const {
    data: characters,
    // error,
    isLoading,
    isSuccess,
  } = useGetCharactersQuery({})
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={charactersGridTheme}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {isSuccess &&
            characters.map((char: { [name: string]: string }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={char.char_id}
                className="char_item"
                onClick={() => navigate(`/character/${char.char_id}`)}
              >
                <Card>
                  <CardMedia
                    height={200}
                    image={char.img}
                    component="img"
                    alt={char.name}
                  />
                  <CardContent>
                    <Typography>{char.name} </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </ThemeProvider>
  )
}

export default Characters
