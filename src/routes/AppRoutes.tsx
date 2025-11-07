import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../features/auth/Login';
import { EventList } from '../features/events/EventList';
import { PrivateRoute } from './PrivateRoutes';
import { Register } from '../features/auth/Register';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>//definicion de las rutas de la aplicacion
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/" element={<PrivateRoute><EventList /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);
