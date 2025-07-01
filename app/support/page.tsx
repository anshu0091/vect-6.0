'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  FileText, 
  Users, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Search,
  Book,
  Video,
  Download
} from 'lucide-react';

export default function Support() {
  const faqs = [
    {
      question: "How do I get started with carbon credit trading?",
      answer: "Simply create an account, verify your email, and you'll receive $10,000 in virtual credits to start trading. Browse our marketplace to find verified carbon credits that match your sustainability goals."
    },
    {
      question: "Are the carbon credits on your platform verified?",
      answer: "Yes, all carbon credits on our platform are verified by internationally recognized certification bodies including Verra, Gold Standard, and Climate Action Reserve."
    },
    {
      question: "How does the blockchain technology work?",
      answer: "Our blockchain technology ensures transparency and immutability of all transactions. Each carbon credit is tokenized, creating a permanent record of ownership and preventing double-counting."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Currently, we use a virtual wallet system for trading. In the future, we'll support cryptocurrency payments and traditional payment methods."
    },
    {
      question: "Can I sell my carbon credits?",
      answer: "Yes, you can sell your carbon credits on our marketplace. Simply go to your wallet, select the credits you want to sell, set your price, and list them for other users to purchase."
    },
    {
      question: "How do I track my environmental impact?",
      answer: "Your dashboard provides detailed analytics on your carbon offset contributions, including total CO₂ offset, equivalent trees planted, and impact certificates you can download."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="Customer support"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get the support you need to make the most of your carbon credit trading experience. 
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Contact Support <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#faq"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-colors"
              >
                Browse FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Help
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions and get help with your account
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl border hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of carbon credit trading and how to use our platform.
              </p>
              <Link href="/how-it-works" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-6 rounded-2xl border hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step tutorials on how to buy, sell, and manage carbon credits.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Watch Videos →
              </button>
            </div>
            
            <div className="text-center p-6 rounded-2xl border hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Access comprehensive guides and technical documentation.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                View Docs →
              </button>
            </div>
            
            <div className="text-center p-6 rounded-2xl border hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <p className="text-gray-600 mb-4">
                Download guides, templates, and other helpful resources.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Download →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Support
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant help from our support team. Available 24/7 for urgent issues.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4" />
                <span>Response time: 2-5 minutes</span>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed message and we'll get back to you with a comprehensive answer.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4" />
                <span>Response time: 2-4 hours</span>
              </div>
              <a
                href="mailto:support@vectorium.com"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team for complex issues or urgent matters.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
              <a
                href="tel:+1-555-123-4567"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Status Page */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              System Status
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Check the current status of our platform and services
            </p>
            
            <div className="bg-emerald-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-300" />
                <span className="text-lg font-semibold">All Systems Operational</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Trading Platform</span>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>User Authentication</span>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Payment Processing</span>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                </div>
              </div>
            </div>
            
            <a
              href="#"
              className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
            >
              View Detailed Status <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}