import { Box } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollIndicator from './components/ScrollIndicator'
import WelcomePage from './pages/WelcomePage'
import EventsPage from './pages/EventsPage'
import JnanaPathaPage from './pages/JnanaPathaPage'

function App() {
  return (
    <HashRouter>
      <Box>
        <Navigation />
        <ScrollIndicator />
        <Routes>
          <Route
            path="/"
            element={
              <Box>
                <WelcomePage />
                <Box id="events">
                  <EventsPage />
                </Box>
              </Box>
            }
          />
          <Route path="/jnana-patha" element={<JnanaPathaPage />} />
        </Routes>
      </Box>
    </HashRouter>
  )
}

export default App

