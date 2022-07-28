import React from 'react'
import Characters from 'modules/breakingBad/characters.components'
import Layout from 'modules/layout/layout.component'

const BBCharacters = () => {
  return (
    <Layout>
      <Characters />
    </Layout>
  )
}

export default React.memo(BBCharacters)
