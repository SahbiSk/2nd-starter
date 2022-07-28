import React from 'react'
import { BBCharacters, Character, Home } from 'pages'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

const MainRoutes = () => {
  const routesWithPages = [
    {
      path: '/characters',
      element: <BBCharacters />,
    },
    {
      path: '/character/:id',
      element: <Character />,
    },
    {
      path: '/',
      element: <Home />,
    },
  ]
  return (
    <Router>
      <Routes>
        {routesWithPages.map((route, key) => (
          <Route {...route} key={key} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default React.memo(MainRoutes)
