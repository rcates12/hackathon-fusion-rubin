'use client';

import { Menu, X, ArrowRight, Brain, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Jailbreak() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const features = [
    {
      title: 'Analytics',
      description: 'Learn everything about your customers so you can improve everything about their digital experiences.',
      points: ['Evaluate product usage', 'Visualize user paths', 'Uncover how your users feel', 'Integrate your data']
    },
    {
      title: 'In-App Guides',
      description: 'Deliver personalized guidance to customers, directly inside your app.',
      points: ['Personalize every experience', 'Jump start the creation process', 'Get users to value quickly', 'Create cross-app consistency', 'Empower your entire team']
    },
    {
      title: 'Session Replay',
      description: 'Understand why users do what they do through video playbacks of their actions.',
      points: ['Filter by quant and qual', 'Access anywhere on Pendo', 'Put customer privacy first', 'View replays by guide data']
    },
    {
      title: 'Feedback',
      description: 'Plug your CRM and other tools into Pendo so you can leverage product data across your entire organization.',
      points: ['Understand your customers', 'Make the right investments', 'AI-generated qualitative insights', 'Close the feedback loop', 'Unify your feedback']
    },
    {
      title: 'Integrations',
      description: 'Connect the power of Pendo with the tools you use every day',
      points: ['Enhance your existing data', 'Evaluate insights across teams', 'Add value to your existing workflow']
    }
  ];

  const stats = [
    { value: '500M', label: "End users' experiences impacted" },
    { value: '70%', label: 'of Pendo customers see a positive ROI within 6-8 months' },
    { value: '62%', label: 'of customers say Pendo has increased feature adoption' },
    { value: '15B+', label: 'Events processed daily' }
  ];

  const faqs = [
    {
      question: 'Is Pendo easy to install?',
      answer: 'Yes! Pendo can generally be installed in an hour or less.'
    },
    {
      question: 'Will Pendo work for my mobile app?',
      answer: 'Yes! Pendo is a codeless solution for native iOS and Android Applications, Xamarin & React Native. We have a Track Events solution for SwiftUI, Flutter and hybrid apps.'
    },
    {
      question: 'Where is my data hosted?',
      answer: 'Data is hosted on Google Cloud Platform - either in the USA or EU, dependent on customer requirements.'
    },
    {
      question: 'Will Pendo work with my other tools?',
      answer: 'Yes! Pendo currently has 40+ integration partners to extend the power of Pendo with the tools your team uses every day. Connect to key business systems like Salesforce, Zendesk, Slack, and more to rally your cross-functional teams around your product.'
    }
  ];

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FF4876'}}>
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg" style={{color: '#181818'}}>Pendo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              Features
            </a>
            <a href="#faqs" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              FAQs
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 text-white font-medium rounded-lg hover:shadow-lg transition-shadow" style={{backgroundColor: '#FF4876'}}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a href="/" className="block text-gray-700 dark:text-gray-300">Home</a>
              <a href="#features" className="block text-gray-700 dark:text-gray-300">Features</a>
              <a href="#faqs" className="block text-gray-700 dark:text-gray-300">FAQs</a>
              <button className="w-full px-6 py-2 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-6 py-2 text-white font-medium rounded-lg" style={{backgroundColor: '#FF4876'}}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Panel */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32" style={{backgroundColor: '#0D0D0B'}}>
        <div className="max-w-4xl w-full">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight" style={{color: '#F5F5F2', fontFamily: 'Sora, serif'}}>
            Deliver wow-worthy digital experiences
          </h1>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed" style={{color: '#A0A09C', fontFamily: 'Inter, sans-serif'}}>
            Pendo improves the apps you build, buy, and sell so you can deliver better customer and employee experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow flex items-center gap-2 w-fit" style={{backgroundColor: '#FF4876'}}>
              Book a consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 rounded-lg font-semibold transition-colors w-fit" style={{borderColor: '#FF4876', color: '#FF4876'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF487620'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Features Panel */}
      <section id="features" className="min-h-screen flex flex-col" style={{backgroundColor: '#0D0D0B'}}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex-1 flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-24"
            style={{backgroundColor: idx % 2 === 0 ? '#0D0D0B' : '#141412'}}
          >
            <div className="max-w-4xl w-full">
              <h3 className="text-5xl md:text-6xl font-bold mb-8" style={{color: '#FF4876', fontFamily: 'Sora, serif'}}>
                {feature.title}
              </h3>
              
              <p className="text-lg mb-8 max-w-2xl leading-relaxed" style={{color: '#F5F5F2', fontFamily: 'Inter, sans-serif'}}>
                {feature.description}
              </p>

              <ul className="space-y-4">
                {feature.points.map((point, pidx) => (
                  <li key={pidx} className="text-lg flex items-start gap-3" style={{color: '#F5F5F2', fontFamily: 'Inter, sans-serif'}}>
                    <span style={{color: '#FF4876'}} className="font-bold flex-shrink-0 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Panel */}
      <section className="flex flex-col" style={{backgroundColor: '#0D0D0B'}}>
        <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <h2 className="text-5xl md:text-6xl font-bold" style={{color: '#F5F5F2', fontFamily: 'Sora, serif'}}>
            Pendo by the numbers
          </h2>
        </div>

        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-20 min-h-[400px] md:min-h-[500px]"
            style={{backgroundColor: '#0D0D0B'}}
          >
            <div className="max-w-4xl w-full">
              <div className="text-9xl md:text-10xl font-bold" style={{color: '#FF4876', fontFamily: 'Sora, serif', lineHeight: '1'}}>
                {stat.value}
              </div>
              <p className="text-2xl md:text-3xl mt-6 max-w-2xl leading-relaxed" style={{color: '#F5F5F2', fontFamily: 'Inter, sans-serif'}}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* AI Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32" style={{backgroundColor: '#F5F5F2'}}>
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-7xl font-bold mb-8" style={{color: '#0D0D0B', fontFamily: 'Sora, serif'}}>
            Meet Pendo&apos;s all-in-one product experience platform, enhanced with artificial intelligence
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{color: '#0D0D0B', fontFamily: 'Inter, sans-serif'}}>
            Leverage AI-powered insights to understand your users better and deliver more personalized experiences at scale.
          </p>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32" style={{backgroundColor: '#F5F5F2'}}>
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-7xl font-bold mb-8" style={{color: '#0D0D0B', fontFamily: 'Sora, serif'}}>
            Pendo integrates with the tools you&apos;re already using
          </h2>
          
          <p className="text-lg md:text-xl mb-16 max-w-2xl leading-relaxed" style={{color: '#0D0D0B', fontFamily: 'Inter, sans-serif'}}>
            Extend the power of Pendo with 40+ integration partners to enhance your existing workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Salesforce', 'Zendesk', 'Slack', 'HubSpot', 'Stripe', 'Microsoft Teams', 'Zapier', 'AWS'].map((integration, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-[#FF4876] transition-colors cursor-pointer">
                <p className="text-sm font-medium text-center" style={{color: '#0D0D0B'}}>
                  {integration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32" style={{backgroundColor: '#F5F5F2'}}>
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-7xl font-bold mb-16" style={{color: '#0D0D0B', fontFamily: 'Sora, serif'}}>
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-100 transition-colors text-left border-b border-gray-300"
                >
                  <h3 className="text-xl font-semibold" style={{color: '#0D0D0B', fontFamily: 'Inter, sans-serif'}}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className="w-5 h-5 transition-transform flex-shrink-0 ml-4"
                    style={{color: '#FF4876', transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)'}}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p style={{color: '#0D0D0B', fontFamily: 'Inter, sans-serif'}}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32" style={{backgroundColor: '#FF4876'}}>
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-7xl font-bold mb-8" style={{color: '#F5F5F2', fontFamily: 'Sora, serif'}}>
            Ready to get started?
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed" style={{color: '#F5F5F2', fontFamily: 'Inter, sans-serif'}}>
            The all-in-one platform for digital transformation. We help product, marketing, customer success, and IT teams deliver digital experiences customers want — and want to pay for — while consolidating costs with a single platform.
          </p>

          <button className="px-8 py-4 bg-white text-[#FF4876] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule your free consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-gray-200" style={{backgroundColor: '#F5F5F2'}}>
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FF4876'}}>
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold" style={{color: '#0D0D0B'}}>Pendo</span>
              </div>
              <p className="text-sm" style={{color: '#0D0D0B'}}>
                Digital experience platform for your apps
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#0D0D0B'}}>Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Features</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Pricing</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#0D0D0B'}}>Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>About</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Blog</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#0D0D0B'}}>Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Privacy</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Terms</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm" style={{color: '#0D0D0B'}}>
              © 2024 Pendo. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>Twitter</a>
              <a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>LinkedIn</a>
              <a href="#" className="transition-colors" style={{color: '#0D0D0B'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#0D0D0B'}>GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
