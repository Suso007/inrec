
'use client';

import Header from '../../components/Header';
import { ScrollAnimatedElement, WigglyLine } from '../../components/ScrollAnimations';
import InteractiveButton from '../../components/InteractiveButton';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Products() {

  const products = [
              {
                name: "Time & Attendance Management System",
                category: "Business Management",
                status: "Available",
                image: "https://readdy.ai/api/search-image?query=modern%20time%20attendance%20management%20software%20interface%20on%20computer%20screen%2C%20employee%20check-in%20system%20with%20biometric%20scanner%20and%20digital%20clock%2C%20professional%20business%20software%20with%20blue%20color%20scheme&width=400&height=300&seq=timeattendance&orientation=landscape",
                features: [
                  "Biometric integration support",
                  "Real-time attendance tracking",
                  "Automated report generation",
                  "Mobile app compatibility",
                  "Multi-location support",
                  "Payroll integration ready"
                ],
                description: "Streamline employee attendance tracking with our comprehensive time management solution."
              },
              {
                name: "Canteen Management Solution",
                category: "Food Service",
                status: "Available", 
                image: "https://readdy.ai/api/search-image?query=digital%20canteen%20management%20system%20interface%20showing%20meal%20planning%2C%20inventory%20tracking%20and%20payment%20processing%2C%20modern%20cafeteria%20software%20with%20blue%20and%20white%20design%2C%20food%20service%20technology&width=400&height=300&seq=canteenmgmt&orientation=landscape",
                features: [
                  "Menu planning & scheduling",
                  "Inventory management",
                  "Payment processing",
                  "Nutritional tracking",
                  "Vendor management",
                  "Cost analysis reports"
                ],
                description: "Complete solution for managing cafeteria operations, from menu planning to billing."
              },
              {
                name: "Hostel Management System",
                category: "Accommodation",
                status: "Available",
                image: "https://readdy.ai/api/search-image?query=hostel%20management%20software%20dashboard%20showing%20room%20allocation%2C%20student%20records%20and%20fee%20management%2C%20dormitory%20administration%20system%20with%20modern%20blue%20interface%20design&width=400&height=300&seq=hostelmgmt&orientation=landscape",
                features: [
                  "Room allocation & management",
                  "Student registration system",
                  "Fee collection & tracking",
                  "Visitor management", 
                  "Maintenance scheduling",
                  "Parent communication portal"
                ],
                description: "Efficiently manage hostel operations with our integrated accommodation management system."
              },
              {
                name: "School Attendance Management System",
                category: "Education",
                status: "Upcoming",
                image: "https://readdy.ai/api/search-image?query=school%20attendance%20management%20software%20showing%20student%20check-in%20interface%2C%20educational%20institution%20attendance%20tracking%20system%20with%20colorful%20design%20for%20schools%2C%20student%20management%20dashboard&width=400&height=300&seq=schoolattend&orientation=landscape",
                features: [
                  "Student attendance tracking",
                  "Parent notification system",
                  "Teacher dashboard",
                  "Attendance analytics",
                  "Mobile app for parents",
                  "Integration with school systems"
                ],
                description: "Comprehensive attendance solution designed specifically for educational institutions."
              },
              {
                name: "Payroll Management System",
                category: "HR & Finance",
                status: "Upcoming",
                image: "https://readdy.ai/api/search-image?query=payroll%20management%20software%20interface%20showing%20salary%20calculation%2C%20tax%20deduction%20and%20payment%20processing%2C%20professional%20HR%20software%20with%20financial%20charts%20and%20employee%20data%2C%20blue%20business%20theme&width=400&height=300&seq=payrollmgmt&orientation=landscape",
                features: [
                  "Automated salary calculation",
                  "Tax deduction management",
                  "Employee self-service portal",
                  "Compliance reporting",
                  "Bank integration",
                  "Performance-based pay"
                ],
                description: "Streamline payroll processes with automated calculations and compliance management."
              },
              {
                name: "Customized Solutions",
                category: "Bespoke Development",
                status: "Available",
                image: "https://readdy.ai/api/search-image?query=custom%20software%20development%20process%20showing%20coding%20screens%2C%20project%20planning%20boards%20and%20system%20architecture%20diagrams%2C%20bespoke%20software%20solutions%20with%20modern%20development%20environment&width=400&height=300&seq=customsoftware&orientation=landscape",
                features: [
                  "Requirements analysis",
                  "Custom development",
                  "System integration",
                  "User training & support",
                  "Ongoing maintenance",
                  "Scalable architecture"
                ],
                description: "Built for your specific needs - tailored software solutions that grow with your business."
              }
            ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=collection%20of%20professional%20drones%20and%20UAV%20products%20displayed%20in%20modern%20tech%20showroom%20with%20software%20development%20screens%2C%20various%20drone%20models%20with%20blue%20lighting%20and%20computer%20monitors%20showing%20software%20interfaces%2C%20cutting-edge%20technology%20showcase&width=1920&height=1080&seq=inrecproductshero2&orientation=landscape')`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-3xl md:text-7xl font-bold text-center mb-8 leading-tight text-white drop-shadow-2xl">
            Our Products
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <p className="text-2xl md:text-3xl text-center max-w-4xl leading-relaxed text-sky-50 drop-shadow-md">
            Cutting-edge drone technology and innovative software solutions
          </p>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* Software Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Customized Software Solutions
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                        <span className="text-blue-600 text-sm font-medium">{product.category}</span>
                      </div>
                      <div className="ml-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.status === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-6 flex-1">
                      <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <InteractiveButton>
                      {product.status === 'Available' ? 'Request Demo' : 'Get Notified'}
                    </InteractiveButton>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Professional Drones Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Professional UAV Series
            </h2>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                name: "Comming soon...",
                category: "Enterprise Grade",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=professional%20enterprise%20drone%20INREC%20Pro%20X1%20with%20advanced%20camera%20system%2C%20sleek%20black%20carbon%20fiber%20design%2C%20high-end%20commercial%20quadcopter%20with%20blue%20LED%20accents%2C%20premium%20UAV%20technology&width=600&height=400&seq=inrecprox1&orientation=landscape",
                features: [
                  "4K Ultra HD Camera with 3-axis gimbal",
                  "45-minute flight time",
                  "10km transmission range",
                  "AI-powered obstacle avoidance",
                  "Weather-resistant IP54 rating",
                  "Real-time data streaming"
                ],
                applications: ["Professional Photography", "Industrial Inspection", "Surveying & Mapping"]
              },
              {
                name: "Comming soon...",
                category: "Agriculture Specialist",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=specialized%20agriculture%20drone%20INREC%20AgriMax%20with%20crop%20monitoring%20sensors%2C%20green%20and%20blue%20color%20scheme%2C%20agricultural%20UAV%20with%20spray%20system%20and%20multispectral%20camera%20over%20farmland&width=600&height=400&seq=inrecagrimax&orientation=landscape",
                features: [
                  "Multispectral imaging system",
                  "60-minute extended flight time",
                  "20L precision spray system",
                  "NDVI crop health analysis",
                  "GPS-guided autonomous flight",
                  "Weather monitoring sensors"
                ],
                applications: ["Crop Monitoring", "Precision Agriculture", "Pest Management"]
              }
            ].map((drone, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 300}>
                <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <img 
                    src={drone.image}
                    alt={drone.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{drone.name}</h3>
                        <span className="text-blue-600 font-medium">{drone.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">{drone.price}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {drone.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {drone.applications.map((app, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <InteractiveButton onClick={() => window.open('https://inrecskybots.com', '_blank')} >Request Quote</InteractiveButton>
                  </div>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Specialized Solutions */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Specialized Drone Solutions
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Comming soon...",
                category: "Security & Surveillance",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=security%20surveillance%20drone%20INREC%20Guardian%20with%20night%20vision%20camera%2C%20military%20grade%20UAV%20with%20thermal%20imaging%2C%20professional%20security%20drone%20in%20dark%20color%20scheme%20with%20blue%20accents&width=400&height=300&seq=inrecguardian&orientation=landscape",
                features: ["Thermal imaging camera", "Night vision capability", "Silent operation mode", "Encrypted data transmission"]
              },
              {
                name: "Comming soon...",
                category: "Industrial Inspection",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=industrial%20inspection%20drone%20INREC%20Inspector%20with%20high-resolution%20cameras%2C%20orange%20and%20blue%20safety%20colors%2C%20professional%20UAV%20for%20infrastructure%20monitoring%20and%20facility%20inspection&width=400&height=300&seq=inrecinspector&orientation=landscape",
                features: ["High-resolution zoom camera", "Gas detection sensors", "Confined space navigation", "Live video streaming"]
              },
              {
                name: "Comming soon...",
                category: "Search & Rescue",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=search%20and%20rescue%20drone%20INREC%20Rescue%20with%20emergency%20equipment%2C%20bright%20orange%20and%20white%20rescue%20colors%2C%20professional%20emergency%20response%20UAV%20with%20medical%20supply%20drop%20system&width=400&height=300&seq=inrecrescue&orientation=landscape",
                features: ["Thermal people detection", "Emergency supply drop", "Two-way communication", "GPS tracking beacon"]
              },
              {
                name: "Comming soon...",
                category: "Mapping & Surveying",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=surveying%20mapping%20drone%20INREC%20Surveyor%20with%20precision%20GPS%20and%20LiDAR%20sensors%2C%20professional%20yellow%20and%20blue%20colors%2C%20UAV%20for%20topographical%20mapping%20and%20land%20surveying&width=400&height=300&seq=inrecsurveyor&orientation=landscape",
                features: ["LiDAR scanning system", "Centimeter-level GPS", "Photogrammetry suite", "Real-time mapping"]
              },
              {
                name: "Comming soon...",
                category: "Marine Operations",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=marine%20waterproof%20drone%20INREC%20Marine%20for%20ocean%20operations%2C%20water-resistant%20UAV%20with%20blue%20and%20white%20colors%2C%20professional%20maritime%20drone%20with%20flotation%20system%20over%20ocean&width=400&height=300&seq=inrecmarine&orientation=landscape",
                features: ["Waterproof IP67 rating", "Salt-resistant coating", "Emergency flotation", "Marine radar system"]
              },
              {
                name: "Comming soon...",
                category: "Power & Utilities",
                price: "Comming soon...",
                image: "https://readdy.ai/api/search-image?query=utility%20power%20line%20inspection%20drone%20INREC%20Energy%2C%20professional%20UAV%20with%20specialized%20sensors%20for%20electrical%20infrastructure%2C%20industrial%20drone%20near%20power%20lines%20with%20safety%20colors&width=400&height=300&seq=inrecenergy&orientation=landscape",
                features: ["Electromagnetic field sensors", "Power line navigation", "Thermal anomaly detection", "Corona discharge detection"]
              }
            ].map((product, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                        <span className="text-blue-600 text-sm font-medium">{product.category}</span>
                      </div>
                      <div className="text-xl font-bold text-blue-600 hidden">{product.price}</div>
                    </div>
                    
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <InteractiveButton onClick={() => window.open('https://inrecskybots.com', '_blank')}>Learn More</InteractiveButton>
                  </div>
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
              Get in touch with our experts to find the perfect technology solution for your needs
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="flex gap-4 justify-center flex-wrap">
                <InteractiveButton onClick={() => window.open('https://inrecskybots.com', '_blank')}>Request Quote</InteractiveButton>
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
