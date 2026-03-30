import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Userhome from './pages/Userhome'
import { Toaster } from 'react-hot-toast'
import Privateroute from './components/Privateroute'
import Profile from './pages/Profile'
import AddNote from './pages/AddNote'
import MyNote from './pages/MyNote'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Toaster />

      <Navbar />
      

      <Routes>

         <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userhome' element={<Privateroute><Userhome /> </Privateroute>} />
        <Route path='/profile' element={<Privateroute><Profile/></Privateroute>} />
        {/* <Route path='/addnote' element={<Privateroute><AddNote/></Privateroute>} /> */}
        {/* <Route path='/mynote' element={<Privateroute><MyNote /></Privateroute>} /> */}
        


      </Routes>

      <Footer/>
    </div>
  )
}

export default App
