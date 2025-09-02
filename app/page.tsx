
'use client';

import Header from '../components/Header';
import { ScrollAnimatedElement, WigglyLine } from '../components/ScrollAnimations';
import InteractiveButton from '../components/InteractiveButton';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const [slideOrder, setSlideOrder] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [slidePosition, setSlidePosition] = useState(0);

  // Original slides
  const bgSlides = [
    "https://readdy.ai/api/search-image?query=modern%20technology%20company%20contact%20center%20with%20professional%20customer%20service%20team%2C%20clean%20office%20environment%20with%20blue%20lighting%2C%20communication%20and%20support%20facility%20with%20advanced%20equipment&width=1920&height=1080&seq=inreccontacthero&orientation=landscape",
    "https://readdy.ai/api/search-image?query=advanced%20drone%20flying%20in%20modern%20tech%20environment%20with%20blue%20sky%20background%2C%20professional%20UAV%20technology%2C%20futuristic%20aerial%20vehicle%20with%20sleek%20design%2C%20high-tech%20industrial%20setting%20with%20clean%20minimalist%20aesthetic&width=1920&height=1080&seq=inrechero1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=collection%20of%20professional%20drones%20and%20UAV%20products%20displayed%20in%20modern%20tech%20showroom%20with%20software%20development%20screens%2C%20various%20drone%20models%20with%20blue%20lighting%20and%20computer%20monitors%20showing%20software%20interfaces%2C%20cutting-edge%20technology%20showcase&width=1920&height=1080&seq=inrecproductshero2&orientation=landscape",
  ];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rotateSlides = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlidePosition(-100); // Start slide animation

    // After animation completes
    setTimeout(() => {
      // Rotate the order array by moving first element to the end
      setSlideOrder(current => {
        const newOrder = [...current.slice(1), current[0]];
        return newOrder;
      });
      setSlidePosition(0); // Reset position without animation
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  useEffect(() => {
    intervalRef.current = setInterval(rotateSlides, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [rotateSlides]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="relative w-full h-full"
          style={{
            transform: `translateX(${slidePosition}%)`,
            transition: isAnimating ? 'transform 1000ms ease-out' : 'none'
          }}
        >
          {slideOrder.map((index: number, i: number) => (
            <div
              key={`slide-${index}`}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: 0.85,
                backgroundImage: `url('${bgSlides[index]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateX(${i * 100}%) translateY(${scrollY * 0.5}px)`,
                pointerEvents: "none",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        {/* Slide 1 */}
        {slideOrder[0] === 0 && (
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimatedElement animation="fade">
                <h1 className="text-3xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
                  Inrec
                </h1>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={300}>
                <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-white drop-shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">
                  From Code to Sky
                </h2>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={600}>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed text-white drop-shadow-md">
                  Leading the future with cutting-edge drone technologies
                </p>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={900}>
                <div className="flex gap-6 mt-12 justify-center">
                  <Link href="/products">
                    <InteractiveButton>
                      Explore Products
                    </InteractiveButton>
                  </Link>
                  <Link href="/contact">
                    <InteractiveButton variant="secondary">
                      Get In Touch
                    </InteractiveButton>
                  </Link>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        )}

        {/* Slide 2 */}
        {slideOrder[0] === 1 && (
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimatedElement animation="fade">
                <h1 className="text-3xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
                  Innovation
                </h1>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={300}>
                <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-white drop-shadow-md">
                  Advanced UAV Solutions
                </h2>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={600}>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed text-white drop-shadow-md">
                  Experience the next generation of drone technology
                </p>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={900}>
                <div className="flex gap-6 mt-12 justify-center">
                  <Link href="/services">
                    <InteractiveButton>
                      Our Services
                    </InteractiveButton>
                  </Link>
                  <Link href="/products">
                    <InteractiveButton variant="secondary">
                      View Drones
                    </InteractiveButton>
                  </Link>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        )}

        {/* Slide 3 */}
        {slideOrder[0] === 2 && (
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimatedElement animation="fade">
                <h1 className="text-3xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text">
                  Solutions
                </h1>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={300}>
                <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-white drop-shadow-md">
                  Custom Software Development
                </h2>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={600}>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed text-white drop-shadow-md">
                  Tailored software solutions for your business needs
                </p>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="fade" delay={900}>
                <div className="flex gap-6 mt-12 justify-center">
                  <Link href="/contact">
                    <InteractiveButton>
                      Start Project
                    </InteractiveButton>
                  </Link>
                  <Link href="/services">
                    <InteractiveButton variant="secondary">
                      Learn More
                    </InteractiveButton>
                  </Link>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        )}
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

      {/* Software Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Customized Software Solutions
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Professional business management systems built for your specific needs
            </p>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Time & Attendance Management",
                status: "Available",
                icon: "⏰",
                image: "https://readdy.ai/api/search-image?query=modern%20time%20attendance%20management%20software%20interface%20on%20computer%20screen%2C%20employee%20check-in%20system%20with%20biometric%20scanner%20and%20digital%20clock%2C%20professional%20business%20software%20with%20blue%20color%20scheme&width=300&height=200&seq=timeattendancehome&orientation=landscape",
                description: "Complete employee attendance tracking with biometric integration"
              },
              {
                name: "Canteen Management Solution",
                status: "Available",
                icon: "🍽️",
                image: "https://readdy.ai/api/search-image?query=digital%20canteen%20management%20system%20interface%20showing%20meal%20planning%2C%20inventory%20tracking%20and%20payment%20processing%2C%20modern%20cafeteria%20software%20with%20blue%20and%20white%20design&width=300&height=200&seq=canteenhome&orientation=landscape",
                description: "End-to-end cafeteria operations management solution"
              },
              {
                name: "Hostel Management Solution",
                status: "Available", 
                icon: "🏠",
                image: "https://readdy.ai/api/search-image?query=hostel%20management%20software%20dashboard%20showing%20room%20allocation%2C%20student%20records%20and%20fee%20management%2C%20dormitory%20administration%20system%20with%20modern%20blue%20interface&width=300&height=200&seq=hostelhome&orientation=landscape",
                description: "Complete management for educational institutions"
              },
              {
                name: "Customized Research & Solutions",
                status: "Available",
                icon: "⚙️",
                image: "https://readdy.ai/api/search-image?query=custom%20software%20development%20process%20showing%20coding%20screens%2C%20project%20planning%20boards%20and%20system%20architecture%20diagrams%2C%20bespoke%20software%20solutions%20with%20modern%20development%20environment&width=300&height=200&seq=customhome&orientation=landscape",
                description: "Tailored software built specifically for your business needs"
              }
            ].map((solution, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="bg-white/90 backdrop-blur-sm p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer rounded-lg shadow-lg hover:shadow-xl">
                  <img 
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-32 object-cover object-top rounded-lg mb-4"
                  />
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 text-center">
                    {solution.icon}
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{solution.name}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {solution.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Technology Overview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Advanced Drone Technologies
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                icon: "🚁",
                title: "Professional UAVs",
                description: "High-performance unmanned aerial vehicles designed for commercial and industrial applications",
                image: "https://readdy.ai/api/search-image?query=professional%20commercial%20drone%20UAV%20with%20advanced%20camera%20system%2C%20sleek%20black%20design%20flying%20in%20clear%20blue%20sky%2C%20industrial%20grade%20quadcopter%20with%20high-tech%20sensors%20and%20equipment&width=400&height=300&seq=inrectech1&orientation=landscape"
              },
              {
                icon: "📡",
                title: "Smart Sensors",
                description: "Cutting-edge sensor technology for precision data collection and real-time monitoring",
                image: "https://readdy.ai/api/search-image?query=advanced%20drone%20sensors%20and%20electronic%20components%2C%20high-tech%20surveillance%20equipment%2C%20precision%20instruments%20with%20blue%20LED%20lights%2C%20modern%20aerospace%20technology%20close-up&width=400&height=300&seq=inrectech2&orientation=landscape"
              },
              {
                icon: "🌐",
                title: "AI Integration",
                description: "Artificial intelligence powered flight systems and autonomous navigation capabilities",
                image: "https://readdy.ai/api/search-image?query=futuristic%20AI%20control%20interface%20for%20drone%20technology%2C%20digital%20dashboard%20with%20blue%20holographic%20displays%2C%20advanced%20flight%20control%20systems%2C%20modern%20tech%20command%20center&width=400&height=300&seq=inrectech3&orientation=landscape"
              }
            ].map((tech, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 200}>
                <div className="bg-white/80 backdrop-blur-sm p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group cursor-pointer rounded-lg shadow-lg hover:shadow-xl">
                  <div className="mb-6">
                    <img 
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-48 object-cover object-top rounded-lg mb-4"
                    />
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Industries We Serve Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Our innovative solutions are transforming operations across multiple sectors
            </p>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Education",
                icon: "🎓",
                description: "Student management and institutional solutions",
                image: "https://readdy.ai/api/search-image?query=modern%20educational%20institution%20with%20students%20using%20technology%2C%20digital%20learning%20environment%20with%20tablets%20and%20computers%2C%20school%20campus%20with%20blue%20and%20white%20architecture&width=300&height=200&seq=inreceducation&orientation=landscape"
              },
              {
                title: "Healthcare",
                icon: "🏥",
                description: "Hospital and clinic management systems",
                image: "https://readdy.ai/api/search-image?query=modern%20healthcare%20facility%20with%20digital%20management%20systems%2C%20hospital%20administration%20software%20on%20computers%2C%20medical%20technology%20in%20clean%20blue%20and%20white%20environment&width=300&height=200&seq=inrechealthcare&orientation=landscape"
              },
              {
                title: "Agriculture",
                icon: "🌾",
                description: "Precision farming and crop monitoring",
                image: "https://readdy.ai/api/search-image?query=drone%20flying%20over%20agricultural%20farmland%2C%20precision%20agriculture%20technology%20monitoring%20crops%2C%20green%20fields%20with%20advanced%20UAV%20surveying%2C%20modern%20farming%20with%20drone%20technology&width=300&height=200&seq=inrecagri1&orientation=landscape"
              },
              {
                title: "Construction",
                icon: "🏗️",
                description: "Site surveying and progress monitoring",
                image: "https://readdy.ai/api/search-image?query=construction%20site%20aerial%20view%20with%20drone%20surveying%20building%20progress%2C%20industrial%20construction%20monitoring%2C%20modern%20building%20development%20with%20UAV%20technology%2C%20professional%20site%20inspection&width=300&height=200&seq=inrecconst1&orientation=landscape"
              }
            ].map((industry, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="bg-white/90 backdrop-blur-sm p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer rounded-lg shadow-lg hover:shadow-xl">
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-32 object-cover object-top rounded-lg mb-4"
                  />
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 text-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{industry.title}</h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{industry.description}</p>
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
              Ready to Transform Your Operations?
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100">
              Discover how INREC's innovative technology solutions can elevate your business to new heights
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/services">
                <InteractiveButton>View Services</InteractiveButton>
              </Link>
              <Link href="/about">
                <InteractiveButton variant="secondary">Learn More</InteractiveButton>
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
