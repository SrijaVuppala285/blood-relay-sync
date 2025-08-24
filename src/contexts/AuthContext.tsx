import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'donor' | 'recipient' | 'hospital';
  bloodGroup?: string;
  phone: string;
  location: string;
  points?: number;
  donationCount?: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Donor',
    email: 'john@donor.com',
    role: 'donor',
    bloodGroup: 'O+',
    phone: '+91 9876543210',
    location: 'Delhi',
    points: 250,
    donationCount: 5
  },
  {
    id: '2',
    name: 'Sarah Recipient',
    email: 'sarah@recipient.com',
    role: 'recipient',
    phone: '+91 9876543211',
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Apollo Hospital',
    email: 'admin@apollo.com',
    role: 'hospital',
    phone: '+91 9876543212',
    location: 'Chennai'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Mock login logic
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('bloodbridge_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('bloodbridge_user');
  };

  const signup = async (userData: any) => {
    // Mock signup logic
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.fullName,
      email: userData.email,
      role: userData.role,
      bloodGroup: userData.bloodGroup,
      phone: userData.phone,
      location: userData.pincode,
      points: userData.role === 'donor' ? 0 : undefined,
      donationCount: userData.role === 'donor' ? 0 : undefined
    };
    
    mockUsers.push(newUser);
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('bloodbridge_user', JSON.stringify(newUser));
  };

  // Check for existing user on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('bloodbridge_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};