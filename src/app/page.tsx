'use client';

import { Menu, X, ArrowRight, Brain, Zap, Shield, BarChart3, MessageSquare, Code } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const capabilities = [
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'Adaptive AI that learns from your data and improves over time'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process millions of requests with sub-millisecond latency'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, SOC 2, and more'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive reporting dashboards'
    },
    {
      icon: MessageSquare,
      title: 'Natural Conversation',
      description: 'Human-like interactions with context awareness and memory'
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs for seamless implementation'
    }
  ];

  const integrations = [
    { name: 'Slack', color: '#36C5F0' },
    { name: 'Google', color: '#EA4335' },
    { name: 'Microsoft Teams', color: '#7FBA00' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Stripe', color: '#0052FF' },
    { name: 'HubSpot', color: '#FF7A59' },
    { name: 'Zapier', color: '#FF6B00' },
    { name: 'AWS', color: '#FF9900' }
  ];

  const customers = [
    { name: 'TechCorp', logo: '📱' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSync', logo: '☁️' },
    { name: 'SmartAI', logo: '🧠' },
    { name: 'FastAPI', logo: '⚡' },
    { name: 'SecureNet', logo: '🔒' }
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
            <span className="font-bold text-lg" style={{color: '#181818'}}>AIFlow</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#capabilities" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              Capabilities
            </a>
            <a href="#integrations" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              Integrations
            </a>
            <a href="#customers" className="text-gray-700 dark:text-gray-300 hover:text-[#FF4876] dark:hover:text-[#FF4876] transition-colors">
              Customers
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
              <a href="#capabilities" className="block text-gray-700 dark:text-gray-300">Capabilities</a>
              <a href="#integrations" className="block text-gray-700 dark:text-gray-300">Integrations</a>
              <a href="#customers" className="block text-gray-700 dark:text-gray-300">Customers</a>
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
            <span className="eyebrow-dash-text">AI-Powered. Production-Ready.</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{color: '#181818'}}>
          The AI Platform Built for <span style={{color: '#FF4876'}}>Scale</span>
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: '#181818'}}>
          Harness the power of advanced AI without the complexity. Our platform provides enterprise-grade intelligence that&apos;s easy to integrate and scales with your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2" style={{backgroundColor: '#FF4876'}}>
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 border-2 rounded-lg font-semibold transition-colors" style={{borderColor: '#FF4876', color: '#FF4876'}}  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF487620'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            Watch Demo
          </button>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 mb-20">
          <div>
            <p className="text-3xl md:text-4xl font-bold" style={{color: '#FF4876'}}>99.99%</p>
            <p className="text-sm md:text-base" style={{color: '#181818'}}>Uptime SLA</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold" style={{color: '#FF4876'}}>10M+</p>
            <p className="text-sm md:text-base" style={{color: '#181818'}}>API Calls Daily</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold" style={{color: '#FF4876'}}>&lt;10ms</p>
            <p className="text-sm md:text-base" style={{color: '#181818'}}>Response Time</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
          <div className="aspect-video flex items-center justify-center" style={{backgroundColor: '#FF4876'}}>
            <div className="text-center text-white">
              <Brain className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-semibold opacity-75">Interactive Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Powerful Capabilities</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#181818'}}>
            Powerful Capabilities
          </h2>
          <p className="text-xl" style={{color: '#181818'}}>
            Everything you need to build next-generation AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="p-8 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 transition-colors group" style={{borderColor: 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{backgroundColor: '#FF487720'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF487740'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF487720'}>
                  <Icon className="w-6 h-6" style={{color: '#FF4876'}} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#181818'}}>
                  {cap.title}
                </h3>
                <p style={{color: '#181818'}}>
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Seamless Integrations</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#181818'}}>
            Seamless Integrations
          </h2>
          <p className="text-xl" style={{color: '#181818'}}>
            Connect with your favorite tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: integration.color + '20'}}>
                  <span style={{color: integration.color}} className="text-xl font-bold">●</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {integration.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="eyebrow-dash">
              <span className="eyebrow-dash-text">Trusted by Leading Teams</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#181818'}}>
            Trusted by Leading Teams
          </h2>
          <p className="text-xl" style={{color: '#181818'}}>
            Join hundreds of companies using AIFlow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {customers.map((customer, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center transition-colors" style={{borderColor: 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF4876'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
              <div className="text-center">
                <p className="text-4xl mb-2">{customer.logo}</p>
                <p className="text-sm font-medium" style={{color: '#181818'}}>
                  {customer.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="rounded-2xl p-12 text-center" style={{backgroundColor: '#FF4876'}}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to transform your AI experience?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-white">
            Join the next generation of AI-powered applications. Start your free trial today.
          </p>
          <button className="px-8 py-4 bg-white text-[#FF4876] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Start Your Free Trial <ArrowRight className="w-4 h-4" />
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
                <span className="font-bold" style={{color: '#181818'}}>AIFlow</span>
              </div>
              <p className="text-sm" style={{color: '#181818'}}>
                The AI platform built for scale
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
              © 2024 AIFlow. All rights reserved.
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
