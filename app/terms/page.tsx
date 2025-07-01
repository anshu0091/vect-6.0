'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Legal documents"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Please read these terms carefully before using our platform. By using Vectorium, you agree to these terms and conditions.
            </p>
            <div className="text-sm text-emerald-200">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fair Terms</h3>
                <p className="text-gray-600">Clear and reasonable terms for all users</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">User Protection</h3>
                <p className="text-gray-600">Terms designed to protect your rights and interests</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">Plain language terms you can understand</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              
              <p>By accessing or using the Vectorium platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.</p>

              <h2>2. Description of Service</h2>
              
              <p>Vectorium is a blockchain-based platform that facilitates the trading of verified carbon credits. Our services include:</p>
              <ul>
                <li>Carbon credit marketplace</li>
                <li>Digital wallet for managing credits and funds</li>
                <li>Transaction processing and record keeping</li>
                <li>Impact tracking and reporting</li>
                <li>User account management</li>
              </ul>

              <h2>3. User Accounts</h2>
              
              <h3>Account Creation</h3>
              <p>To use our platform, you must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3>Account Security</h3>
              <p>You are responsible for:</p>
              <ul>
                <li>Keeping your password secure and confidential</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
                <li>All activities that occur under your account</li>
              </ul>

              <h2>4. Carbon Credit Trading</h2>
              
              <h3>Verification</h3>
              <p>All carbon credits on our platform are verified by recognized certification bodies. However:</p>
              <ul>
                <li>We do not guarantee the future value of carbon credits</li>
                <li>Market prices may fluctuate based on supply and demand</li>
                <li>You should conduct your own research before trading</li>
              </ul>

              <h3>Trading Rules</h3>
              <p>When trading carbon credits, you agree to:</p>
              <ul>
                <li>Provide accurate information about credits you sell</li>
                <li>Not engage in fraudulent or manipulative trading</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Accept the risks associated with trading</li>
              </ul>

              <h2>5. Wallet and Payments</h2>
              
              <h3>Virtual Wallet</h3>
              <p>Our platform provides a virtual wallet system for:</p>
              <ul>
                <li>Managing your carbon credit holdings</li>
                <li>Processing transactions</li>
                <li>Tracking your trading history</li>
                <li>Calculating environmental impact</li>
              </ul>

              <h3>Transaction Processing</h3>
              <p>All transactions are:</p>
              <ul>
                <li>Recorded on our blockchain for transparency</li>
                <li>Subject to network fees and processing times</li>
                <li>Final once confirmed on the blockchain</li>
                <li>Governed by smart contract terms</li>
              </ul>

              <h2>6. Prohibited Activities</h2>
              
              <p>You may not use our platform to:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Manipulate market prices or trading volumes</li>
                <li>Interfere with platform security or functionality</li>
                <li>Create multiple accounts to circumvent restrictions</li>
                <li>Use automated trading systems without permission</li>
                <li>Harass or abuse other users</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              
              <h3>Platform Content</h3>
              <p>The Vectorium platform and its content are protected by intellectual property laws. This includes:</p>
              <ul>
                <li>Software code and algorithms</li>
                <li>User interface design</li>
                <li>Logos, trademarks, and branding</li>
                <li>Documentation and educational materials</li>
              </ul>

              <h3>User Content</h3>
              <p>By using our platform, you grant us a license to:</p>
              <ul>
                <li>Display your trading activity (anonymized)</li>
                <li>Use aggregated data for analytics</li>
                <li>Share success stories (with permission)</li>
                <li>Improve our services based on usage patterns</li>
              </ul>

              <h2>8. Privacy and Data Protection</h2>
              
              <p>Your privacy is important to us. Please review our <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">Privacy Policy</Link> to understand how we collect, use, and protect your information.</p>

              <h2>9. Disclaimers and Limitations</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimers</h4>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Carbon credit trading involves financial risk</li>
                      <li>• Past performance does not guarantee future results</li>
                      <li>• We do not provide investment advice</li>
                      <li>• Platform availability is not guaranteed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Service Availability</h3>
              <p>We strive to maintain platform availability but cannot guarantee:</p>
              <ul>
                <li>Uninterrupted service access</li>
                <li>Error-free operation</li>
                <li>Compatibility with all devices</li>
                <li>Immediate customer support response</li>
              </ul>

              <h3>Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, Vectorium shall not be liable for:</p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from platform downtime</li>
                <li>Third-party actions or content</li>
              </ul>

              <h2>10. Indemnification</h2>
              
              <p>You agree to indemnify and hold harmless Vectorium and its affiliates from any claims, damages, or expenses arising from:</p>
              <ul>
                <li>Your use of the platform</li>
                <li>Violation of these terms</li>
                <li>Infringement of third-party rights</li>
                <li>Your trading activities</li>
              </ul>

              <h2>11. Termination</h2>
              
              <h3>Termination by You</h3>
              <p>You may terminate your account at any time by:</p>
              <ul>
                <li>Contacting our support team</li>
                <li>Following the account closure process</li>
                <li>Ensuring all pending transactions are completed</li>
              </ul>

              <h3>Termination by Us</h3>
              <p>We may terminate or suspend your account if you:</p>
              <ul>
                <li>Violate these terms of service</li>
                <li>Engage in prohibited activities</li>
                <li>Fail to respond to security concerns</li>
                <li>Request account closure</li>
              </ul>

              <h2>12. Governing Law</h2>
              
              <p>These terms are governed by the laws of the State of California, United States. Any disputes will be resolved through:</p>
              <ul>
                <li>Good faith negotiation</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration as a last resort</li>
                <li>California state courts for certain matters</li>
              </ul>

              <h2>13. Changes to Terms</h2>
              
              <p>We may update these terms from time to time. When we do:</p>
              <ul>
                <li>We'll post the updated terms on our platform</li>
                <li>We'll notify you of significant changes</li>
                <li>Continued use constitutes acceptance</li>
                <li>You can review the change history</li>
              </ul>

              <h2>14. Contact Information</h2>
              
              <p>If you have questions about these terms, please contact us:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-4">Legal Department</h4>
                <p><strong>Email:</strong> legal@vectorium.com</p>
                <p><strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>

              <h2>15. Severability</h2>
              
              <p>If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. We will replace any unenforceable provision with a valid provision that most closely reflects our original intent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}