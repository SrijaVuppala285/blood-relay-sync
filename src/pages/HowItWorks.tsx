import React from 'react';
import { Heart, UserPlus, Search, Phone, Award, MapPin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account as a donor, recipient, or hospital. Fill in your basic information and blood group details.",
      details: ["Choose your role", "Verify your identity", "Complete health screening"]
    },
    {
      icon: Search,
      title: "Find or Get Found",
      description: "Donors can browse emergency requests. Recipients can search for nearby donors by blood group and location.",
      details: ["Advanced search filters", "Location-based matching", "Real-time availability"]
    },
    {
      icon: Heart,
      title: "Connect & Donate",
      description: "Connect directly with matched users. Coordinate donation logistics safely through our platform.",
      details: ["Secure messaging", "Hospital coordination", "Safety protocols"]
    },
    {
      icon: Award,
      title: "Track & Earn",
      description: "Build your donation history, earn points, unlock achievements, and climb the leaderboard.",
      details: ["Donation tracking", "Point system", "Achievement badges"]
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Emergency Response",
      description: "24/7 emergency blood request system with rapid donor notification."
    },
    {
      icon: MapPin,
      title: "Location Matching",
      description: "Smart location-based matching to find the nearest available donors."
    },
    {
      icon: Heart,
      title: "Community Campaigns",
      description: "Join organized blood donation drives and community events."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How BloodBridge Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting donors and recipients through a simple, secure, and efficient platform. 
            Every step designed to save lives.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple Steps to Save Lives
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow these easy steps to become part of our life-saving community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                
                <ul className="text-sm text-muted-foreground space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose BloodBridge?
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced features designed to make blood donation efficient and reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of donors and recipients who trust BloodBridge to save lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Become a Donor
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Find Donors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;