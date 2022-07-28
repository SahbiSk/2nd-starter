import React from 'react'

interface Props {
  children: React.ReactElement
}

const Guard: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default Guard
