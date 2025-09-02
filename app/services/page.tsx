
'use client';

import Header from '../../components/Header';
import { ScrollAnimatedElement, WigglyLine } from '../../components/ScrollAnimations';
import InteractiveButton from '../../components/InteractiveButton';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20drone%20services%20team%20working%20with%20advanced%20UAV%20technology%2C%20technical%20experts%20providing%20consultation%20and%20training%2C%20modern%20service%20center%20with%20blue%20lighting%20and%20professional%20equipment&width=1920&height=1080&seq=inrecserviceshero&orientation=landscape')`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-3xl md:text-7xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Services
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <p className="text-2xl md:text-3xl text-center max-w-4xl leading-relaxed bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent drop-shadow-md">
            Complete drone solutions from consultation to deployment and ongoing support
          </p>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* Software Development Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Software Development Services
            </h2>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[ 
              {
                title: "Custom Software Development",
                description: "Tailored software solutions built specifically for your business needs with Microsoft technology integration and Azure cloud deployment.",
                image: "https://readdy.ai/api/search-image?query=custom%20software%20development%20team%20working%20on%20business%20applications%2C%20modern%20programming%20environment%20with%20multiple%20monitors%2C%20professional%20developers%20coding%20with%20Microsoft%20technologies%20and%20blue%20lighting&width=600&height=400&seq=inrecustomdev&orientation=landscape",
                features: [
                  "Requirements analysis and system design",
                  "Microsoft technology stack integration",
                  "Azure cloud deployment and scaling",
                  "Office 365 and Teams integration",
                  "Power Platform development",
                  "Ongoing maintenance and support"
                ],
                pricing: "Starting at $25,000"
              },
              {
                title: "Business Management Systems",
                description: "Complete management solutions for educational institutions, healthcare facilities, and corporate enterprises with Microsoft partnership benefits.",
                image: "https://readdy.ai/api/search-image?query=business%20management%20software%20dashboard%20showing%20analytics%20and%20reporting%2C%20modern%20enterprise%20application%20interface%20with%20blue%20color%20scheme%2C%20professional%20management%20system%20with%20charts%20and%20data%20visualization&width=600&height=400&seq=inrecbusinessmgmt&orientation=landscape",
                features: [
                  "Time & Attendance Management",
                  "Canteen & Facility Management",
                  "Hostel & Accommodation Systems",
                  "Student Information Systems",
                  "Payroll and HR Management",
                  "Microsoft Office integration"
                ],
                pricing: "Starting at $15,000"
              }
            ].map((service, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 300}>
                <div className="h-full bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span hidden className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      <InteractiveButton>Get Quote</InteractiveButton>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Core Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Drone Technology Services
            </h2>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12">
            {[ 
              {
                title: "Drone Consultation & Strategy",
                description: "Expert guidance to develop the perfect drone solution strategy for your specific industry needs and operational requirements.",
                image: "https://readdy.ai/api/search-image?query=professional%20business%20consultation%20meeting%20with%20drone%20technology%20experts%2C%20modern%20conference%20room%20with%20UAV%20presentations%2C%20business%20strategy%20planning%20with%20blue%20corporate%20theme&width=600&height=400&seq=inrecconsult&orientation=landscape",
                features: [
                  "Needs assessment and feasibility analysis",
                  "ROI calculation and cost-benefit analysis",
                  "Regulatory compliance guidance",
                  "Custom solution design",
                  "Implementation roadmap development"
                ],
                pricing: "Starting at $2,500"
              },
              {
                title: "Professional Training Programs",
                description: "Comprehensive training programs to certify your team in professional drone operations, safety protocols, and advanced piloting techniques.",
                image: "https://readdy.ai/api/search-image?query=professional%20drone%20pilot%20training%20program%20with%20instructors%20and%20students%2C%20hands-on%20UAV%20training%20facility%20with%20flight%20simulators%2C%20aviation%20academy%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=inrectraining&orientation=landscape",
                features: [
                  "Part 107 commercial pilot certification",
                  "Advanced flight operations training",
                  "Safety and risk management protocols",
                  "Equipment maintenance and troubleshooting",
                  "Ongoing support and recertification"
                ],
                pricing: "Starting at $1,999"
              },
              {
                title: "Custom Solution Development",
                description: "Tailored drone solutions designed specifically for your unique operational challenges and industry-specific requirements.",
                image: "https://readdy.ai/api/search-image?query=custom%20drone%20development%20laboratory%20with%20engineers%20working%20on%20specialized%20UAV%20prototypes%2C%20high-tech%20R%26D%20facility%20with%20blue%20lighting%2C%20advanced%20aerospace%20engineering%20workspace&width=600&height=400&seq=inreccustom&orientation=landscape",
                features: [
                  "Custom hardware modifications",
                  "Specialized sensor integration",
                  "Software customization and development",
                  "Prototype testing and validation",
                  "Production and deployment support"
                ],
                pricing: "Starting at $15,000"
              },
              {
                title: "Maintenance & Support Services",
                description: "Comprehensive maintenance programs to ensure your drone fleet operates at peak performance with minimal downtime.",
                image: "https://readdy.ai/api/search-image?query=professional%20drone%20maintenance%20and%20repair%20service%20center%2C%20technicians%20working%20on%20UAV%20equipment%2C%20high-tech%20service%20facility%20with%20blue%20work%20stations%20and%20diagnostic%20equipment&width=600&height=400&seq=inrecmaintenance&orientation=landscape",
                features: [
                  "Preventive maintenance programs",
                  "Emergency repair services",
                  "Firmware and software updates",
                  "Performance monitoring and optimization",
                  "Parts replacement and upgrades"
                ],
                pricing: "Starting at $299/month"
              }
            ].map((service, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 300}>
                <div className="h-full bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span hidden className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      <InteractiveButton>Get Quote</InteractiveButton>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Industry-Specific Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Industry-Specific Solutions
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                industry: "Agriculture",
                icon: "🌾",
                services: [
                  "Crop health monitoring",
                  "Precision spraying services",
                  "Field mapping and analysis",
                  "Livestock monitoring",
                  "Irrigation management"
                ],
                image: "https://readdy.ai/api/search-image?query=agricultural%20drone%20services%20over%20farmland%20with%20crop%20monitoring%20sensors%2C%20precision%20agriculture%20UAV%20spraying%20crops%2C%20modern%20farming%20technology%20with%20green%20fields%20and%20blue%20sky&width=400&height=300&seq=inrecagriservice&orientation=landscape"
              },
              {
                industry: "Construction",
                icon: "🏗️",
                services: [
                  "Site surveying and mapping",
                  "Progress monitoring",
                  "Safety inspections",
                  "Volumetric calculations",
                  "3D modeling and BIM integration"
                ],
                image: "https://readdy.ai/api/search-image?query=construction%20site%20drone%20services%20with%20aerial%20surveying%2C%20UAV%20monitoring%20building%20progress%2C%20industrial%20construction%20mapping%20with%20safety%20equipment%20and%20blue%20hard%20hats&width=400&height=300&seq=inrecconstructservice&orientation=landscape"
              },
              {
                industry: "Energy & Utilities",
                icon: "⚡",
                services: [
                  "Power line inspections",
                  "Solar panel assessments",
                  "Wind turbine monitoring",
                  "Pipeline surveillance",
                  "Thermal anomaly detection"
                ],
                image: "https://readdy.ai/api/search-image?query=utility%20drone%20services%20inspecting%20power%20lines%20and%20solar%20panels%2C%20energy%20infrastructure%20monitoring%20with%20UAV%20technology%2C%20renewable%20energy%20facility%20inspection%20with%20blue%20sky%20background&width=400&height=300&seq=inrecenergyservice&orientation=landscape"
              },
              {
                industry: "Security & Surveillance",
                icon: "🛡️",
                services: [
                  "Perimeter monitoring",
                  "Event security coverage",
                  "Emergency response support",
                  "Asset protection",
                  "Threat detection and assessment"
                ],
                image: "https://readdy.ai/api/search-image?query=security%20drone%20services%20with%20surveillance%20cameras%2C%20professional%20security%20UAV%20monitoring%20facilities%2C%20safety%20and%20protection%20services%20with%20blue%20and%20white%20equipment&width=400&height=300&seq=inrecsecurityservice&orientation=landscape"
              },
              {
                industry: "Mining & Quarrying",
                icon: "⛏️",
                services: [
                  "Stockpile volume measurement",
                  "Pit progression monitoring",
                  "Environmental compliance",
                  "Equipment tracking",
                  "Safety zone monitoring"
                ],
                image: "https://readdy.ai/api/search-image?query=mining%20drone%20services%20over%20quarry%20operations%2C%20UAV%20surveying%20mining%20equipment%20and%20stockpiles%2C%20industrial%20mining%20monitoring%20with%20safety%20protocols%20and%20blue%20sky&width=400&height=300&seq=inrecminingservice&orientation=landscape"
              },
              {
                industry: "Real Estate",
                icon: "🏘️",
                services: [
                  "Aerial property photography",
                  "Virtual tour creation",
                  "Property inspections",
                  "Land development planning",
                  "Marketing content creation"
                ],
                image: "https://readdy.ai/api/search-image?query=real%20estate%20drone%20photography%20services%20capturing%20luxury%20properties%2C%20aerial%20view%20of%20modern%20houses%20and%20developments%2C%20professional%20property%20marketing%20with%20beautiful%20blue%20sky%20background&width=400&height=300&seq=increcrealestateservice&orientation=landscape"
              }
            ].map((solution, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg">
                  <img 
                    src={solution.image}
                    alt={solution.industry}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{solution.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800">{solution.industry}</h3>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {solution.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <InteractiveButton>Learn More</InteractiveButton>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Service Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Our Service Process
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                step: "01",
                title: "Initial Consultation",
                description: "We discuss your needs, assess requirements, and develop a customized solution proposal.",
                icon: "💭"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Our experts design the optimal drone solution tailored to your specific operational requirements.",
                icon: "📐"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional deployment of your drone solution with comprehensive training and support.",
                icon: "🚀"
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous monitoring, maintenance, and optimization to ensure peak performance.",
                icon: "🔧"
              }
            ].map((step, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 200}>
                <div className="h-full text-center p-6 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Get Started?
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100">
              Contact our experts today to discuss how INREC can transform your operations with cutting-edge drone solutions
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <InteractiveButton>Schedule Consultation</InteractiveButton>
              </Link>
              <Link href="/products">
                <InteractiveButton variant="secondary">View Products</InteractiveButton>
              </Link>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
