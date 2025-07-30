
'use client';

import Header from '../../components/Header';
import { ScrollAnimatedElement, WigglyLine } from '../../components/ScrollAnimations';
import InteractiveButton from '../../components/InteractiveButton';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20company%20office%20with%20professional%20team%20working%20on%20drone%20development%2C%20clean%20minimalist%20workspace%20with%20blue%20and%20white%20design%2C%20innovative%20tech%20environment%20with%20advanced%20equipment%20and%20computers&width=1920&height=1080&seq=inrecabouthero&orientation=landscape')`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About INREC
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <p className="text-2xl md:text-3xl text-center max-w-4xl leading-relaxed text-gray-600">
            Pioneering the future of drone technology with innovation, precision, and excellence
          </p>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* Company Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Our Story
            </h2>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimatedElement animation="fade">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Founded in 2018, INREC emerged from a vision to revolutionize industries through cutting-edge drone technology and customized software solutions. Our journey began with a small team of passionate engineers and innovators who believed in the transformative power of technology.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Today, we stand as a leading provider of innovative technology solutions, serving clients across education, healthcare, agriculture, construction, and enterprise sectors. As a proud Microsoft partner, we leverage world-class cloud and enterprise technologies to deliver superior solutions.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  With over 500 successful projects completed and partnerships with Fortune 500 companies, INREC continues to push the boundaries of what's possible with both software development and drone technology.
                </p>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={200}>
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20technology%20company%20team%20photo%20with%20diverse%20engineers%20and%20developers%2C%20modern%20office%20setting%20with%20drone%20prototypes%20and%20tech%20equipment%2C%20corporate%20group%20portrait%20in%20clean%20blue%20and%20white%20environment&width=600&height=400&seq=inrecteam1&orientation=landscape"
                alt="INREC Team"
                className="w-full h-96 object-cover object-top rounded-lg border-4 border-blue-200 shadow-lg"
              />
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Microsoft Partnership Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Microsoft Partnership Excellence
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100 max-w-4xl mx-auto">
              Our strategic partnership with Microsoft enables us to deliver enterprise-grade solutions with Azure cloud integration, Office 365 productivity tools, and Power Platform automation
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-blue-400">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Azure Cloud</h3>
                <p className="text-blue-100">Scalable cloud infrastructure for data processing, analytics, and enterprise applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-blue-400">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
                <p className="text-blue-100">Office 365, Teams, and SharePoint integration for enhanced productivity</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-blue-400">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Power Platform</h3>
                <p className="text-blue-100">Custom applications, process automation, and business intelligence solutions</p>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      <WigglyLine />

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <ScrollAnimatedElement animation="fade">
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower industries with innovative technology solutions including drone capabilities and customized software that enhance efficiency, safety, and productivity while driving sustainable growth.
                </p>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={200}>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in integrated technology solutions, creating intelligent aerial and software systems that transform how industries operate and connect with the world.
                </p>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={400}>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  💎
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, integrity, excellence, and sustainability guide everything we do. We believe in pushing boundaries while maintaining the highest ethical standards and quality.
                </p>
              </div>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Leadership Team
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                name: "Sarah Johnson",
                position: "CEO & Founder",
                image: "https://readdy.ai/api/search-image?query=professional%20businesswoman%20CEO%20portrait%20in%20modern%20office%20setting%2C%20confident%20female%20executive%20in%20business%20attire%2C%20corporate%20headshot%20with%20blue%20background%2C%20technology%20company%20leader&width=300&height=400&seq=inreclead1&orientation=portrait"
              },
              {
                name: "Michael Chen",
                position: "CTO",
                image: "https://readdy.ai/api/search-image?query=professional%20male%20technology%20executive%20portrait%2C%20confident%20CTO%20in%20modern%20tech%20office%2C%20corporate%20headshot%20of%20asian%20businessman%20in%20blue%20professional%20setting&width=300&height=400&seq=inreclead2&orientation=portrait"
              },
              {
                name: "Emily Rodriguez",
                position: "Head of Engineering",
                image: "https://readdy.ai/api/search-image?query=professional%20female%20engineer%20portrait%20in%20tech%20environment%2C%20confident%20woman%20engineering%20leader%2C%20corporate%20headshot%20with%20technical%20background%20in%20blue%20tones&width=300&height=400&seq=inreclead3&orientation=portrait"
              },
              {
                name: "David Thompson",
                position: "VP of Sales",
                image: "https://readdy.ai/api/search-image?query=professional%20male%20sales%20executive%20portrait%2C%20confident%20business%20leader%20in%20corporate%20setting%2C%20VP%20headshot%20with%20modern%20office%20background%20in%20blue%20theme&width=300&height=400&seq=inreclead4&orientation=portrait"
              },
              {
                name: "Lisa Park",
                position: "Head of Operations",
                image: "https://readdy.ai/api/search-image?query=professional%20female%20operations%20executive%20portrait%2C%20confident%20asian%20businesswoman%20leader%2C%20corporate%20headshot%20in%20modern%20blue%20office%20environment&width=300&height=400&seq=inreclead5&orientation=portrait"
              },
              {
                name: "James Wilson",
                position: "Head of R&D",
                image: "https://readdy.ai/api/search-image?query=professional%20male%20research%20and%20development%20leader%20portrait%2C%20confident%20scientist%20in%20tech%20laboratory%20setting%2C%20corporate%20headshot%20with%20blue%20modern%20background&width=300&height=400&seq=inreclead6&orientation=portrait"
              }
            ].map((member, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="text-center bg-white/80 backdrop-blur-sm p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-40 object-cover object-top rounded-lg mx-auto mb-4 border-2 border-blue-200"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Company Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Our Impact
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Enterprise Clients" },
              { number: "25+", label: "Countries Served" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 200}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-blue-100">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              Join Our Journey
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-600">
              Ready to be part of the drone technology revolution? Let's innovate together.
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <InteractiveButton>Contact Us</InteractiveButton>
              </Link>
              <Link href="/products">
                <InteractiveButton variant="secondary">View Products</InteractiveButton>
              </Link>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-blue-200 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-pacifico text-blue-600 mb-4">INREC</h3>
              <p className="text-gray-600">Innovative Technology Solutions</p>
              <p className="text-sm text-blue-600 mt-2">Microsoft Partner</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-600 hover:text-blue-600 cursor-pointer">Home</Link>
                <Link href="/about" className="block text-gray-600 hover:text-blue-600 cursor-pointer">About</Link>
                <Link href="/products" className="block text-gray-600 hover:text-blue-600 cursor-pointer">Products</Link>
                <Link href="/services" className="block text-gray-600 hover:text-blue-600 cursor-pointer">Services</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Solutions</h4>
              <div className="space-y-2">
                <p className="text-gray-600">Software Development</p>
                <p className="text-gray-600">Drone Technology</p>
                <p className="text-gray-600">Microsoft Solutions</p>
                <p className="text-gray-600">Custom Development</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-gray-600 hover:text-blue-600 cursor-pointer">Get in Touch</Link>
                <Link href="/blogs" className="block text-gray-600 hover:text-blue-600 cursor-pointer">Blog</Link>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600"> 2024 INREC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
