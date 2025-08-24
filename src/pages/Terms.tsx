import React from 'react';
import { FileText, Users, Shield, AlertTriangle } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: `By accessing and using BloodBridge, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: `Users must provide accurate and truthful information, maintain the confidentiality of their account, use the platform only for legitimate blood donation purposes, respect other users and maintain professional conduct, comply with all applicable laws and regulations, and report any suspicious or inappropriate activity.`
    },
    {
      title: "Medical Disclaimers",
      icon: Shield,
      content: `BloodBridge is a connecting platform only and does not provide medical services or advice. All blood donations must occur at certified medical facilities with proper medical supervision. Users are responsible for their own health screening and eligibility assessment. We do not guarantee the availability of donors or the success of blood donation requests.`
    },
    {
      title: "Prohibited Activities",
      icon: AlertTriangle,
      content: `Commercial sale of blood or blood products, providing false medical or personal information, harassment or inappropriate behavior toward other users, unauthorized access to other users' accounts, and any activity that could compromise platform security or integrity.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using BloodBridge
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to BloodBridge</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of the BloodBridge platform operated by BloodBridge Organization. 
              BloodBridge is designed to connect blood donors with recipients and medical facilities to facilitate life-saving blood donations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using our service, you agree to these terms. Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Account Management</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• You are responsible for maintaining account security</li>
                <li>• One account per person is permitted</li>
                <li>• Account information must be kept up to date</li>
                <li>• We reserve the right to suspend or terminate accounts</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Platform Usage</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Platform is for blood donation coordination only</li>
                <li>• No commercial use without written permission</li>
                <li>• Respect intellectual property rights</li>
                <li>• Follow community guidelines and policies</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Privacy & Data</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Your data is protected per our Privacy Policy</li>
                <li>• We may use anonymous data for improvements</li>
                <li>• You control your profile visibility settings</li>
                <li>• Data retention follows regulatory requirements</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Limitation of Liability</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Service provided "as is" without warranties</li>
                <li>• We are not liable for medical decisions or outcomes</li>
                <li>• Users assume responsibility for their actions</li>
                <li>• Liability limited to maximum extent by law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:legal@bloodbridge.org" 
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Legal Team
              </a>
              <button className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                Download Terms (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;