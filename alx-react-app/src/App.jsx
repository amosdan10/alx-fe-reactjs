import WelcomeMessage from './components/welcomeMessage'
import Header from './Header Component/Header'
import MainContent from './Main Content Component/MainContent'
import Footer from './Footer Component/Footer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
    
  )
}

export default App
