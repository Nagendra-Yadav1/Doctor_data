import React from 'react'
import Home from './components/Home'
import Navbar from './components/NavigationPage'
import ContextProvider from './Context/ContextProvider'
import { Routes, Route } from "react-router-dom"
import DoctorDashboard from './components/DoctorDashboard'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import DoctorsPage from './components/DoctorsPage'
import AppointmentPart from './components/AppointmentPart'
import About from './components/About'


function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path='/appointment' element={<AppointmentPart/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </ContextProvider>

    </>
  )
}

export default App
