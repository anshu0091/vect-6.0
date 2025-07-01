'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Cookie, Settings, Eye, Shield } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
            alt="Cookie policy"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Learn about how we use cookies and similar technologies to improve your experience on our platform.
            </p>
            <div className="text-sm text-emerald-200">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cookie className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-600">Required for basic platform functionality</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600">Help us understand how you use our platform</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                <p className="text-gray-600">Remember your settings and choices</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>What Are Cookies?</h2>
              
              <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and helping us understand how you use our platform.</p>

              <h2>Types of Cookies We Use</h2>
              
              <h3>Essential Cookies</h3>
              <p>These cookies are necessary for our platform to function properly. They enable core functionality such as:</p>
              <ul>
                <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                <li><strong>Security:</strong> Protect against cross-site request forgery attacks</li>
                <li><strong>Session Management:</strong> Maintain your session state across pages</li>
                <li><strong>Load Balancing:</strong> Distribute traffic across our servers</li>
              </ul>
              <p><em>These cookies cannot be disabled as they are essential for the platform to work.</em></p>

              <h3>Functional Cookies</h3>
              <p>These cookies enhance your experience by remembering your preferences:</p>
              <ul>
                <li><strong>Language Settings:</strong> Remember your preferred language</li>
                <li><strong>Theme Preferences:</strong> Save your light/dark mode choice</li>
                <li><strong>Dashboard Layout:</strong> Remember your customized dashboard settings</li>
                <li><strong>Trading Preferences:</strong> Save your default trading settings</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>These cookies help us understand how visitors interact with our platform:</p>
              <ul>
                <li><strong>Usage Analytics:</strong> Track which features are most popular</li>
                <li><strong>Performance Monitoring:</strong> Identify slow-loading pages</li>
                <li><strong>Error Tracking:</strong> Help us fix bugs and improve stability</li>
                <li><strong>User Journey:</strong> Understand how users navigate our platform</li>
              </ul>
              <p><em>This data is aggregated and anonymized to protect your privacy.</em></p>

              <h3>Marketing Cookies</h3>
              <p>These cookies help us provide relevant content and measure campaign effectiveness:</p>
              <ul>
                <li><strong>Personalization:</strong> Show relevant content based on your interests</li>
                <li><strong>Campaign Tracking:</strong> Measure the effectiveness of our marketing</li>
                <li><strong>Social Media:</strong> Enable sharing on social platforms</li>
                <li><strong>Retargeting:</strong> Show relevant ads on other websites</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              
              <p>We work with trusted third-party services that may set their own cookies:</p>
              
              <h3>Analytics Services</h3>
              <ul>
                <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li><strong>Mixpanel:</strong> Product analytics and user engagement tracking</li>
              </ul>

              <h3>Support Services</h3>
              <ul>
                <li><strong>Intercom:</strong> Customer support chat functionality</li>
                <li><strong>Zendesk:</strong> Help desk and ticket management</li>
              </ul>

              <h3>Infrastructure Services</h3>
              <ul>
                <li><strong>Cloudflare:</strong> Content delivery and security</li>
                <li><strong>AWS:</strong> Cloud hosting and data storage</li>
              </ul>

              <h2>Cookie Consent and Control</h2>
              
              <h3>Your Choices</h3>
              <p>You have several options for controlling cookies:</p>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-emerald-800 mb-4">Cookie Preference Center</h4>
                <p className="text-emerald-700 mb-4">Use our cookie preference center to:</p>
                <ul className="text-emerald-700 space-y-1">
                  <li>• Accept or reject different types of cookies</li>
                  <li>• Change your preferences at any time</li>
                  <li>• View detailed information about each cookie</li>
                  <li>• Understand the impact of your choices</li>
                </ul>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-4">
                  Manage Cookie Preferences
                </button>
              </div>

              <h3>Browser Settings</h3>
              <p>You can also control cookies through your browser settings:</p>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>

              <h3>Impact of Disabling Cookies</h3>
              <p>If you disable certain cookies, some features may not work properly:</p>
              <ul>
                <li>You may need to log in repeatedly</li>
                <li>Your preferences won't be saved</li>
                <li>Some features may be unavailable</li>
                <li>The platform may load more slowly</li>
              </ul>

              <h2>Cookie Retention</h2>
              
              <h3>Session Cookies</h3>
              <p>These cookies are temporary and are deleted when you close your browser:</p>
              <ul>
                <li>Authentication tokens</li>
                <li>Shopping cart contents</li>
                <li>Form data</li>
              </ul>

              <h3>Persistent Cookies</h3>
              <p>These cookies remain on your device for a specified period:</p>
              <ul>
                <li><strong>Remember Me:</strong> 30 days</li>
                <li><strong>Preferences:</strong> 1 year</li>
                <li><strong>Analytics:</strong> 2 years</li>
                <li><strong>Marketing:</strong> 90 days</li>
              </ul>

              <h2>Updates to This Policy</h2>
              
              <p>We may update this cookie policy from time to time to reflect:</p>
              <ul>
                <li>Changes in our cookie usage</li>
                <li>New features or services</li>
                <li>Legal or regulatory requirements</li>
                <li>Industry best practices</li>
              </ul>

              <p>When we make significant changes, we'll notify you through:</p>
              <ul>
                <li>A notice on our platform</li>
                <li>Email notification</li>
                <li>Updated consent banners</li>
              </ul>

              <h2>Contact Us</h2>
              
              <p>If you have questions about our use of cookies, please contact us:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-4">Privacy Team</h4>
                <p><strong>Email:</strong> privacy@vectorium.com</p>
                <p><strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>

              <h2>Additional Resources</h2>
              
              <p>For more information about cookies and online privacy:</p>
              <ul>
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Network Advertising Initiative</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}