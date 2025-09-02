"use client";

import Header from "../../components/Header";
import {
  ScrollAnimatedElement,
  WigglyLine,
} from "../../components/ScrollAnimations";
import InteractiveButton from "../../components/InteractiveButton";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  const teams = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businesswoman%20CEO%20portrait%20in%20modern%20office%20setting%2C%20confident%20female%20executive%20in%20business%20attire%2C%20corporate%20headshot%20with%20blue%20background%2C%20technology%20company%20leader&width=300&height=400&seq=inreclead1&orientation=portrait",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20technology%20executive%20portrait%2C%20confident%20CTO%20in%20modern%20tech%20office%2C%20corporate%20headshot%20of%20asian%20businessman%20in%20blue%20professional%20setting&width=300&height=400&seq=inreclead2&orientation=portrait",
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Engineering",
      image:
        "https://readdy.ai/api/search-image?query=professional%20female%20engineer%20portrait%20in%20tech%20environment%2C%20confident%20woman%20engineering%20leader%2C%20corporate%20headshot%20with%20technical%20background%20in%20blue%20tones&width=300&height=400&seq=inreclead3&orientation=portrait",
    },
    {
      name: "David Thompson",
      position: "VP of Sales",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20sales%20executive%20portrait%2C%20confident%20business%20leader%20in%20corporate%20setting%2C%20VP%20headshot%20with%20modern%20office%20background%20in%20blue%20theme&width=300&height=400&seq=inreclead4&orientation=portrait",
    },
    {
      name: "Lisa Park",
      position: "Head of Operations",
      image:
        "https://readdy.ai/api/search-image?query=professional%20female%20operations%20executive%20portrait%2C%20confident%20asian%20businesswoman%20leader%2C%20corporate%20headshot%20in%20modern%20blue%20office%20environment&width=300&height=400&seq=inreclead5&orientation=portrait",
    },
    {
      name: "James Wilson",
      position: "Head of R&D",
      image:
        "https://readdy.ai/api/search-image?query=professional%20male%20research%20and%20development%20leader%20portrait%2C%20confident%20scientist%20in%20tech%20laboratory%20setting%2C%20corporate%20headshot%20with%20blue%20modern%20background&width=300&height=400&seq=inreclead6&orientation=portrait",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20company%20office%20with%20professional%20team%20working%20on%20drone%20development%2C%20clean%20minimalist%20workspace%20with%20blue%20and%20white%20design%2C%20innovative%20tech%20environment%20with%20advanced%20equipment%20and%20computers&width=1920&height=1080&seq=inrecabouthero&orientation=landscape')`,
          }}
        />

        <ScrollAnimatedElement animation="fade">
          <h1 className="text-3xl md:text-7xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About INREC
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <p className="text-2xl md:text-3xl text-center max-w-4xl leading-relaxed bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent drop-shadow-md">
            Pioneering the future of drone technology with innovation,
            precision, and excellence
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
                  We specialize in helping businesses design, develop, and modernize custom web and mobile applications tailored to their unique needs. We develop resilient, scalable, and feature-rich applications tailored for seamless performance across today’s leading platforms and devices.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
By harnessing the power of the latest technology stacks, we craft solutions that are secure, highly customizable, and easy to maintain over time. Our comprehensive application development services cover every stage—from initial consultation and development to testing, deployment, and continuous support—ensuring long-term value and sustainable success for your business.
Partner with us to future-proof your business with high-quality digital solutions that deliver measurable value and exceptional user experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
Our clients value us for our reliable budget and timeline management, transparent collaboration, and consistently high-quality service.
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
              Proud Microsoft Partner
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100 max-w-4xl mx-auto">
              As an official Microsoft partner, we leverage cutting-edge cloud technologies and enterprise solutions to deliver superior software and drone integration services
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400">
                <div className="mb-4">
                  <img src="/Azure.png" alt="Azure Cloud" className="w-28 h-20 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Azure Cloud Integration</h3>
                <p className="text-blue-100 text-sm">Scalable cloud solutions for data processing and analytics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400">
                <div className="mb-4">
                  <img src="/office365.png" alt="Office 365" className="w-24 h-20 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Office 365 Solutions</h3>
                <p className="text-blue-100 text-sm">Enterprise productivity and collaboration tools</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400">
                <div className="mb-4">
                  <img src="/powerplatforms.png" alt="Power Platform" className="w-20 h-20 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Power Platform</h3>
                <p className="text-blue-100 text-sm">Custom applications and business process automation</p>
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
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  To empower industries with innovative technology solutions
                  including drone capabilities and customized software that
                  enhance efficiency, safety, and productivity while driving
                  sustainable growth.
                </p>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={200}>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  To be the global leader in integrated technology solutions,
                  creating intelligent aerial and software systems that
                  transform how industries operate and connect with the world.
                </p>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={400}>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  💎
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Innovation, integrity, excellence, and sustainability guide
                  everything we do. We believe in pushing boundaries while
                  maintaining the highest ethical standards and quality.
                </p>
              </div>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>


      {/* Leadership Team */}
      <section hidden className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Leadership Team
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((member, index) => (
              <ScrollAnimatedElement
                key={index}
                animation="fade"
                delay={index * 150}
              >
                <div className="text-center bg-white/80 backdrop-blur-sm p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-40 object-cover object-top rounded-lg mx-auto mb-4 border-2 border-blue-200"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {member.name}
                  </h3>
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
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Enterprise Clients" },
              { number: "5+", label: "Countries Served" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <ScrollAnimatedElement
                key={index}
                animation="fade"
                delay={index * 200}
              >
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-blue-100">{stat.label}</div>
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
              Ready to be part of the drone technology revolution? Let's
              innovate together.
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <InteractiveButton>Contact Us</InteractiveButton>
              </Link>
              <Link href="/products">
                <InteractiveButton variant="secondary">
                  View Products
                </InteractiveButton>
              </Link>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
