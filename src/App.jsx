import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage.jsx'
import GuestLayout from './Layout/GuestLayout.jsx';
import { ViaggiProvider } from './GlobalContext/ViaggiContext.jsx';
import TripList from './Pages/TripList.jsx';
import AggiungiViaggio from './Pages/AggiungiViaggio.jsx';

function App() {

  return (
    <>
      <ViaggiProvider>

        <BrowserRouter>
          <GuestLayout />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/aggiungiviaggio" element={<AggiungiViaggio />} />
            <Route path="/trip/:id" element={<TripList />} />
          </Routes>
        </BrowserRouter>
        
      </ViaggiProvider>


    </>
  )
}

export default App
