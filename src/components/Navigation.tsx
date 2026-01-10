import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Settings } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  isAdminMode: boolean;
  setIsAdminMode: (value: boolean) => void;
}

export function Navigation({ isAdminMode, setIsAdminMode }: NavigationProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-red-600" />
            <span className="text-xl font-semibold text-black">OnePhoto</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-black hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4"></div>
          <div className="flex items-center space-x-4" hidden>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAdminMode(!isAdminMode)}
              className="flex items-center space-x-1 text-black hover:text-red-600 hover:bg-red-50"
            >
              <Settings className="h-4 w-4" />
              <span>{isAdminMode ? 'Exit Admin' : 'Admin'}</span>
            </Button>
            {isAdminMode && (
              <Link to="/admin">
                <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}