import React from 'react'
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'

const Home = () => {
  return (
    <main className="text-center mt-2">
    <h1 className="display-5 text-danger">MASSACHUSETTS GENERAL HOSPITAL</h1>
    <Doctors/>
    <AppointmentList/>
  </main>
  )
}

export default Home
