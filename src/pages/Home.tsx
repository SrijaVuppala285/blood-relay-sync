import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CampaignCard from '@/components/CampaignCard';
import { Heart, Users, Shield, Clock, ArrowRight, Search, Calendar, AlertCircle } from 'lucide-react';

const Home = () => {
  // Mock data for featured campaigns
  const featuredCampaigns = [
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
  ];

  const handleJoinCampaign = (campaignId: string) => {
    // Mock function - would integrate with backend
    console.log('Joining campaign:', campaignId);
  };

  const features = [
    {
      icon: Search,
      title: 'Smart Matching',
      description: 'AI-powered donor-recipient matching based on blood type, location, and availability.',
    },
    {
      icon: Shield,
      title: 'Verified Donors',
      description: 'All donors are verified through mobile and email verification for safety and trust.',
    },
    {
      icon: Clock,
      title: 'Emergency Response',
      description: 'Real-time emergency blood requests with instant notifications to nearby donors.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join blood donation campaigns and earn points for your contributions to society.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Actions */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Can We Help You Today?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need blood or want to donate, we're here to connect you with the right match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Link to="/matching" className="block">
                <div className="card-blood group">
                  <Search className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Find Blood Donors</h3>
                  <p className="text-muted-foreground mb-4">
                    Search for verified donors near you by blood type and location.
                  </p>
                  <div className="btn-primary inline-flex items-center">
                    Search Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Link to="/emergency" className="block">
                <div className="card-emergency group">
                  <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Emergency Request</h3>
                  <p className="text-muted-foreground mb-4">
                    Post urgent blood requirements for immediate response.
                  </p>
                  <div className="btn-emergency inline-flex items-center">
                    Post Request <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Link to="/campaigns" className="block">
                <div className="card-blood group">
                  <Calendar className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Join Campaigns</h3>
                  <p className="text-muted-foreground mb-4">
                    Participate in organized blood donation drives in your area.
                  </p>
                  <div className="btn-secondary inline-flex items-center">
                    View Campaigns <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Blood Donation Campaigns
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join upcoming campaigns in your area and earn points while helping save lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign, index) => (
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
          </div>

          <div className="text-center mt-12">
            <Link to="/campaigns" className="btn-primary">
              View All Campaigns
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose BloodBridge?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform ensures safe, efficient, and reliable blood donation connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of donors who are already saving lives through our platform.
              Your donation can save up to three lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-hero">
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Register as Donor
              </Link>
              <Link to="/login" className="btn-hero">
                Login to Continue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;