import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/logombclab.png';

export default function TopNavbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/divisions', label: 'Division' },
    { to: '/contact', label: 'Contact' },
    { to: '/developer', label: 'Developer' },
  ];

  return (
    <header>
      <nav
        className="bg-gradient-to-r white shadow-sm"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <NavLink to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="MBC Lab logo"
              className="h-12 max-w-xs object-contain"
            />
          </NavLink>

          <ul className="hidden md:flex space-x-8 flex-shrink-0">
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
        </div>
      </nav>
    </header>
  );
}
