'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  CheckCircle, 
  AlertTriangle,
  Key,
  Database,
  Globe,
  ArrowRight,
  FileCheck,
  Users,
  Zap
} from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
            alt="Security and protection"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security & Trust
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your security is our top priority. Learn how we protect your data, 
              transactions, and investments with enterprise-grade security measures.
            </p>
            <Link
              href="/auth/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Start Secure Trading <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-gray-600">
              We implement multiple layers of security to protect your assets and ensure the integrity 
              of every transaction on our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Security</h3>
              <p className="text-gray-600">
                Immutable ledger technology ensures all transactions are permanent and tamper-proof.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">End-to-End Encryption</h3>
              <p className="text-gray-600">
                All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring and threat detection to identify and prevent security incidents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Infrastructure</h3>
              <p className="text-gray-600">
                Cloud infrastructure with multiple redundancies and disaster recovery capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Security */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical Security Measures
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is built with security-first principles, implementing multiple layers 
                of protection to safeguard your digital assets and personal information.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Key className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Multi-Signature Wallets</h4>
                    <p className="text-gray-600">
                      Critical transactions require multiple cryptographic signatures, preventing 
                      unauthorized access even if one key is compromised.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Database className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Secure Data Storage</h4>
                    <p className="text-gray-600">
                      All sensitive data is encrypted and stored in geographically distributed 
                      data centers with strict access controls.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">DDoS Protection</h4>
                    <p className="text-gray-600">
                      Advanced DDoS mitigation and traffic filtering to ensure platform 
                      availability during attacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
                alt="Technical security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              We adhere to the highest industry standards and maintain certifications 
              from leading security organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">SOC 2 Type II</h3>
              <p className="text-gray-600 mb-4">
                Independently audited for security, availability, processing integrity, 
                confidentiality, and privacy.
              </p>
              <div className="text-sm text-emerald-600 font-medium">Certified</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ISO 27001</h3>
              <p className="text-gray-600 mb-4">
                International standard for information security management systems, 
                ensuring systematic security controls.
              </p>
              <div className="text-sm text-emerald-600 font-medium">Certified</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">GDPR Compliant</h3>
              <p className="text-gray-600 mb-4">
                Full compliance with European data protection regulations, 
                ensuring user privacy and data rights.
              </p>
              <div className="text-sm text-emerald-600 font-medium">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Security Features
            </h2>
            <p className="text-lg text-emerald-100">
              Comprehensive security measures designed to protect every aspect of your experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Authentication & Access Control</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Two-factor authentication (2FA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Biometric authentication support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Role-based access controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Session timeout protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Device fingerprinting</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Transaction Security</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Smart contract audits</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Real-time fraud detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Transaction limits and controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Automated risk assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Immutable audit trails</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Data Protection</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>AES-256 encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Zero-knowledge architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Regular security audits</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Data anonymization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Secure key management</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Infrastructure Security</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Multi-region redundancy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Automated backups</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Intrusion detection systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Network segmentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Disaster recovery planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
                alt="Security best practices"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Role in Security
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                While we provide enterprise-grade security, your actions also play a crucial role 
                in keeping your account safe. Follow these best practices to maximize your security.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Use Strong Passwords</h4>
                    <p className="text-gray-600">Create unique, complex passwords and enable two-factor authentication</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Keep Software Updated</h4>
                    <p className="text-gray-600">Regularly update your browser and operating system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Verify URLs</h4>
                    <p className="text-gray-600">Always check that you're on the official Vectorium website</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Monitor Your Account</h4>
                    <p className="text-gray-600">Regularly review your transaction history and account activity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Incident Response */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Incident Response
            </h2>
            <p className="text-lg text-gray-600">
              Our dedicated security team is ready to respond to any potential threats 
              with proven incident response procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Detection</h3>
              <p className="text-gray-600">
                Automated systems and security experts monitor for threats 24/7
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Response</h3>
              <p className="text-gray-600">
                Immediate containment and mitigation of identified security incidents
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Investigation</h3>
              <p className="text-gray-600">
                Thorough analysis to understand the scope and impact of incidents
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Recovery</h3>
              <p className="text-gray-600">
                Swift restoration of services and implementation of preventive measures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security Questions or Concerns?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our security team is here to help. If you have questions about our security measures 
              or need to report a potential security issue, don't hesitate to reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:security@vectorium.com"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Contact Security Team <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/how-it-works"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}