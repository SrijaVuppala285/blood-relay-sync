import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Heart, AlertCircle, Calendar, Award, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Notification {
  id: string;
  type: 'donation_request' | 'campaign_update' | 'emergency' | 'achievement' | 'general';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  action?: {
    label: string;
    href: string;
  };
}

const Notifications: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'emergency',
      title: 'Urgent Blood Request',
      message: 'Emergency O+ blood needed at Apollo Hospital, Delhi',
      timestamp: '2 minutes ago',
      read: false,
      action: { label: 'Help Now', href: '/emergency' }
    },
    {
      id: '2',
      type: 'campaign_update',
      title: 'Campaign Successfully Joined',
      message: 'You have successfully joined the Community Blood Drive at AIIMS',
      timestamp: '1 hour ago',
      read: false,
      action: { label: 'View Campaign', href: '/campaigns' }
    },
    {
      id: '3',
      type: 'achievement',
      title: 'New Badge Earned!',
      message: 'Congratulations! You earned the "Life Saver" badge for 5 donations',
      timestamp: '2 hours ago',
      read: true,
      action: { label: 'View Profile', href: '/profile' }
    },
    {
      id: '4',
      type: 'donation_request',
      title: 'Donation Request Accepted',
      message: 'John Doe accepted your blood donation request',
      timestamp: '1 day ago',
      read: true
    },
    {
      id: '5',
      type: 'general',
      title: 'Welcome to BloodBridge!',
      message: 'Thank you for joining our community of life savers',
      timestamp: '2 days ago',
      read: true
    }
  ]);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'emergency':
        return AlertCircle;
      case 'donation_request':
        return Heart;
      case 'campaign_update':
        return Calendar;
      case 'achievement':
        return Award;
      default:
        return CheckCircle;
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'emergency':
        return 'text-destructive';
      case 'donation_request':
        return 'text-primary';
      case 'campaign_update':
        return 'text-secondary';
      case 'achievement':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!user) return null;

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-primary/5 transition-colors"
      >
        <Bell className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </button>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-96 bg-card rounded-xl shadow-lg border border-border z-50 max-h-96 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  <div className="flex items-center space-x-2">
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-primary hover:text-primary-glow transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-lg hover:bg-accent transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications yet</p>
                  </div>
                ) : (
                  notifications.map((notification) => {
                    const IconComponent = getNotificationIcon(notification.type);
                    const iconColor = getNotificationColor(notification.type);
                    
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`p-4 border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors ${
                          !notification.read ? 'bg-primary/5' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`mt-1 ${iconColor}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-foreground text-sm">
                                  {notification.title}
                                </p>
                                <p className="text-muted-foreground text-sm mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {notification.timestamp}
                                </p>
                                
                                {notification.action && (
                                  <a
                                    href={notification.action.href}
                                    className="inline-block mt-2 text-xs text-primary hover:text-primary-glow transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {notification.action.label} →
                                  </a>
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-1 ml-2">
                                {!notification.read && (
                                  <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="w-2 h-2 bg-primary rounded-full"
                                    title="Mark as read"
                                  />
                                )}
                                <button
                                  onClick={() => deleteNotification(notification.id)}
                                  className="p-1 rounded hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
                                  title="Delete notification"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-4 border-t border-border bg-accent/30">
                  <a
                    href="/notifications"
                    className="text-sm text-primary hover:text-primary-glow transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View all notifications
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;