import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage.jsx'
import GuestLayout from './Layout/GuestLayout.jsx';
import TripList from './Pages/TripList.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <GuestLayout />
      <Routes>      
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/trip/:id" element={<TripList />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
