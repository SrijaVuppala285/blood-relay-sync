import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Menu, X, User, Search, Calendar, AlertCircle, Home, Award, LogOut, Info, Phone } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Notifications from './Notifications';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Pre-login navigation
  const publicNavLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Campaigns', href: '/campaigns', icon: Calendar },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ];

  // Post-login navigation based on role
  const getAuthenticatedNavLinks = () => {
    const baseLinks = [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Campaigns', href: '/campaigns', icon: Calendar },
    ];

    if (user?.role === 'donor') {
      return [
        ...baseLinks,
        { name: 'Find Recipients', href: '/matching', icon: Search },
        { name: 'Emergency', href: '/emergency', icon: AlertCircle },
        { name: 'Achievements', href: '/achievements', icon: Award },
      ];
    } else if (user?.role === 'recipient') {
      return [
        ...baseLinks,
        { name: 'Find Donors', href: '/matching', icon: Search },
        { name: 'Emergency', href: '/emergency', icon: AlertCircle },
      ];
    } else {
      return [
        ...baseLinks,
        { name: 'Find Donors', href: '/matching', icon: Search },
        { name: 'Emergency', href: '/emergency', icon: AlertCircle },
      ];
    }
  };

  const navLinks = isAuthenticated ? getAuthenticatedNavLinks() : publicNavLinks;

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
            >
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </motion.div>
            <span className="text-xl font-bold text-gradient-primary hidden sm:block">
              BloodBridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Notifications />
                <div className="flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary"
                >
                  Join as Donor
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2"
                    >
                      <User className="h-4 w-4" />
                      <span>{user?.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-destructive transition-colors px-3 py-2 text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-muted-foreground hover:text-primary transition-colors px-3 py-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-primary text-center"
                    >
                      Join as Donor
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;