import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login.jsx'
import Homepage from './Pages/HomePage.jsx'
import GuestLayout from './Layout/GuestLayout.jsx';
import { ViaggiProvider } from './GlobalContext/ViaggiContext.jsx';
import TripList from './Pages/TripList.jsx';
import AggiungiViaggio from './Pages/AggiungiViaggio.jsx';
import ScrollTop from './Components/ScrollTop.jsx';

function App() {

  return (
    <>
      <ViaggiProvider>

        <BrowserRouter>
        <ScrollTop />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<GuestLayout />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/aggiungiviaggio" element={<AggiungiViaggio />} />
            <Route path="/trip/:id" element={<TripList />} />
            
            </Route>
            
          </Routes>
        </BrowserRouter>
        
      </ViaggiProvider>


    </>
  )
}

export default App
