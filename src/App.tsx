import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  const location = useLocation()

  return (
    <>
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path=''/>
        <Route element={<Contact />} path='/contact'/>
        <Route element={<About />} path='/about'/>
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
