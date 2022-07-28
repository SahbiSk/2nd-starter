import { Container } from '@mui/material'
import MuiNavbar from '../navbar/navbar.component'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <MuiNavbar />
        {children}
      </Container>
    </>
  )
}

export default Layout
