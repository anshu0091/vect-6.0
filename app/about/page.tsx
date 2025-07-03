'use client';

import { Users, Target, Globe, Award, ArrowRight, Heart, Lightbulb, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Vectorium
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to democratize carbon markets and accelerate the world's transition 
              to a sustainable future through innovative blockchain technology.
            </p>
            <Link
              href="/careers"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Join Our Mission <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create a transparent, accessible, and efficient carbon credit marketplace that empowers 
                individuals and organizations to take meaningful climate action while supporting verified 
                environmental projects worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Transparency First</h4>
                    <p className="text-gray-600 text-sm">Every transaction is recorded on an immutable blockchain ledger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Impact</h4>
                    <p className="text-gray-600 text-sm">Supporting environmental projects across all continents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Accessible to All</h4>
                    <p className="text-gray-600 text-sm">Making carbon markets available to everyone, not just institutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=2070&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Vectorium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We believe in taking responsibility for our planet's future and supporting projects that create real environmental impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of technology to create better solutions for carbon market challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency, security, and ethical business practices in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact So Far</h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to environmental change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1M+</div>
              <div className="text-gray-600">Carbon Credits Traded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Verified Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries driving Vectorium's mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
              <p className="text-emerald-600 font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former climate policy advisor with 15+ years in sustainable finance and blockchain technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marcus Rodriguez</h3>
              <p className="text-emerald-600 font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Blockchain architect and former lead engineer at major fintech companies with expertise in DeFi protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Amara Okafor</h3>
              <p className="text-emerald-600 font-medium mb-3">Chief Science Officer</p>
              <p className="text-gray-600 text-sm">
                Environmental scientist and carbon market expert with PhD in Climate Change and 20+ years of research experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in Vectorium's growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">2022</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Company Founded</h3>
                  <p className="text-gray-600">Vectorium was founded with the vision of democratizing carbon markets through blockchain technology.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">2023</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Platform Launch</h3>
                  <p className="text-gray-600">Launched our beta platform with the first verified carbon credit projects and early adopter community.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">2024</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Global Expansion</h3>
                  <p className="text-gray-600">Expanded to 25 countries and partnered with major environmental organizations worldwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">2025</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-600">Launching enterprise-grade solutions for corporations and institutions to manage their carbon portfolios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Whether you're looking to offset your carbon footprint, invest in environmental projects, 
              or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/auth/signup"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}