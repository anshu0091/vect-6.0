'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg"
                alt="Vectorium"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Vectorium</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionizing sustainability through blockchain technology and carbon credits trading.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@vectorium.com" className="hover:text-emerald-400 transition-colors">
                  hello@vectorium.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/marketplace" className="hover:text-emerald-400 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="hover:text-emerald-400 transition-colors">
                  Wallet
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-emerald-400 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a 
                  href="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  Whitepaper <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/support" className="hover:text-emerald-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest news about carbon credits, sustainability, and blockchain technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/vectorium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/company/vectorium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/vectorium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@vectorium.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Vectorium. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}