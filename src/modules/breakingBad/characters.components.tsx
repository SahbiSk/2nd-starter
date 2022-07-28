/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material'
import { useGetCharactersQuery } from 'services'

const Characters: React.FC = () => {
  const {
    data: characters,
    // error,
    isLoading,
    isSuccess,
  } = useGetCharactersQuery({})

  return isLoading ? (
    <LinearProgress />
  ) : (
    <Grid container spacing={2}>
      {isSuccess &&
        characters.map((char: { [name: string]: string }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={char.char_id}>
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
  )
}

export default Characters
