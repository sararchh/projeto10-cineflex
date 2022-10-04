import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './Routes';

import { GlobalStyle } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RoutesApp />
    <ToastContainer />
    <GlobalStyle />
  </>
);
