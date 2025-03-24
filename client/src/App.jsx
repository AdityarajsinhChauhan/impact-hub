import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ActionHub from './pages/ActionHub'
import CommunityChat from './pages/CommunityChat'
import ContentLibrary from './pages/ContentLibrary'
import FindPassion from './pages/FindPassion'
import InteractiveMap from './pages/InteractiveMap'
import Home from './pages/Home'
import NavMenu from './components/NavMenu'

function App() {

  const [showMenu, setshowMenu] = useState(false);
  const [active, setactive] = useState("home");


  return (
    <>
    <Navbar setshowMenu={setshowMenu} active={active} setactive={setactive} />
    <NavMenu showMenu={showMenu} setshowMenu={setshowMenu} />
    <Routes>
      <Route path='/' element={<Home active={active} setactive={setactive}/>}/>
      <Route path='/content-library' element={<ContentLibrary setactive={setactive}/>}/>
      <Route path='/find-passion' element={<FindPassion setactive={setactive}/>}/>
      <Route path='/action-hub' element={<ActionHub setactive={setactive}/>}/>
      <Route path='/interactive-map' element={<InteractiveMap setactive={setactive}/>}/>
      <Route path='/chat' element={<CommunityChat setactive={setactive}/>}/>
    </Routes>
    <Footer setactive={setactive}/>
    
      
    </>
  )
}



export default App
