import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import ScrollIndicator from './components/ScrollIndicator'
import WelcomePage from './pages/WelcomePage'
import EventsPage from './pages/EventsPage'

function App() {
  return (
    <Box>
      <Navigation />
      <ScrollIndicator />
      <WelcomePage />
      <Box id="events">
        <EventsPage />
      </Box>
    </Box>
  )
}

export default App

