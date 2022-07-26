import React from 'react'
import CharacterDetails from 'modules/bbCharacter/character.component'
import Layout from 'modules/layout/layout.component'

export const Character: React.FC = () => {
  return (
    <Layout>
      <CharacterDetails />
    </Layout>
  )
}
