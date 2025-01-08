import React, { useState } from 'react';
import Doctors from '../components/Doctors';
import AppointmentList from '../components/AppointmentList';
import { appointmentData } from '../helper/data';

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const handleAdd = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleDelete = (id) => {
    console.log(id);
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointments(filteredList);
  };

  const handleDoubleClick=(id) => {
    const updatedList = appointments.map((app)=>
    app.id === id ? {...app, consulted: !app.consulted} : app);
    setAppointments(updatedList);
  }


  return (
    <main className='text-center mt-2'>
      <h1 className='display-5 text-danger'>MASSACHUSETTS GENERAL HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home;
