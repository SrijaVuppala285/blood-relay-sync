import React, { useState } from 'react';
import { Cookie, Settings, Shield, BarChart } from 'lucide-react';

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    essential: true, // Always enabled
    functional: true,
    analytics: false,
    advertising: false
  });

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "These cookies are necessary for the website to function and cannot be switched off.",
      required: true,
      examples: [
        "Authentication tokens",
        "Session management",
        "Security preferences",
        "Load balancing"
      ]
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      required: false,
      examples: [
        "User preferences",
        "Language settings",
        "Location data",
        "Chat support features"
      ]
    },
    {
      title: "Analytics Cookies",
      icon: BarChart,
      description: "These cookies help us understand how visitors interact with our website.",
      required: false,
      examples: [
        "Page view tracking",
        "User journey analysis",
        "Performance monitoring",
        "Error reporting"
      ]
    },
    {
      title: "Advertising Cookies",
      icon: Cookie,
      description: "These cookies are used to deliver relevant advertisements and track ad performance.",
      required: false,
      examples: [
        "Targeted advertising",
        "Ad performance tracking",
        "Cross-site tracking",
        "Remarketing pixels"
      ]
    }
  ];

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  const savePreferences = () => {
    // Here you would typically save preferences to localStorage or send to backend
    console.log('Saving cookie preferences:', preferences);
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn about how we use cookies and manage your preferences
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit a website. 
              They help us provide you with a better experience by remembering your preferences, 
              keeping you signed in, and helping us understand how you use our platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At BloodBridge, we use cookies responsibly to enhance your experience while respecting 
              your privacy. You have control over which cookies you accept, except for essential 
              cookies that are necessary for the platform to function properly.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            {cookieTypes.map((type, index) => {
              const key = type.title.toLowerCase().split(' ')[0];
              const isEnabled = preferences[key as keyof typeof preferences];
              
              return (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{type.title}</h3>
                        {type.required && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={isEnabled}
                        onChange={(e) => handlePreferenceChange(key, e.target.checked)}
                        disabled={type.required}
                        className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Examples:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Manage Your Cookie Preferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Current Settings</h3>
                <div className="space-y-2">
                  {Object.entries(preferences).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground capitalize">
                        {key} Cookies
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        value 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {value ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Browser Controls</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>You can also manage cookies through your browser settings:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all cookies (may break functionality)</li>
                    <li>• Set preferences for future visits</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={savePreferences}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setPreferences({ essential: true, functional: false, analytics: false, advertising: false })}
                className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Cookies?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about our use of cookies or this policy, please contact us.
            </p>
            <a 
              href="mailto:privacy@bloodbridge.org" 
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-block"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;