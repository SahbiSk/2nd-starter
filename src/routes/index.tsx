import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import BbCharacters from '../pages/bb-characters'
import Home from '../pages/home'

const MainRoutes = () => {
  const routesWithPages = [
    {
      path: '/characters',
      element: <BbCharacters />,
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
