
'use client';

import Header from '../../components/Header';
import { ScrollAnimatedElement, WigglyLine } from '../../components/ScrollAnimations';
import InteractiveButton from '../../components/InteractiveButton';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20blog%20and%20news%20center%20with%20digital%20displays%20showing%20drone%20content%2C%20professional%20media%20workspace%20with%20blue%20lighting%2C%20tech%20journalism%20and%20content%20creation%20environment&width=1920&height=1080&seq=inrecblogshero&orientation=landscape')`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-3xl md:text-7xl font-bold text-center pb-8 leading-tight text-white drop-shadow-2xl">
            INREC Blog
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <p className="text-2xl md:text-3xl text-center max-w-4xl leading-relaxed text-sky-50 drop-shadow-md">
            Latest insights, trends, and innovations in drone technology
          </p>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* Featured Articles Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
              Featured Articles
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Latest insights on drone technology, software solutions, and Microsoft partnership innovations
            </p>
          </ScrollAnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Microsoft Azure Integration for Drone Fleet Management",
                excerpt: "Exploring how Microsoft Azure cloud services are revolutionizing drone fleet management with real-time analytics, AI-powered insights, and seamless integration with business systems.",
                category: "Microsoft Solutions",
                readTime: "8 min read",
                date: "December 15, 2024",
                image: "https://readdy.ai/api/search-image?query=Microsoft%20Azure%20cloud%20integration%20dashboard%20for%20drone%20fleet%20management%2C%20professional%20software%20interface%20with%20blue%20Azure%20branding%2C%20cloud%20computing%20technology%20with%20UAV%20monitoring%20systems&width=600&height=400&seq=inrecazuredrone&orientation=landscape",
                author: "Dr. Sarah Martinez"
              },
              {
                title: "Custom Software Solutions for Educational Institutions",
                excerpt: "How our Time & Attendance and Hostel Management systems are transforming educational operations with Microsoft Office 365 integration and cloud-based solutions.",
                category: "Software Development",
                readTime: "6 min read",
                date: "December 12, 2024",
                image: "https://readdy.ai/api/search-image?query=educational%20institution%20software%20management%20system%20showing%20student%20attendance%20and%20hostel%20management%2C%20modern%20school%20administration%20dashboard%20with%20blue%20interface%20design&width=600&height=400&seq=inreceducationsoft&orientation=landscape",
                author: "Michael Chen"
              }
            ].map((article, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 300}>
                <article className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">By {article.author}</span>
                        <div className="text-sm text-gray-400">{article.date}</div>
                      </div>
                      <InteractiveButton>Read More</InteractiveButton>
                    </div>
                  </div>
                </article>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Recent Articles Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Recent Articles
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Microsoft Power Platform for Custom Business Solutions",
                excerpt: "Building custom applications with Power Apps, Power Automate, and Power BI for enhanced business operations.",
                category: "Microsoft Solutions",
                readTime: "5 min read",
                date: "December 10, 2024",
                image: "https://readdy.ai/api/search-image?query=Microsoft%20Power%20Platform%20dashboard%20showing%20custom%20business%20applications%2C%20Power%20Apps%20interface%20with%20blue%20Microsoft%20branding%2C%20business%20automation%20tools&width=400&height=300&seq=inrecpowerplatform&orientation=landscape"
              },
              {
                title: "Canteen Management System Implementation",
                excerpt: "Complete guide to implementing our canteen management solution with Office 365 integration and cloud storage.",
                category: "Software Solutions",
                readTime: "7 min read",
                date: "December 8, 2024",
                image: "https://readdy.ai/api/search-image?query=canteen%20management%20software%20system%20showing%20meal%20planning%20and%20inventory%20tracking%2C%20modern%20cafeteria%20management%20dashboard%20with%20blue%20interface%20design&width=400&height=300&seq=inreccanteenimpl&orientation=landscape"
              },
              {
                title: "Drone Safety Regulations Update 2024",
                excerpt: "Latest changes to FAA regulations and what they mean for commercial drone operators.",
                category: "Regulations",
                readTime: "5 min read",
                date: "December 5, 2024",
                image: "https://readdy.ai/api/search-image?query=drone%20safety%20and%20regulations%20compliance%2C%20professional%20UAV%20with%20safety%20equipment%20and%20warning%20labels%2C%20aviation%20regulatory%20compliance%20with%20blue%20and%20white%20theme&width=400&height=300&seq=inrecblog1&orientation=landscape"
              },
              {
                title: "Time & Attendance System ROI Analysis",
                excerpt: "How our automated attendance tracking system delivers measurable returns on investment for businesses.",
                category: "Business Solutions",
                readTime: "6 min read",
                date: "December 3, 2024",
                image: "https://readdy.ai/api/search-image?query=time%20attendance%20system%20ROI%20analysis%20dashboard%20showing%20business%20metrics%20and%20cost%20savings%2C%20professional%20software%20analytics%20with%20blue%20charts%20and%20graphs&width=400&height=300&seq=inrecattendanceroi&orientation=landscape"
              },
              {
                title: "Azure Cloud Security for Drone Data",
                excerpt: "Protecting sensitive drone data with Microsoft Azure's enterprise-grade security features and compliance tools.",
                category: "Cloud Security",
                readTime: "8 min read",
                date: "November 30, 2024",
                image: "https://readdy.ai/api/search-image?query=Azure%20cloud%20security%20dashboard%20for%20drone%20data%20protection%2C%20Microsoft%20security%20interface%20with%20encryption%20and%20compliance%20features%2C%20blue%20cybersecurity%20theme&width=400&height=300&seq=inrecazuresecurity&orientation=landscape"
              },
              {
                title: "Hostel Management Digital Transformation",
                excerpt: "How digital hostel management systems are improving student experience and operational efficiency.",
                category: "Education Technology",
                readTime: "5 min read",
                date: "November 28, 2024",
                image: "https://readdy.ai/api/search-image?query=digital%20hostel%20management%20system%20showing%20student%20room%20allocation%20and%20facility%20management%2C%20modern%20dormitory%20administration%20software%20with%20blue%20interface&width=400&height=300&seq=inrechosteldigital&orientation=landscape"
              },
              {
                title: "Construction Site Mapping with LiDAR",
                excerpt: "How LiDAR technology is improving accuracy in construction site surveying and progress monitoring.",
                category: "Construction Tech",
                readTime: "7 min read",
                date: "November 25, 2024",
                image: "https://readdy.ai/api/search-image?query=LiDAR%20drone%20scanning%20construction%20site%20with%203D%20mapping%20visualization%2C%20advanced%20surveying%20technology%2C%20UAV%20with%20laser%20scanning%20equipment%20over%20building%20project&width=400&height=300&seq=inrecblog2&orientation=landscape"
              },
              {
                title: "Office 365 Integration Best Practices",
                excerpt: "Maximizing productivity with seamless Office 365 integration in custom software solutions.",
                category: "Microsoft Solutions",
                readTime: "6 min read",
                date: "November 22, 2024",
                image: "https://readdy.ai/api/search-image?query=Office%20365%20integration%20dashboard%20showing%20Teams%2C%20SharePoint%20and%20Outlook%20connectivity%2C%20Microsoft%20productivity%20suite%20with%20blue%20corporate%20branding&width=400&height=300&seq=inrecoffice365&orientation=landscape"
              },
              {
                title: "Custom Software Development Lifecycle",
                excerpt: "Our proven methodology for delivering custom software solutions from concept to deployment.",
                category: "Software Development",
                readTime: "9 min read",
                date: "November 20, 2024",
                image: "https://readdy.ai/api/search-image?query=software%20development%20lifecycle%20diagram%20showing%20planning%2C%20design%2C%20development%20and%20deployment%20phases%2C%20professional%20project%20management%20with%20blue%20workflow%20visualization&width=400&height=300&seq=inrecsdlc&orientation=landscape"
              }
            ].map((article, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 100}>
                <article className="h-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="text-xs text-gray-400 mb-3">{article.date}</div>
                    
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer">
                      Read More →
                    </button>
                  </div>
                </article>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Categories Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Browse by Category
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Microsoft Solutions", count: "15 articles", color: "bg-blue-100 border-blue-300 text-blue-800" },
              { name: "Software Development", count: "12 articles", color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
              { name: "Drone Technology", count: "23 articles", color: "bg-green-100 border-green-300 text-green-800" },
              { name: "Business Solutions", count: "18 articles", color: "bg-purple-100 border-purple-300 text-purple-800" },
              { name: "Construction Tech", count: "14 articles", color: "bg-orange-100 border-orange-300 text-orange-800" },
              { name: "Education Technology", count: "10 articles", color: "bg-teal-100 border-teal-300 text-teal-800" },
              { name: "Cloud Security", count: "8 articles", color: "bg-red-100 border-red-300 text-red-800" },
              { name: "Agriculture Tech", count: "16 articles", color: "bg-yellow-100 border-yellow-300 text-yellow-800" }
            ].map((category, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 150}>
                <div className={`p-6 border-2 rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-pointer ${category.color}`}>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.count}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Stay Updated
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100">
              Subscribe to our newsletter for the latest drone technology insights and industry updates
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <form 
              id="newsletter-form"
              className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = {
                  email: formData.get('email')
                };
                fetch('/api/newsletter', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: new URLSearchParams(data as any).toString(),
                })
                .then(() => {
                  alert('Thank you for subscribing to our newsletter!');
                  (e.target as HTMLFormElement).reset();
                })
                .catch(() => {
                  alert('There was an error. Please try again.');
                });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border-2 border-blue-300 focus:border-white outline-none transition-colors text-sm rounded-lg bg-white/90 backdrop-blur-sm"
              />
              <InteractiveButton type="submit">Subscribe</InteractiveButton>
            </form>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
