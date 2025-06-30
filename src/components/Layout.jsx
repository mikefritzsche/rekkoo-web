import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/features', label: 'Features' },
    { path: '/social', label: 'Social' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <nav className="border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-xl font-bold text-white"
            >
              Rekkoo
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    transition-colors 
                    ${isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                  }
                  `}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-t border-slate-800 py-4 md:hidden">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `
                      px-2 py-1 transition-colors
                      ${isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                    }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rekkoo. All rights reserved.</p>
          <div className="mt-2">
            <NavLink to="/terms" className="hover:text-white">
              Terms of Service
            </NavLink>
            <span className="mx-2">|</span>
            <NavLink to="/data-deletion" className="hover:text-white">
              Data Deletion
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
