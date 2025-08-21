import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CampaignCard from '@/components/CampaignCard';
import CreateCampaignModal from '@/components/CreateCampaignModal';
import { Calendar, MapPin, Filter, Plus, Search } from 'lucide-react';

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    location: '',
    date: '',
  });
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock campaigns data
  const [campaigns, setCampaigns] = useState([
    {
      id: '1',
      title: 'Community Blood Drive - Apollo Hospital',
      date: 'March 25, 2024',
      location: 'Apollo Hospital, Delhi',
      organizer: 'Apollo Healthcare',
      participants: 156,
      maxParticipants: 200,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      status: 'upcoming' as const,
    },
    {
      id: '2',
      title: 'Emergency Blood Collection Drive',
      date: 'March 22, 2024',
      location: 'AIIMS Hospital, Mumbai',
      organizer: 'AIIMS Blood Bank',
      participants: 89,
      maxParticipants: 150,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      status: 'ongoing' as const,
    },
    {
      id: '3',
      title: 'Youth Blood Donation Camp',
      date: 'March 28, 2024',
      location: 'DU Campus, Delhi',
      organizer: 'Delhi University',
      participants: 45,
      maxParticipants: 100,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop',
      status: 'upcoming' as const,
    },
    {
      id: '4',
      title: 'Corporate Blood Donation Initiative',
      date: 'March 30, 2024',
      location: 'Tech Park, Bangalore',
      organizer: 'Tech Companies Consortium',
      participants: 78,
      maxParticipants: 120,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop',
      status: 'upcoming' as const,
    },
    {
      id: '5',
      title: 'World Blood Donor Day Special',
      date: 'March 15, 2024',
      location: 'Central Park, Chennai',
      organizer: 'Chennai Blood Bank',
      participants: 200,
      maxParticipants: 200,
      image: 'https://images.unsplash.com/photo-1559757360-6-74c47d5f2ae8?w=500&h=300&fit=crop',
      status: 'completed' as const,
    },
    {
      id: '6',
      title: 'Rural Health Camp Blood Drive',
      date: 'April 2, 2024',
      location: 'Village Health Center, Punjab',
      organizer: 'Rural Health Initiative',
      participants: 23,
      maxParticipants: 80,
      image: 'https://images.unsplash.com/photo-1559757148-9f724dfd6233?w=500&h=300&fit=crop',
      status: 'upcoming' as const,
    },
  ]);

  const handleJoinCampaign = (campaignId: string) => {
    console.log('Joining campaign:', campaignId);
    // Mock join functionality - would integrate with backend
  };

  const handleCreateCampaign = (campaignData: any) => {
    const newCampaign = {
      ...campaignData,
      date: new Date(campaignData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    setCampaigns([newCampaign, ...campaigns]);
    console.log('Created new campaign:', newCampaign);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filters.status === 'all' || campaign.status === filters.status;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusCount = (status: string) => {
    return campaigns.filter(c => status === 'all' ? true : c.status === status).length;
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
            Blood Donation Campaigns
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join organized blood donation drives in your area and earn points while helping save lives.
          </p>
        </motion.div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search campaigns, locations, or organizers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-blood pl-11 w-full"
            />
          </div>

          {/* Create Campaign Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="btn-primary whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </motion.button>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { key: 'all', label: 'All Campaigns', count: getStatusCount('all') },
            { key: 'upcoming', label: 'Upcoming', count: getStatusCount('upcoming') },
            { key: 'ongoing', label: 'Live Now', count: getStatusCount('ongoing') },
            { key: 'completed', label: 'Completed', count: getStatusCount('completed') },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setFilters({ ...filters, status: filter.key })}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filters.status === filter.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </motion.div>

        {/* Additional Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-elevated p-4 mb-8"
        >
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">Filter by:</span>
            
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="text-sm border border-border rounded px-3 py-1 bg-background"
              >
                <option value="">All Locations</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <select
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="text-sm border border-border rounded px-3 py-1 bg-background"
              >
                <option value="">All Dates</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </p>
        </motion.div>

        {/* Campaigns Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CampaignCard 
                campaign={campaign}
                onJoin={handleJoinCampaign}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No campaigns found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find more campaigns.
            </p>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="btn-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Campaign
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">
              Want to organize a campaign?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Create your own blood donation drive and help coordinate life-saving donations in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCreateModal(true)}
                className="btn-hero"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Campaign
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Create Campaign Modal */}
        <CreateCampaignModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateCampaign}
        />
      </div>
    </div>
  );
};

export default Campaigns;