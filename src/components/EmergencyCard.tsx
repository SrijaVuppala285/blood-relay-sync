import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, AlertCircle, Heart, Timer } from 'lucide-react';

interface EmergencyRequest {
  id: string;
  bloodGroup: string;
  location: string;
  pincode: string;
  urgencyLevel: 'critical' | 'high' | 'medium';
  contactName: string;
  contactPhone: string;
  hospital: string;
  unitsNeeded: number;
  postedAt: string;
  expiresAt: string;
  description?: string;
}

interface EmergencyCardProps {
  request: EmergencyRequest;
  onContact: (requestId: string) => void;
}

const EmergencyCard: React.FC<EmergencyCardProps> = ({ request, onContact }) => {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const expiry = new Date(request.expiresAt).getTime();
      const difference = expiry - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${hours}h ${minutes}m`);
        setIsExpired(false);
      } else {
        setTimeRemaining('Expired');
        setIsExpired(true);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [request.expiresAt]);

  const getUrgencyColor = () => {
    switch (request.urgencyLevel) {
      case 'critical':
        return 'bg-red-600';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getUrgencyLabel = () => {
    switch (request.urgencyLevel) {
      case 'critical':
        return 'Critical';
      case 'high':
        return 'High Priority';
      case 'medium':
        return 'Medium Priority';
      default:
        return 'Normal';
    }
  };

  if (isExpired) {
    return (
      <motion.div
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="card-emergency opacity-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-500/20 flex items-center justify-center">
          <span className="text-gray-600 font-bold text-lg">Request Expired</span>
        </div>
        {/* Faded content */}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(220, 38, 38, 0.25)' }}
      className={`card-emergency relative overflow-hidden ${
        request.urgencyLevel === 'critical' ? 'ring-2 ring-red-500 animate-pulse' : ''
      }`}
    >
      {/* Urgency Indicator */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${getUrgencyColor()}`} />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="badge-blood-type text-lg font-bold">
            {request.bloodGroup}
          </div>
          <div className={`badge-urgent ${request.urgencyLevel === 'critical' ? 'animate-pulse' : ''}`}>
            {getUrgencyLabel()}
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <Timer className="w-4 h-4 mr-1" />
          <span className={`text-sm font-medium ${
            timeRemaining.includes('h') && parseInt(timeRemaining) < 2 ? 'text-red-600' : ''
          }`}>
            {timeRemaining} left
          </span>
        </div>
      </div>

      {/* Request Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-muted-foreground">
          <Heart className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm">
            <strong>{request.unitsNeeded} units</strong> needed
          </span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {request.hospital}, {request.location} - {request.pincode}
          </span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">
            Posted {new Date(request.postedAt).toLocaleDateString()} at{' '}
            {new Date(request.postedAt).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>

      {/* Description */}
      {request.description && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-muted-foreground">{request.description}</p>
        </div>
      )}

      {/* Contact Section */}
      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-foreground">
              Contact: {request.contactName}
            </div>
            <div className="text-sm text-muted-foreground flex items-center mt-1">
              <Phone className="w-3 h-3 mr-1" />
              {request.contactPhone}
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onContact(request.id)}
            className={`font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${
              request.urgencyLevel === 'critical'
                ? 'btn-emergency'
                : 'btn-primary'
            }`}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Now
          </motion.button>
        </div>
      </div>

      {/* Critical Badge */}
      {request.urgencyLevel === 'critical' && (
        <div className="absolute -top-2 -right-2">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-red-600 text-white p-2 rounded-full shadow-lg"
          >
            <AlertCircle className="w-4 h-4" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default EmergencyCard;