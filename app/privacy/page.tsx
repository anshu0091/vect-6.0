'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Shield, Eye, Lock, Users, FileText, ArrowRight } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
            alt="Privacy and security"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-emerald-200">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                <p className="text-gray-600">We use industry-standard encryption to protect your data</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">Clear information about what data we collect and why</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                <p className="text-gray-600">You have control over your personal information</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>When you create an account, we collect:</p>
              <ul>
                <li>Email address</li>
                <li>Name (optional)</li>
                <li>Profile information you choose to provide</li>
              </ul>

              <h3>Transaction Data</h3>
              <p>When you use our platform, we collect:</p>
              <ul>
                <li>Carbon credit purchase and sale history</li>
                <li>Wallet balance and transaction records</li>
                <li>Trading preferences and settings</li>
              </ul>

              <h3>Technical Information</h3>
              <p>We automatically collect:</p>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage patterns and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              
              <p>We use your information to:</p>
              <ul>
                <li><strong>Provide our services:</strong> Process transactions, maintain your account, and deliver platform features</li>
                <li><strong>Improve our platform:</strong> Analyze usage patterns to enhance user experience and develop new features</li>
                <li><strong>Communicate with you:</strong> Send important updates, security alerts, and customer support responses</li>
                <li><strong>Ensure security:</strong> Detect and prevent fraud, abuse, and security threats</li>
                <li><strong>Comply with legal obligations:</strong> Meet regulatory requirements and legal requests</li>
              </ul>

              <h2>3. Information Sharing</h2>
              
              <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
              
              <h3>Service Providers</h3>
              <p>We work with trusted third-party service providers who help us operate our platform, including:</p>
              <ul>
                <li>Cloud hosting and database services</li>
                <li>Payment processing partners</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support tools</li>
              </ul>

              <h3>Legal Requirements</h3>
              <p>We may disclose your information when required by law or to:</p>
              <ul>
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Investigate potential violations of our terms</li>
                <li>Prevent fraud or security threats</li>
              </ul>

              <h2>4. Data Security</h2>
              
              <p>We implement comprehensive security measures to protect your information:</p>
              
              <h3>Encryption</h3>
              <ul>
                <li>All data is encrypted in transit using TLS 1.3</li>
                <li>Sensitive data is encrypted at rest using AES-256</li>
                <li>Database connections use encrypted channels</li>
              </ul>

              <h3>Access Controls</h3>
              <ul>
                <li>Multi-factor authentication for admin access</li>
                <li>Role-based access controls</li>
                <li>Regular access reviews and audits</li>
              </ul>

              <h3>Monitoring</h3>
              <ul>
                <li>24/7 security monitoring and alerting</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Incident response procedures</li>
              </ul>

              <h2>5. Your Privacy Rights</h2>
              
              <p>You have the following rights regarding your personal information:</p>
              
              <h3>Access and Portability</h3>
              <ul>
                <li>Request a copy of your personal data</li>
                <li>Export your transaction history and account data</li>
                <li>Receive data in a machine-readable format</li>
              </ul>

              <h3>Correction and Updates</h3>
              <ul>
                <li>Update your profile information at any time</li>
                <li>Correct inaccurate personal data</li>
                <li>Request updates to outdated information</li>
              </ul>

              <h3>Deletion</h3>
              <ul>
                <li>Delete your account and associated data</li>
                <li>Request removal of specific information</li>
                <li>Right to be forgotten (where legally applicable)</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized experiences</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <p>You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.</p>

              <h2>7. International Transfers</h2>
              
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:</p>
              <ul>
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>

              <h2>8. Data Retention</h2>
              
              <p>We retain your information for as long as necessary to:</p>
              <ul>
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain security and prevent fraud</li>
              </ul>

              <p>When data is no longer needed, we securely delete or anonymize it.</p>

              <h2>9. Children's Privacy</h2>
              
              <p>Our platform is not intended for children under 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.</p>

              <h2>10. Changes to This Policy</h2>
              
              <p>We may update this privacy policy from time to time. When we make changes, we will:</p>
              <ul>
                <li>Post the updated policy on our website</li>
                <li>Update the "last modified" date</li>
                <li>Notify you of significant changes via email or platform notification</li>
                <li>Provide a summary of key changes</li>
              </ul>

              <h2>11. Contact Us</h2>
              
              <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-4">Privacy Officer</h4>
                <p><strong>Email:</strong> privacy@vectorium.com</p>
                <p><strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}