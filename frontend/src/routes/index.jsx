
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Divisions from '../pages/Divisions';
import Developer from '../pages/Developer';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="divisions" element={<Divisions />} />
        <Route path="developer" element={<Developer />} />

        <Route
          path="contact"
          element={<Contact /> }
        />
      </Route>
    </Routes>
  );
}
