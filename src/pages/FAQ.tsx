import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Heart, Shield, Users } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is BloodBridge?",
          answer: "BloodBridge is a digital platform that connects blood donors with recipients and hospitals. We facilitate safe, efficient blood donation by matching donors with those in need based on blood type and location."
        },
        {
          question: "How does BloodBridge work?",
          answer: "Simply sign up as a donor or recipient, complete your profile, and start connecting. Donors can browse emergency requests, while recipients can search for nearby donors. Our platform handles the matching and coordination."
        },
        {
          question: "Is BloodBridge free to use?",
          answer: "Yes, BloodBridge is completely free for all users. We believe access to life-saving blood donations should never be hindered by cost."
        }
      ]
    },
    {
      title: "For Donors",
      icon: Heart,
      questions: [
        {
          question: "Who can donate blood?",
          answer: "Generally, healthy individuals aged 18-65, weighing at least 50kg, with no recent illnesses or medications can donate. However, specific eligibility varies by location and health conditions."
        },
        {
          question: "How often can I donate blood?",
          answer: "You can donate whole blood every 8 weeks (56 days). Platelet donations can be made every 2 weeks, and plasma every 4 weeks."
        },
        {
          question: "What happens after I register as a donor?",
          answer: "After registration, you'll receive notifications about nearby blood requests that match your blood type. You can choose which requests to respond to based on your availability."
        },
        {
          question: "Do I earn points for donating?",
          answer: "Yes! Our gamification system rewards donors with points, badges, and leaderboard positions to recognize their life-saving contributions."
        }
      ]
    },
    {
      title: "For Recipients",
      icon: Users,
      questions: [
        {
          question: "How do I find blood donors?",
          answer: "Use our search feature to find donors by blood type and location. You can also post emergency requests that notify all compatible donors in your area."
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need to provide your blood type, location, urgency level, and medical facility details. This helps us match you with suitable donors quickly."
        },
        {
          question: "How quickly can I expect to find donors?",
          answer: "Response times vary based on blood type rarity and location. Common blood types in urban areas typically receive responses within hours, while rare types may take longer."
        },
        {
          question: "Can hospitals use BloodBridge?",
          answer: "Yes, hospitals can register as institutional users to post blood requirements and coordinate with multiple donors for their patients' needs."
        }
      ]
    },
    {
      title: "Safety & Privacy",
      icon: Shield,
      questions: [
        {
          question: "How do you ensure donor safety?",
          answer: "We partner with certified medical facilities and provide safety guidelines. All donations should occur at registered blood banks or hospitals with proper medical supervision."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption and security measures. Your personal information is never shared without your consent, and you control your privacy settings."
        },
        {
          question: "Can I remain anonymous?",
          answer: "You can choose your privacy level. While some information (blood type, general location) is needed for matching, you can control how much personal information is visible to others."
        },
        {
          question: "What if I have a bad experience?",
          answer: "Report any issues through our support system. We take all reports seriously and work to ensure a safe, positive experience for all users."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about BloodBridge and blood donation
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
              Browse Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;