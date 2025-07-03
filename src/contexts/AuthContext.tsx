
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  username: string;
  role: 'user' | 'worker' | 'head';
  name: string;
  phone?: string;
  area?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, role: 'user' | 'worker' | 'head') => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string, role: 'user' | 'worker' | 'head') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on role
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      role,
      name: username === 'admin' ? 'Panchayat Head' : 
            role === 'worker' ? 'Waste Collection Worker' : 'User',
      phone: role === 'worker' ? '9876543210' : undefined,
      area: role === 'user' ? 'Anna Nagar' : undefined
    };
    
    setUser(userData);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
