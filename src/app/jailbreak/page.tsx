'use client';

import { Menu, X, ArrowRight, Brain, BarChart3, MessageSquare, Video, MessageCircle, Zap, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Jailbreak() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const features = [
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Learn everything about your customers so you can improve everything about their digital experiences.',
      points: ['Evaluate product usage', 'Visualize user paths', 'Uncover how your users feel', 'Integrate your data']
    },
    {
      icon: MessageSquare,
      title: 'In-App Guides',
      description: 'Deliver personalized guidance to customers, directly inside your app.',
      points: ['Personalize every experience', 'Jump start the creation process', 'Get users to value quickly', 'Create cross-app consistency', 'Empower your entire team']
    },
    {
      icon: Video,
      title: 'Session Replay',
      description: 'Understand why users do what they do through video playbacks of their actions.',
      points: ['Filter by quant and qual', 'Access anywhere on Pendo', 'Put customer privacy first', 'View replays by guide data']
    },
    {
      icon: MessageCircle,
      title: 'Feedback',
      description: 'Plug your CRM and other tools into Pendo so you can leverage product data across your entire organization.',
      points: ['Understand your customers', 'Make the right investments', 'AI-generated qualitative insights', 'Close the feedback loop', 'Unify your feedback']
    },
    {
      icon: Zap,
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
    <div className="w-full" style={{backgroundColor: '#EDEEE7'}}>
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="eyebrow-dash">
            <span className="eyebrow-dash-text">Product Platform</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{color: '#181818'}}>
          Deliver wow-worthy digital <span style={{color: '#FF4876'}}>experiences</span>
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: '#181818'}}>
          Pendo improves the apps you build, buy, and sell so you can deliver better customer and employee experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2" style={{backgroundColor: '#FF4876'}}>
            Book a consultation <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 border-2 rounded-lg font-semibold transition-colors" style={{borderColor: '#FF4876', color: '#FF4876'}}  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF487620'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            Explore Features
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">A Unified Product Experience</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#181818'}}>
            A unified product experience backed by AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 transition-colors" style={{borderColor: 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{backgroundColor: '#FF487720'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF487740'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF487720'}>
                  <Icon className="w-5 h-5" style={{color: '#FF4876'}} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#181818'}}>
                  {feature.title}
                </h3>
                <p className="text-sm mb-4" style={{color: '#181818'}}>
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point, pidx) => (
                    <li key={pidx} className="text-sm flex items-start gap-2" style={{color: '#181818'}}>
                      <span style={{color: '#FF4876'}} className="font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Pendo by the Numbers</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: '#181818'}}>
            Pendo by the numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-8 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
              <p className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#FF4876'}}>
                {stat.value}
              </p>
              <p style={{color: '#181818'}}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pendo AI Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Pendo AI</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#181818'}}>
            Meet Pendo&apos;s all-in-one product experience platform, enhanced with artificial intelligence
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#181818'}}>
            Leverage AI-powered insights to understand your users better and deliver more personalized experiences at scale.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
          <div className="aspect-video flex items-center justify-center" style={{backgroundColor: '#FF4876'}}>
            <div className="text-center text-white">
              <Brain className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-semibold opacity-75">Pendo AI In Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Integrations</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#181818'}}>
            Pendo integrates with the tools you&apos;re already using
          </h2>
          <p className="text-xl" style={{color: '#181818'}}>
            Extend the power of Pendo with 40+ integration partners to enhance your existing workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Salesforce', 'Zendesk', 'Slack', 'HubSpot', 'Stripe', 'Microsoft Teams', 'Zapier', 'AWS'].map((integration, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-[#FF4876] transition-colors cursor-pointer">
              <p className="text-sm font-medium text-center" style={{color: '#181818'}}>
                {integration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Common Questions</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: '#181818'}}>
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left" style={{color: '#181818'}}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 transition-transform"
                  style={{color: '#FF4876', transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)'}}
                />
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-800">
                  <p style={{color: '#181818'}}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="rounded-2xl p-12 text-center" style={{backgroundColor: '#FF4876'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to get started?
          </h2>
          <p className="text-lg opacity-90 mb-8 text-white">
            The all-in-one platform for digital transformation. We help product, marketing, customer success, and IT teams deliver digital experiences customers want — and want to pay for — while consolidating costs with a single platform.
          </p>
          <button className="px-8 py-4 bg-white text-[#FF4876] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule your free consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FF4876'}}>
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold" style={{color: '#181818'}}>Pendo</span>
              </div>
              <p className="text-sm" style={{color: '#181818'}}>
                Digital experience platform for your apps
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#181818'}}>Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Features</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Pricing</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#181818'}}>Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>About</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Blog</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: '#181818'}}>Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Privacy</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Terms</a></li>
                <li><a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm" style={{color: '#181818'}}>
              © 2024 Pendo. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>Twitter</a>
              <a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>LinkedIn</a>
              <a href="#" className="transition-colors" style={{color: '#181818'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.color = '#181818'}>GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
