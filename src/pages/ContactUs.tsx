import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 1800-123-4567',
      subtitle: 'Available 24/7 for emergencies'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@bloodbridge.org',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Healthcare Plaza, Medical District',
      subtitle: 'New Delhi, India 110001'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sun: 24/7',
      subtitle: 'Always here when you need us'
    }
  ];

  const faqs = [
    {
      question: 'How do I register as a donor?',
      answer: 'Click on "Join as Donor" button and fill out the registration form with your details including blood group and location.'
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Yes, we follow strict privacy guidelines and only share necessary information with verified recipients.'
    },
    {
      question: 'How quickly can I find a donor in emergency?',
      answer: 'Our emergency request system notifies nearby donors immediately, typically within minutes.'
    },
    {
      question: 'Are there any charges for using BloodBridge?',
      answer: 'No, our platform is completely free for both donors and recipients.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We're here to help you save lives. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {info.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and FAQ */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-blood"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-blood"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-blood"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-blood resize-none"
                      placeholder="Tell us more about your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full btn-primary ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-semibold text-destructive mb-2">
                  Emergency Contact
                </h3>
                <p className="text-muted-foreground mb-3">
                  For urgent blood requirements, call our emergency hotline:
                </p>
                <div className="text-2xl font-bold text-destructive">
                  1800-BLOOD-HELP
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Available 24/7 for emergency assistance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;