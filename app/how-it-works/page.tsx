'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  UserPlus, 
  Search, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Leaf,
  TrendingUp,
  Users
} from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
            alt="How it works"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Vectorium Works
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover how our blockchain-powered platform makes carbon credit trading 
              simple, transparent, and impactful for everyone.
            </p>
            <Link
              href="/auth/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Steps to Climate Action
            </h2>
            <p className="text-lg text-gray-600">
              Get started with carbon credit trading in just four easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Account</h3>
              <p className="text-gray-600">
                Sign up for your Vectorium account and complete the quick verification process to start trading.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse Projects</h3>
              <p className="text-gray-600">
                Explore our marketplace of verified carbon credit projects from around the world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Purchase Credits</h3>
              <p className="text-gray-600">
                Buy carbon credits instantly with secure blockchain transactions and transparent pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Track Impact</h3>
              <p className="text-gray-600">
                Monitor your environmental impact and receive certificates for your carbon offset contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powered by Blockchain Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform leverages cutting-edge blockchain technology to ensure every carbon credit 
                transaction is transparent, secure, and verifiable. Each credit is tokenized as a unique 
                digital asset, creating an immutable record of ownership and impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Immutable Records</h4>
                    <p className="text-gray-600">Every transaction is permanently recorded on the blockchain</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Smart Contracts</h4>
                    <p className="text-gray-600">Automated execution ensures fair and transparent trading</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Accessibility</h4>
                    <p className="text-gray-600">Trade carbon credits 24/7 from anywhere in the world</p>
                  </div>
                </div>
              </div>
              <Link
                href="/security"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-2"
              >
                Learn about our security <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
                alt="Blockchain technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rigorous Verification Process
            </h2>
            <p className="text-lg text-gray-600">
              Every carbon credit on our platform undergoes strict verification to ensure authenticity and impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Third-Party Verification</h3>
              <p className="text-gray-600 mb-4">
                All projects are verified by internationally recognized certification bodies including 
                Verra, Gold Standard, and Climate Action Reserve.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Independent auditing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Continuous monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Impact verification
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-4">
                Our platform provides real-time tracking of project progress and carbon reduction 
                achievements through IoT sensors and satellite monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Satellite imagery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  IoT sensors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Data analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Standards</h3>
              <p className="text-gray-600 mb-4">
                We adhere to the highest international standards for carbon credit quality, 
                ensuring additionality, permanence, and measurability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ISO 14064 compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  UNFCCC recognition
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Paris Agreement aligned
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vectorium?
            </h2>
            <p className="text-lg text-emerald-100">
              Experience the future of carbon trading with our innovative platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Impact</h3>
              <p className="text-emerald-100">
                Every credit represents real, measurable environmental impact from verified projects worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
              <p className="text-emerald-100">
                Fair market pricing with no hidden fees. See exactly where your money goes and the impact it creates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
              <p className="text-emerald-100">
                Join a global community of climate-conscious individuals and organizations making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about carbon credits and our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What are carbon credits?</h3>
              <p className="text-gray-600">
                Carbon credits are certificates representing the reduction or removal of one metric ton of 
                carbon dioxide equivalent from the atmosphere. They allow individuals and organizations to 
                offset their carbon footprint by supporting verified environmental projects.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How does blockchain ensure transparency?</h3>
              <p className="text-gray-600">
                Blockchain technology creates an immutable ledger of all transactions. Every carbon credit 
                purchase, transfer, and retirement is permanently recorded, making it impossible to double-count 
                or fraudulently manipulate credits.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Are the projects really making an impact?</h3>
              <p className="text-gray-600">
                Yes! All projects on our platform are verified by internationally recognized certification 
                bodies and undergo continuous monitoring. We use satellite imagery, IoT sensors, and 
                third-party audits to ensure real environmental impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can I sell my carbon credits?</h3>
              <p className="text-gray-600">
                Yes, our platform supports both buying and selling of carbon credits. You can trade your 
                credits on our marketplace, providing liquidity and flexibility for your carbon portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Climate Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already making a positive impact on the environment 
              through verified carbon credits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/marketplace"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}