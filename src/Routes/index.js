import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Session from '../pages/Session';

function RoutesApp() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Session/>}/>
        {/* <Route path='/session' element={<Session/>}/> */}

      </Routes>
    </Router>
  )
}

export default RoutesApp;