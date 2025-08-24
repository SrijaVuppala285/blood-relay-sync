import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Heart, Target, Users, Calendar, Medal, Crown, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  requirement: string;
  earned: boolean;
  earnedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  donations: number;
  location: string;
  avatar: string;
  badges: number;
  rank: number;
}

const Achievements = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'badges' | 'leaderboard'>('badges');

  const badges: Badge[] = [
    {
      id: '1',
      name: 'First Drop',
      description: 'Completed your first blood donation',
      icon: Heart,
      requirement: 'Make 1 donation',
      earned: true,
      earnedDate: '2024-01-15',
      rarity: 'common'
    },
    {
      id: '2',
      name: 'Life Saver',
      description: 'Saved 5 lives through blood donation',
      icon: Award,
      requirement: 'Make 5 donations',
      earned: true,
      earnedDate: '2024-02-20',
      rarity: 'rare'
    },
    {
      id: '3',
      name: 'Hero of the Month',
      description: 'Highest donations in a single month',
      icon: Trophy,
      requirement: 'Lead monthly donations',
      earned: false,
      rarity: 'epic'
    },
    {
      id: '4',
      name: 'Emergency Responder',
      description: 'Responded to 10 emergency requests',
      icon: Zap,
      requirement: 'Respond to 10 emergencies',
      earned: true,
      earnedDate: '2024-03-10',
      rarity: 'rare'
    },
    {
      id: '5',
      name: 'Community Champion',
      description: 'Participated in 20+ campaigns',
      icon: Users,
      requirement: 'Join 20 campaigns',
      earned: false,
      rarity: 'epic'
    },
    {
      id: '6',
      name: 'Legendary Donor',
      description: 'Made 50+ successful donations',
      icon: Crown,
      requirement: 'Make 50 donations',
      earned: false,
      rarity: 'legendary'
    },
    {
      id: '7',
      name: 'Perfect Attendance',
      description: 'Never missed a scheduled donation',
      icon: Target,
      requirement: 'Maintain 100% attendance',
      earned: true,
      earnedDate: '2024-02-28',
      rarity: 'rare'
    },
    {
      id: '8',
      name: 'Campaign Organizer',
      description: 'Organized a successful blood drive',
      icon: Calendar,
      requirement: 'Organize 1 campaign',
      earned: false,
      rarity: 'epic'
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      points: 2850,
      donations: 28,
      location: 'Delhi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face',
      badges: 12,
      rank: 1
    },
    {
      id: '2',
      name: 'Priya Sharma',
      points: 2650,
      donations: 25,
      location: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&face',
      badges: 10,
      rank: 2
    },
    {
      id: '3',
      name: 'Amit Patel',
      points: 2420,
      donations: 23,
      location: 'Ahmedabad',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face',
      badges: 9,
      rank: 3
    },
    {
      id: user?.id || '4',
      name: user?.name || 'John Donor',
      points: user?.points || 250,
      donations: user?.donationCount || 5,
      location: user?.location || 'Delhi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&face',
      badges: 3,
      rank: 15
    }
  ];

  const getRarityColor = (rarity: Badge['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'text-muted-foreground border-border';
      case 'rare':
        return 'text-blue-500 border-blue-500';
      case 'epic':
        return 'text-purple-500 border-purple-500';
      case 'legendary':
        return 'text-yellow-500 border-yellow-500';
    }
  };

  const getRarityBg = (rarity: Badge['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'bg-muted-foreground/10';
      case 'rare':
        return 'bg-blue-500/10';
      case 'epic':
        return 'bg-purple-500/10';
      case 'legendary':
        return 'bg-yellow-500/10';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const earnedBadges = badges.filter(badge => badge.earned);
  const unearnedBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, earn badges, and see how you compare with other heroes in our community.
          </p>
        </motion.div>

        {/* User Stats */}
        {user && user.role === 'donor' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-hero text-white rounded-xl p-6 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{user.points || 0}</div>
                <div className="text-white/80 text-sm">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{user.donationCount || 0}</div>
                <div className="text-white/80 text-sm">Donations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{earnedBadges.length}</div>
                <div className="text-white/80 text-sm">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">#15</div>
                <div className="text-white/80 text-sm">Global Rank</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 shadow-soft">
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'badges'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Badges
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'leaderboard'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Leaderboard
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'badges' ? (
          <div className="space-y-8">
            {/* Earned Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Earned Badges ({earnedBadges.length})</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {earnedBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className={`bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-2 ${getRarityColor(badge.rarity)}`}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getRarityBg(badge.rarity)}`}>
                        <IconComponent className={`w-8 h-8 ${getRarityColor(badge.rarity).split(' ')[0]}`} />
                      </div>
                      <h3 className="font-bold text-foreground text-center mb-2">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-3">{badge.description}</p>
                      <div className="text-xs text-center">
                        <span className={`inline-block px-2 py-1 rounded-full ${getRarityBg(badge.rarity)} ${getRarityColor(badge.rarity).split(' ')[0]} font-medium capitalize`}>
                          {badge.rarity}
                        </span>
                        {badge.earnedDate && (
                          <div className="text-muted-foreground mt-2">
                            Earned {new Date(badge.earnedDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Unearned Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Available Badges ({unearnedBadges.length})</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {unearnedBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-dashed border-border opacity-75"
                    >
                      <div className="w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground text-center mb-2">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-3">{badge.description}</p>
                      <div className="text-xs text-center">
                        <span className="inline-block px-2 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground font-medium capitalize">
                          {badge.rarity}
                        </span>
                        <div className="text-muted-foreground mt-2">
                          {badge.requirement}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ) : (
          /* Leaderboard */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl shadow-soft overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">Top Donors This Month</h2>
              <p className="text-muted-foreground">Heroes making the biggest impact in our community</p>
            </div>
            
            <div className="divide-y divide-border">
              {leaderboard.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`p-6 hover:bg-accent/50 transition-colors ${
                    entry.id === user?.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {getRankIcon(entry.rank)}
                    </div>
                    
                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground truncate">
                          {entry.name}
                          {entry.id === user?.id && (
                            <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                              You
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{entry.location}</p>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{entry.points}</div>
                        <div className="text-muted-foreground">Points</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{entry.donations}</div>
                        <div className="text-muted-foreground">Donations</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{entry.badges}</div>
                        <div className="text-muted-foreground">Badges</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Achievements;