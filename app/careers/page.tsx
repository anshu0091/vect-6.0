'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Coffee,
  Laptop,
  Plane,
  GraduationCap,
  DollarSign,
  Shield
} from 'lucide-react';

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead the development of our blockchain infrastructure and smart contracts for carbon credit tokenization.",
      requirements: ["5+ years blockchain development", "Solidity expertise", "Web3 experience"]
    },
    {
      id: 2,
      title: "Product Manager - Sustainability",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description: "Drive product strategy for our carbon marketplace and sustainability features.",
      requirements: ["3+ years product management", "Sustainability knowledge", "Data-driven mindset"]
    },
    {
      id: 3,
      title: "Climate Data Scientist",
      department: "Data Science",
      location: "Remote / London",
      type: "Full-time",
      description: "Analyze environmental data to verify carbon credit projects and improve our verification algorithms.",
      requirements: ["PhD in Environmental Science", "Python/R expertise", "Machine learning experience"]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Berlin",
      type: "Full-time",
      description: "Design intuitive user experiences for our carbon trading platform and mobile applications.",
      requirements: ["4+ years UX/UI design", "Figma proficiency", "Fintech experience preferred"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Toronto",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure with focus on security and scalability.",
      requirements: ["AWS/GCP expertise", "Kubernetes experience", "Security best practices"]
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Lead marketing campaigns to promote carbon credit awareness and platform adoption.",
      requirements: ["3+ years marketing", "Digital marketing expertise", "Climate tech interest"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Team working together"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Help us build the future of sustainable technology. Join a passionate team 
              working to combat climate change through innovative blockchain solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#culture"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-colors"
              >
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join Vectorium?
            </h2>
            <p className="text-lg text-gray-600">
              Be part of a team that's making a real difference in the fight against climate change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Work on technology that directly contributes to environmental sustainability 
                and climate change mitigation worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Tech</h3>
              <p className="text-gray-600">
                Work with the latest blockchain, AI, and cloud technologies in a fast-paced, 
                innovative environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Amazing Team</h3>
              <p className="text-gray-600">
                Collaborate with passionate, talented individuals from diverse backgrounds 
                who share your commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Vectorium, we believe that great work comes from great people working in an 
                environment where they can thrive. Our culture is built on transparency, 
                innovation, and a shared commitment to making the world more sustainable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Purpose-Driven</h4>
                    <p className="text-gray-600">
                      Every team member is united by our mission to combat climate change through technology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovation First</h4>
                    <p className="text-gray-600">
                      We encourage experimentation, learning from failures, and pushing boundaries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Collaborative</h4>
                    <p className="text-gray-600">
                      Open communication, cross-functional teamwork, and shared decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive benefits to support your health, growth, and work-life balance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Comprehensive health insurance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Mental health support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Wellness stipend
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Work Setup</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Top-tier equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Home office stipend
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Co-working space access
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Time Off</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Unlimited PTO
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Sabbatical program
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Flexible schedules
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Learning budget
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Conference attendance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Mentorship programs
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Competitive salary
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Equity participation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  401(k) matching
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Lifestyle</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Team retreats
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Catered meals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Social events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Join our growing team and help shape the future of sustainable technology
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-6">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors w-full lg:w-auto">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-gray-600">
              We've designed our process to be transparent, efficient, and respectful of your time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Application</h3>
              <p className="text-gray-600">
                Submit your application with resume and cover letter through our portal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Screening</h3>
              <p className="text-gray-600">
                Initial phone or video call to discuss your background and interest.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Interviews</h3>
              <p className="text-gray-600">
                Technical and cultural fit interviews with team members and leadership.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Offer</h3>
              <p className="text-gray-600">
                Reference checks and offer discussion with competitive compensation package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Join us in building technology that will help save our planet. Your skills and passion 
              can make a real impact in the fight against climate change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#openings"
                className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:careers@vectorium.com"
                className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact HR Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}