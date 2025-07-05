import React from 'react';
import TopNavbar from '../components/TopNavbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <TopNavbar />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </>
  );
}
