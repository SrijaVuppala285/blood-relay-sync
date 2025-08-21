import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, Heart, Star, Calendar, Award, Users, Shield } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const DonorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock donor data - would fetch from API based on id
  const donor = {
    id: id || '1',
    name: 'Rajesh Kumar',
    bloodGroup: 'O+',
    location: 'Connaught Place, Delhi',
    pincode: '110001',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
    distance: '2.5 km',
    lastDonation: '3 months ago',
    availability: 'Available',
    rating: 4.8,
    donationCount: 12,
    verified: true,
    joinedDate: 'January 2023',
    badges: ['Life Saver', 'Regular Donor', 'Quick Responder'],
    emergencyResponse: true,
    bio: 'Passionate about helping others through blood donation. Available for emergency cases and regular donations.',
    preferredTime: 'Weekends and evenings',
    languages: ['Hindi', 'English'],
    achievements: [
      { title: 'Life Saver', description: '10+ donations', icon: Heart },
      { title: 'Quick Responder', description: 'Emergency donations', icon: Shield },
      { title: 'Community Hero', description: 'Regular donor for 2+ years', icon: Award }
    ]
  };

  const handleContact = () => {
    // Mock contact functionality
    window.open(`tel:${donor.phone}`);
  };

  const handleMessage = () => {
    // Mock messaging functionality
    console.log('Opening message interface');
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to search results
        </motion.button>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary" />
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{donor.name}</h1>
                {donor.verified && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="badge-blood-type text-lg px-3 py-1">
                  {donor.bloodGroup}
                </div>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {donor.location} • {donor.distance}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" />
                  {donor.rating} rating
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center text-success font-medium">
                  <Heart className="w-4 h-4 mr-1" />
                  {donor.donationCount} donations
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                  Last donation: {donor.lastDonation}
                </div>
              </div>

              <div className={`mt-3 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                donor.availability === 'Available' 
                  ? 'bg-success/10 text-success' 
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {donor.availability}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="btn-primary flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMessage}
                className="btn-secondary flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Message
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{donor.bio}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Preferred Time</h3>
                  <p className="text-muted-foreground">{donor.preferredTime}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                  <p className="text-muted-foreground">{donor.languages.join(', ')}</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {donor.achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg bg-accent/30">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Donations</span>
                  <span className="font-bold text-primary">{donor.donationCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium">{donor.joinedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium text-success">Quick</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Emergency Available</span>
                  <span className={`font-medium ${donor.emergencyResponse ? 'text-success' : 'text-muted-foreground'}`}>
                    {donor.emergencyResponse ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Badges</h2>
              <div className="space-y-2">
                {donor.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Contact Info</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{donor.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{donor.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{donor.pincode}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;