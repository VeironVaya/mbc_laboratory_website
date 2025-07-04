import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/logombclab.png';

export default function TopNavbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/divisions', label: 'Division' },
    { to: '/developer', label: 'Developers' }
  ];

  return (
    <header>
      <nav className="bg-gray-100 shadow-sm" aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <NavLink to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="MBC Lab logo"
              className="h-12 max-w-xs object-contain"
            />
          </NavLink>

          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-8">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap ${
                        isActive ? 'font-semibold text-blue-600' : ''
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="hidden md:inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors whitespace-nowrap"
            >
              Hubungi Kami
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
