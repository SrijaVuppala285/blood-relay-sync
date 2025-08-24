import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information (name, email, phone number, date of birth)",
        "Medical information (blood type, health screening results)",
        "Location data (city, state, postal code for matching purposes)",
        "Usage data (how you interact with our platform)",
        "Communication data (messages between users, support interactions)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        "Match donors with recipients based on blood type and location",
        "Send notifications about blood donation requests and campaigns",
        "Maintain donation history and achievements",
        "Improve our services and user experience",
        "Ensure platform safety and prevent fraudulent activity",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      title: "Information Sharing",
      icon: Lock,
      content: [
        "We never sell your personal information to third parties",
        "Medical facilities may receive necessary contact information when coordinating donations",
        "Anonymous, aggregated data may be shared for research purposes",
        "Legal authorities may receive information when required by law",
        "Service providers who help operate our platform (with strict confidentiality agreements)"
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: Shield,
      content: [
        "Access your personal data and download a copy",
        "Correct or update inaccurate information",
        "Delete your account and associated data",
        "Control who can see your donor profile",
        "Opt out of non-essential communications",
        "Request data portability to another service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is fundamental to our mission. Learn how we protect and use your information.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At BloodBridge, we understand that trust is essential when dealing with personal health information. 
              This Privacy Policy explains how we collect, use, protect, and share your information when you use 
              our blood donation platform. We are committed to maintaining the highest standards of privacy and 
              security while enabling life-saving connections between donors and recipients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Data Security */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We employ industry-standard security measures to protect your information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Technical Safeguards</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Regular security audits and updates</li>
                <li>• Secure data centers with physical security</li>
                <li>• Multi-factor authentication options</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Operational Safeguards</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Limited access to personal data</li>
                <li>• Employee privacy training programs</li>
                <li>• Incident response procedures</li>
                <li>• Regular backup and recovery testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@bloodbridge.org" 
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Email Privacy Team
              </a>
              <button className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                Download Policy (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;