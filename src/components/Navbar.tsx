
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Settings, User, LogOut, Home, FileText } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">ஸ்மார்ட் குப்பை மேலாண்மை</h1>
            <div className="hidden md:flex space-x-4 ml-8">
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/dashboard') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <Home className="inline mr-1 h-4 w-4" />
                டாஷ்போர்ட்
              </Link>
              {user?.role === 'head' && (
                <Link 
                  to="/reports" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/reports') ? 'bg-green-700' : 'hover:bg-green-700'
                  }`}
                >
                  <FileText className="inline mr-1 h-4 w-4" />
                  அறிக்கைகள்
                </Link>
              )}
              <Link 
                to="/settings" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/settings') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <Settings className="inline mr-1 h-4 w-4" />
                அமைப்புகள்
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                எங்களை பற்றி
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">{user?.name}</span>
              <span className="text-xs bg-green-700 px-2 py-1 rounded">
                {user?.role === 'user' ? 'பயனர்' : 
                 user?.role === 'worker' ? 'தொழிலாளர்' : 'தலைவர்'}
              </span>
            </div>
            <Button 
              onClick={logout} 
              variant="outline" 
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
            >
              <LogOut className="h-4 w-4 mr-1" />
              வெளியேறு
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
