import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmergencyCard from '@/components/EmergencyCard';
import { AlertCircle, Plus, Filter, Clock, MapPin, Phone, Heart } from 'lucide-react';

const Emergency = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filters, setFilters] = useState({
    bloodGroup: '',
    urgency: 'all',
    location: '',
  });

  const [formData, setFormData] = useState({
    bloodGroup: '',
    unitsNeeded: '',
    hospital: '',
    location: '',
    pincode: '',
    contactName: '',
    contactPhone: '',
    urgencyLevel: 'high',
    description: '',
  });

  // Mock emergency requests data
  const emergencyRequests = [
    {
      id: '1',
      bloodGroup: 'O-',
      location: 'AIIMS Hospital, Delhi',
      pincode: '110029',
      urgencyLevel: 'critical' as const,
      contactName: 'Dr. Raj Kumar',
      contactPhone: '+91 98765 43210',
      hospital: 'AIIMS Hospital',
      unitsNeeded: 3,
      postedAt: '2024-03-20T10:30:00Z',
      expiresAt: '2024-03-21T10:30:00Z',
      description: 'Emergency surgery required for accident victim. Critical condition.',
    },
    {
      id: '2',
      bloodGroup: 'A+',
      location: 'Apollo Hospital, Mumbai',
      pincode: '400001',
      urgencyLevel: 'high' as const,
      contactName: 'Dr. Priya Sharma',
      contactPhone: '+91 98765 43211',
      hospital: 'Apollo Hospital',
      unitsNeeded: 2,
      postedAt: '2024-03-20T14:15:00Z',
      expiresAt: '2024-03-21T14:15:00Z',
      description: 'Cancer patient needs blood transfusion before chemotherapy.',
    },
    {
      id: '3',
      bloodGroup: 'B+',
      location: 'Fortis Hospital, Bangalore',
      pincode: '560001',
      urgencyLevel: 'medium' as const,
      contactName: 'Dr. Amit Gupta',
      contactPhone: '+91 98765 43212',
      hospital: 'Fortis Hospital',
      unitsNeeded: 1,
      postedAt: '2024-03-20T16:00:00Z',
      expiresAt: '2024-03-22T16:00:00Z',
      description: 'Scheduled surgery tomorrow morning. One unit required.',
    },
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleContact = (requestId: string) => {
    console.log('Contacting for request:', requestId);
    // Mock contact functionality
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting emergency request:', formData);
    // Mock submission - would integrate with backend
    setShowCreateForm(false);
    setFormData({
      bloodGroup: '',
      unitsNeeded: '',
      hospital: '',
      location: '',
      pincode: '',
      contactName: '',
      contactPhone: '',
      urgencyLevel: 'high',
      description: '',
    });
  };

  const filteredRequests = emergencyRequests.filter(request => {
    const matchesBloodGroup = !filters.bloodGroup || request.bloodGroup === filters.bloodGroup;
    const matchesUrgency = filters.urgency === 'all' || request.urgencyLevel === filters.urgency;
    const matchesLocation = !filters.location || 
      request.location.toLowerCase().includes(filters.location.toLowerCase());
    
    return matchesBloodGroup && matchesUrgency && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Emergency Blood Requests
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Urgent blood requirements from hospitals and patients. Your immediate response can save lives.
          </p>
        </motion.div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Filters */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={filters.bloodGroup}
              onChange={(e) => setFilters({ ...filters, bloodGroup: e.target.value })}
              className="input-blood"
            >
              <option value="">All Blood Groups</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>

            <select
              value={filters.urgency}
              onChange={(e) => setFilters({ ...filters, urgency: e.target.value })}
              className="input-blood"
            >
              <option value="all">All Urgency Levels</option>
              <option value="critical">Critical</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
            </select>

            <input
              type="text"
              placeholder="Filter by location..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="input-blood"
            />
          </div>

          {/* Post Request Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateForm(true)}
            className="btn-emergency whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-2" />
            Post Emergency Request
          </motion.button>
        </motion.div>

        {/* Emergency Stats - Better aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mb-2" />
              <div className="text-2xl font-bold text-red-600">
                {emergencyRequests.filter(r => r.urgencyLevel === 'critical').length}
              </div>
              <div className="text-sm text-red-600 font-medium">Critical Cases</div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {emergencyRequests.filter(r => r.urgencyLevel === 'high').length}
              </div>
              <div className="text-sm text-orange-600 font-medium">High Priority</div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">
                {new Set(emergencyRequests.map(r => r.pincode)).size}
              </div>
              <div className="text-sm text-blue-600 font-medium">Active Locations</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <Heart className="w-6 h-6 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {emergencyRequests.reduce((sum, r) => sum + r.unitsNeeded, 0)}
              </div>
              <div className="text-sm text-green-600 font-medium">Units Needed</div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Requests List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              Active Emergency Requests ({filteredRequests.length})
            </h2>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              Updated every 30 seconds
            </div>
          </div>

          {filteredRequests.length > 0 ? (
            <div className="space-y-4">
              {filteredRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EmergencyCard 
                    request={request}
                    onContact={handleContact}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No emergency requests found
              </h3>
              <p className="text-muted-foreground">
                No active requests match your current filters.
              </p>
            </div>
          )}
        </motion.div>

        {/* Create Emergency Request Modal */}
        {showCreateForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Post Emergency Blood Request
                </h3>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitRequest} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Blood Group *
                    </label>
                    <select
                      required
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="input-blood"
                    >
                      <option value="">Select blood group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Units Needed *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="10"
                      value={formData.unitsNeeded}
                      onChange={(e) => setFormData({ ...formData, unitsNeeded: e.target.value })}
                      className="input-blood"
                      placeholder="Number of units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Hospital/Medical Facility *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="input-blood"
                    placeholder="Hospital name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="input-blood"
                      placeholder="City, Area"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="input-blood"
                      placeholder="Area pincode"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="input-blood"
                      placeholder="Contact person name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      className="input-blood"
                      placeholder="Contact phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Urgency Level *
                  </label>
                  <select
                    required
                    value={formData.urgencyLevel}
                    onChange={(e) => setFormData({ ...formData, urgencyLevel: e.target.value })}
                    className="input-blood"
                  >
                    <option value="critical">Critical (Life threatening)</option>
                    <option value="high">High (Urgent within 24 hours)</option>
                    <option value="medium">Medium (Required within 48 hours)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="input-blood min-h-[100px]"
                    placeholder="Brief description of the case, patient condition, etc."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 px-6 py-3 border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-emergency"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Post Emergency Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Emergency;