
'use client';

import Header from '../../components/Header';
import AnimatedEyes from '../../components/AnimatedEyes';
import { ScrollAnimatedElement, WigglyLine } from '../../components/ScrollAnimations';
import InteractiveButton from '../../components/InteractiveButton';
import Link from 'next/link';
import InquiryForm from './contactForm';
import FAQSection from './faq';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section with Eyes */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20company%20contact%20center%20with%20professional%20customer%20service%20team%2C%20clean%20office%20environment%20with%20blue%20lighting%2C%20communication%20and%20support%20facility%20with%20advanced%20equipment&width=1920&height=1080&seq=inreccontacthero&orientation=landscape')`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <AnimatedEyes />
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={600}>
          <p className="text-xl md:text-2xl text-center max-w-4xl mt-8 leading-relaxed text-gray-600">
            Ready to transform your operations with cutting-edge drone technology and customized software solutions? Let's start the conversation.
          </p>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Get In Touch
            </h2>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollAnimatedElement animation="fade">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Discuss Your Project</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Whether you need drone solutions, custom software development, or Microsoft integration services, our experts are here to help you find the perfect technology for your needs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As a Microsoft partner, we offer additional benefits including Azure cloud integration, Office 365 connectivity, and Power Platform development. Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Headquarters</h4>
                      <p className="text-gray-600">Domkol Bazar, Murshidabad, West Bengal, India - 742303</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 9830029529</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@inrec.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Business Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={200}>
              {/* <form 
                id="contact-form"
                className="space-y-6 bg-white/90 backdrop-blur-sm p-8 border-2 border-blue-200 rounded-lg shadow-lg"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    company: formData.get('company'),
                    phone: formData.get('phone'),
                    service: formData.get('service'),
                    budget: formData.get('budget'),
                    message: formData.get('message')
                  };
                  fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(data as any).toString(),
                  })
                  .then(response => response.json())
                  .then(result => {
                    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
                    (e.target as HTMLFormElement).reset();
                  })
                  .catch(error => {
                    alert('There was an error sending your message. Please try again or contact us directly.');
                  });
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm pr-8 rounded-lg bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="software-development">Custom Software Development</option>
                      <option value="microsoft-solutions">Microsoft Solutions & Integration</option>
                      <option value="drone-consultation">Drone Consultation & Strategy</option>
                      <option value="training">Training Programs</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="time-attendance">Time & Attendance System</option>
                      <option value="canteen-management">Canteen Management</option>
                      <option value="hostel-management">Hostel Management</option>
                      <option value="drone-purchase">Drone Purchase</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm pr-8 rounded-lg bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 focus:border-blue-400 outline-none transition-colors text-sm resize-none rounded-lg bg-white/80 backdrop-blur-sm"
                    placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1">Maximum 500 characters</div>
                </div>
                
                <InteractiveButton type="submit">Send Message</InteractiveButton>
              </form> */}
              <InquiryForm/>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Office Locations */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Our Locations
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[ 
              {
                city: "Tech City Headquarters",
                address: "Domkol Bazar, Murshidabad, West Bengal, India - 742303",
                phone: "+91-9830029529",
                email: "info@inrec.com",
                image: "https://readdy.ai/api/search-image?query=modern%20corporate%20headquarters%20building%20with%20glass%20facade%20and%20blue%20accents%2C%20professional%20technology%20company%20office%20building%2C%20contemporary%20architecture%20with%20clean%20lines&width=400&height=300&seq=inrechq&orientation=landscape"
              },
              {
                city: "Office 2",
                address: "Comming soon...",
                phone: "Comming soon...",
                email: "info@inrec.com",
                image: "https://readdy.ai/api/search-image?query=modern%20office%20building%20in%20San%20Francisco%20with%20contemporary%20design%2C%20professional%20tech%20company%20facility%20on%20west%20coast%2C%20sleek%20architecture%20with%20blue%20and%20white%20elements&width=400&height=300&seq=inrecwest&orientation=landscape"
              },
              {
                city: "Office 3",
                address: "Comming soon...",
                phone: "Comming soon...",
                email: "info@inrec.com",
                image: "https://readdy.ai/api/search-image?query=modern%20European%20office%20building%20in%20London%20with%20professional%20design%2C%20contemporary%20corporate%20facility%2C%20international%20business%20center%20with%20blue%20corporate%20theme&width=400&height=300&seq=inreceurope&orientation=landscape"
              }
            ].map((location, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 200}>
                <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={location.image}
                    alt={location.city}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{location.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">📍</span>
                        <div>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{location.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">📞</span>
                        <p className="text-gray-600 text-sm">{location.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">✉️</span>
                        <p className="text-gray-600 text-sm">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>

          {/* Map */}
          <ScrollAnimatedElement animation="fade" delay={600}>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Domkol%20Bazar%2C%20Murshidabad%2C%20West%20Bengal%2C%20India%20-%20742303&t=m&z=12&output=embed&iwloc=near"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="INREC Locations"
              ></iframe>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      <WigglyLine />

      {/* FAQ Section */}
      <FAQSection/>

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
              Don't wait to transform your operations. Contact us today for a free consultation.
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
              <InteractiveButton>Schedule Consultation</InteractiveButton>
              <Link href="/services">
                <InteractiveButton variant="secondary">View Services</InteractiveButton>
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
