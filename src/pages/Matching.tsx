import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Heart, Filter, User, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Matching = () => {
  const navigate = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    bloodGroup: '',
    pincode: '',
    urgency: 'all',
    distance: '10',
  });

  // All available donors
  const allDonors = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      bloodGroup: 'O+',
      location: 'Connaught Place, Delhi',
      pincode: '110001',
      phone: '+91 98765 43210',
      distance: '2.5 km',
      lastDonation: '3 months ago',
      availability: 'Available',
      rating: 4.8,
      donationCount: 12,
      verified: true,
    },
    {
      id: '2',
      name: 'Priya Singh',
      bloodGroup: 'O+',
      location: 'Karol Bagh, Delhi',
      pincode: '110005',
      phone: '+91 98765 43211',
      distance: '4.2 km',
      lastDonation: '2 months ago',
      availability: 'Available',
      rating: 4.9,
      donationCount: 8,
      verified: true,
    },
    {
      id: '3',
      name: 'Dr. Amit Sharma',
      bloodGroup: 'O+',
      location: 'AIIMS Hospital, Delhi',
      pincode: '110029',
      phone: '+91 98765 43212',
      distance: '7.8 km',
      lastDonation: '1 month ago',
      availability: 'Busy until 6 PM',
      rating: 5.0,
      donationCount: 25,
      verified: true,
    },
    {
      id: '4',
      name: 'Anita Sharma',
      bloodGroup: 'A+',
      location: 'Rohini, Delhi',
      pincode: '110085',
      phone: '+91 98765 43213',
      distance: '12.1 km',
      lastDonation: '6 months ago',
      availability: 'Available',
      rating: 4.7,
      donationCount: 15,
      verified: true,
    },
    {
      id: '5',
      name: 'Vikram Singh',
      bloodGroup: 'B-',
      location: 'Gurgaon, Haryana',
      pincode: '122002',
      phone: '+91 98765 43214',
      distance: '15.3 km',
      lastDonation: '4 months ago',
      availability: 'Available this weekend',
      rating: 4.6,
      donationCount: 9,
      verified: true,
    },
  ];

  const [searchResults, setSearchResults] = useState(allDonors.slice(0, 3));
  const [hasSearched, setHasSearched] = useState(false);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    
    let filtered = allDonors.filter(donor => {
      // Blood group filter
      if (searchFilters.bloodGroup && donor.bloodGroup !== searchFilters.bloodGroup) {
        return false;
      }
      
      // Pincode filter (basic matching - in real app would use proper distance calculation)
      if (searchFilters.pincode && !donor.pincode.includes(searchFilters.pincode.substring(0, 3))) {
        return false;
      }
      
      // Urgency filter (availability)
      if (searchFilters.urgency === 'immediate' && !donor.availability.includes('Available')) {
        return false;
      }
      
      return true;
    });
    
    setSearchResults(filtered);
  };

  const handleContact = (donorId: string) => {
    const donor = allDonors.find(d => d.id === donorId);
    if (donor) {
      // Show contact modal or direct call
      const confirmCall = window.confirm(`Contact ${donor.name} at ${donor.phone}?`);
      if (confirmCall) {
        window.open(`tel:${donor.phone}`);
      }
    }
  };

  const handleViewProfile = (donorId: string) => {
    navigate(`/donor/${donorId}`);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Blood Donors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search for verified blood donors in your area. Connect instantly for life-saving donations.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSearch}
          className="card-elevated p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Blood Group */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Blood Group
              </label>
              <select
                value={searchFilters.bloodGroup}
                onChange={(e) => setSearchFilters({ ...searchFilters, bloodGroup: e.target.value })}
                className="input-blood"
                required
              >
                <option value="">Select blood group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Pincode
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  value={searchFilters.pincode}
                  onChange={(e) => setSearchFilters({ ...searchFilters, pincode: e.target.value })}
                  className="input-blood pl-10"
                  placeholder="Enter pincode"
                  required
                />
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Distance
              </label>
              <select
                value={searchFilters.distance}
                onChange={(e) => setSearchFilters({ ...searchFilters, distance: e.target.value })}
                className="input-blood"
              >
                <option value="5">Within 5 km</option>
                <option value="10">Within 10 km</option>
                <option value="25">Within 25 km</option>
                <option value="50">Within 50 km</option>
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Urgency
              </label>
              <select
                value={searchFilters.urgency}
                onChange={(e) => setSearchFilters({ ...searchFilters, urgency: e.target.value })}
                className="input-blood"
              >
                <option value="all">All donors</option>
                <option value="immediate">Available now</option>
                <option value="today">Available today</option>
                <option value="week">Available this week</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </motion.button>
            </div>
          </div>
        </motion.form>

        {/* Search Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {hasSearched ? `Search Results (${searchResults.length} donors found)` : `Available Donors (${searchResults.length} nearby)`}
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select className="text-sm border border-border rounded-lg px-3 py-1">
                <option>Sort by distance</option>
                <option>Sort by rating</option>
                <option>Sort by availability</option>
              </select>
            </div>
          </div>

          {/* Donor Cards */}
          <div className="space-y-4">
            {searchResults.map((donor, index) => (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.15)' }}
                className="card-elevated p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>

                    {/* Donor Info */}
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-bold text-foreground">{donor.name}</h3>
                        {donor.verified && (
                          <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                            <Heart className="w-3 h-3 text-white" fill="currentColor" />
                          </div>
                        )}
                        <div className="badge-blood-type">
                          {donor.bloodGroup}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {donor.location} • {donor.distance}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" />
                          {donor.rating} ({donor.donationCount} donations)
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-muted-foreground" />
                          Last donation: {donor.lastDonation}
                        </div>
                        <div className={`font-medium ${
                          donor.availability === 'Available' 
                            ? 'text-success' 
                            : 'text-orange-600'
                        }`}>
                          {donor.availability}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="flex flex-col items-end space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContact(donor.id)}
                      className="btn-primary"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </motion.button>
                    
                    <button 
                      onClick={() => handleViewProfile(donor.id)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency Request Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="card-emergency p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Can't find a suitable donor?
            </h3>
            <p className="text-muted-foreground mb-4">
              Post an emergency request to notify all nearby donors immediately.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-emergency"
            >
              Post Emergency Request
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Matching;