import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Seats from '../pages/Seats';
import Session from '../pages/Session';
import Success from '../pages/Success';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Session />} />
        <Route path='/session/:id' element={<Seats />} />
        <Route path='/success' element={<Success />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;