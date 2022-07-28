import React from 'react'
import Characters from 'modules/breakingBad/characters.components'
import Layout from 'modules/layout/layout.component'

const BBCharactersPage = () => {
  return (
    <Layout>
      <Characters />
    </Layout>
  )
}

export const BBCharacters = React.memo(BBCharactersPage)
