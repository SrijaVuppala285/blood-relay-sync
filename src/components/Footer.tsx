import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Find Donors', href: '/matching' },
    { name: 'Campaigns', href: '/campaigns' },
    { name: 'Emergency', href: '/emergency' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Help Center', href: '/help' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">
                  BloodBridge
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-sm">
                Connecting hearts, saving lives through the power of blood donation. 
                Join our community of heroes making a difference.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+91 1800-123-4567</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">contact@bloodbridge.org</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Stay Connected</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for updates on campaigns and blood donation drives.
              </p>
              
              <div className="flex space-x-1 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-blood text-sm flex-1"
                />
                <button className="btn-primary px-4 py-2 text-sm">
                  Subscribe
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 BloodBridge. All rights reserved. Made with ❤️ for humanity.
            </div>
            
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-destructive text-white px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <span className="font-semibold">Emergency Blood Request? </span>
            <Link
              to="/emergency"
              className="underline hover:no-underline font-semibold"
            >
              Call 1800-BLOOD-HELP
            </Link>
            <span className="ml-2">Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;