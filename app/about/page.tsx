'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Users, Target, Globe, Award, ArrowRight, Leaf, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1497436072909-f5e4be1713a0?q=80&w=2032&auto=format&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Vectorium
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We're revolutionizing the carbon credit market through blockchain technology, 
              making environmental sustainability accessible, transparent, and impactful for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
              >
                Join Our Mission <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Vectorium, we believe that fighting climate change shouldn't be complicated or opaque. 
                Our mission is to democratize access to verified carbon credits through cutting-edge blockchain 
                technology, creating a transparent and efficient marketplace for environmental impact.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're building the infrastructure for a sustainable future, where every individual and 
                organization can easily measure, track, and offset their carbon footprint while supporting 
                verified environmental projects worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1M+</div>
                  <div className="text-gray-600">Tons CO₂ Offset</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Verified Projects</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=2070&auto=format&fit=crop"
                alt="Sustainable technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do at Vectorium
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Every transaction is recorded on the blockchain, ensuring complete transparency and traceability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to supporting projects that create real, measurable environmental impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology to make carbon trading more accessible and efficient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Our platform connects projects worldwide, creating a global network for climate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the passionate individuals driving the future of sustainable technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
              <p className="text-emerald-600 mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600">
                Former blockchain engineer at Tesla with 10+ years in sustainable technology.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-emerald-600 mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600">
                Environmental scientist turned tech leader, passionate about climate solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Head of Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Rodriguez</h3>
              <p className="text-emerald-600 mb-3">Head of Operations</p>
              <p className="text-gray-600">
                Former Goldman Sachs executive specializing in environmental finance and carbon markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-emerald-100 mb-6">
                Vectorium was born from a simple observation: the carbon credit market was fragmented, 
                opaque, and difficult to navigate. Despite the urgent need for climate action, 
                individuals and businesses struggled to find reliable ways to offset their carbon footprint.
              </p>
              <p className="text-lg text-emerald-100 mb-6">
                In 2023, our founders came together with a shared vision: to create a transparent, 
                accessible platform that would democratize carbon trading through blockchain technology. 
                What started as a small team of passionate engineers and environmental scientists has 
                grown into a global movement.
              </p>
              <p className="text-lg text-emerald-100 mb-8">
                Today, Vectorium is proud to be at the forefront of the climate tech revolution, 
                connecting millions of users with verified environmental projects worldwide.
              </p>
              <Link
                href="/careers"
                className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                Join Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of individuals and organizations who are already making a difference 
              through verified carbon credits on our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/marketplace"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}