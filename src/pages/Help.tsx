import React, { useState } from 'react';
import { Search, BookOpen, MessageCircle, Phone, Mail, ExternalLink } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      articles: [
        { title: "Creating Your Account", views: "15k", time: "2 min read" },
        { title: "Setting Up Your Donor Profile", views: "12k", time: "3 min read" },
        { title: "Finding Your First Blood Request", views: "8k", time: "4 min read" },
        { title: "Understanding Blood Types", views: "25k", time: "5 min read" }
      ]
    },
    {
      title: "For Donors",
      icon: BookOpen,
      articles: [
        { title: "Eligibility Requirements", views: "20k", time: "3 min read" },
        { title: "Donation Process Guide", views: "18k", time: "6 min read" },
        { title: "Safety and Health Guidelines", views: "15k", time: "4 min read" },
        { title: "Earning Points and Badges", views: "10k", time: "2 min read" }
      ]
    },
    {
      title: "For Recipients",
      icon: BookOpen,
      articles: [
        { title: "Posting an Emergency Request", views: "22k", time: "3 min read" },
        { title: "Searching for Donors", views: "16k", time: "4 min read" },
        { title: "Coordinating with Hospitals", views: "12k", time: "5 min read" },
        { title: "Managing Your Requests", views: "9k", time: "3 min read" }
      ]
    },
    {
      title: "Safety & Privacy",
      icon: BookOpen,
      articles: [
        { title: "Platform Safety Guidelines", views: "30k", time: "7 min read" },
        { title: "Privacy Settings Guide", views: "14k", time: "4 min read" },
        { title: "Reporting Issues", views: "8k", time: "2 min read" },
        { title: "Medical Facility Verification", views: "11k", time: "3 min read" }
      ]
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Call our emergency helpline",
      icon: Phone,
      availability: "1800-BLOOD-HELP",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "Response within 24hrs",
      action: "Send Email"
    }
  ];

  const quickActions = [
    "Reset Password",
    "Update Profile",
    "Download App",
    "Report a Bug",
    "Request Feature",
    "Account Verification"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers, guides, and support for using BloodBridge
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <category.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span>{article.views} views</span>
                          <span className="mx-2">•</span>
                          <span>{article.time}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need More Help?</h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-2">{option.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{option.availability}</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-destructive text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-2">Emergency Blood Request?</h3>
          <p className="mb-4">For urgent blood requirements, contact our 24/7 emergency helpline</p>
          <button className="px-6 py-3 bg-white text-destructive font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Call 1800-BLOOD-HELP
          </button>
        </div>
      </section>
    </div>
  );
};

export default Help;