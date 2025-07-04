import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/logombclab.png';

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: '/', label: 'Home' },
    { to: '/divisions', label: 'Division' },
    { to: '/developer', label: 'Developers' },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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

          {/* Desktop Links */}
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 px-6 pb-4">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap ${
                        isActive ? 'font-semibold text-blue-600' : ''
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors whitespace-nowrap"
                >
                  Hubungi Kami
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
