'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Organic Food",
    subtitle: "Premium Australian Produce",
    description: "Carefully selected organic products from Australia's finest farms",
    icon: "/health-icon.svg",
  },
  {
    id: 2,
    title: "Health & Wellness",
    subtitle: "Natural Supplements & Skincare",
    description: "High-quality supplements and organic skincare products",
    icon: "/skincare-icon.svg",
  },
  {
    id: 3,
    title: "Luxury Home",
    subtitle: "Elegant Living Essentials",
    description: "Sophisticated home goods for refined living",
    icon: "/wine-icon.svg",
  }
];

const testimonials = [
  {
    id: 1,
    text: "The quality of Australian products exceeded our expectations. Their premium selection process ensures only the finest goods reach our shelves.",
    author: "Shanghai Luxury Retail",
    role: "Premium Retailer",
    rating: 5
  },
  {
    id: 2,
    text: "Reliable partner for premium Australian imports. Their attention to detail and quality control is exceptional.",
    author: "Beijing Wellness Group",
    role: "Health & Wellness Chain",
    rating: 5
  },
  {
    id: 3,
    text: "Outstanding selection of organic products. The authenticity and quality of their Australian imports is unmatched.",
    author: "Guangzhou Fine Foods",
    role: "Gourmet Supermarket",
    rating: 5
  },
  {
    id: 4,
    text: "Their premium wine selection has transformed our beverage offerings. Exceptional service and product knowledge.",
    author: "Shenzhen Wine Imports",
    role: "Wine Distributor",
    rating: 5
  },
  {
    id: 5,
    text: "926 Trades consistently delivers the highest quality Australian products. A trusted partner in luxury imports.",
    author: "Chengdu Luxury Market",
    role: "Department Store",
    rating: 5
  }
];

const stats = [
  { id: 1, number: "5+", label: "YEARS EXPERIENCE" },
  { id: 2, number: "1000+", label: "PRODUCTS EXPORTED" },
  { id: 3, number: "50+", label: "PARTNER BRANDS" },
  { id: 4, number: "100%", label: "AUTHENTIC PRODUCTS" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-[#333]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-light tracking-wider text-[#D4B86A]">926 TRADES</div>
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'PRODUCTS', 'ABOUT', 'CONTACT'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-widest text-gray-300 hover:text-[#D4B86A] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A1A1A] to-[#1A1A1A]"></div>
        <div className="relative text-center text-white z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.3em] mb-4 text-[#D4B86A]">AUSTRALIA TO CHINA</div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 leading-tight">
              PREMIUM<br />
              <span className="text-[#D4B86A]">AUSTRALIAN GOODS</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Bringing the finest selection of Australian premium products to the Chinese market
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[#D4B86A] to-[#BFA05C] text-black text-sm tracking-widest hover:from-[#E5C97B] hover:to-[#D4B86A] transition-all"
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Premium Selection */}
      <section id="products" className="py-32 bg-[#222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4B86A]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4B86A]/5 rounded-full blur-3xl animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-light mb-8 text-[#D4B86A] relative"
            >
              Our Premium Selection
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

            </motion.h2>
            
            <p className="text-gray-300 leading-relaxed text-lg px-8">
              We carefully curate the finest Australian products, ensuring each item meets our exceptional standards of quality and luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-[#222] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 mb-4">
                    <Image src={product.icon} alt={product.title} width={64} height={64} className="w-full h-full invert opacity-75" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide mb-2 text-[#D4B86A]">{product.title}</h3>
                  <p className="text-sm text-gray-400 italic mb-2">{product.subtitle}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32 bg-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-light mb-4 text-[#D4B86A]">Client Testimonials</h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>
          </div>
          <div className="relative">
            <div className="flex flex-nowrap overflow-x-hidden">
              <motion.div
                className="flex gap-8 animate-scroll"
                animate={{
                  x: [-1200, 0],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="w-[400px] flex-shrink-0 bg-black/50 p-8 rounded-sm group hover:bg-black/70 transition-colors"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#D4B86A] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-[#D4B86A] text-sm font-medium mb-1">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 bg-[#222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-[800px] h-[800px] bg-[#D4B86A]/10 rounded-[40%] rotate-45 animate-float animation-duration-[25s]"></div>
          <div className="absolute -bottom-48 right-0 w-[600px] h-[600px] bg-[#D4B86A]/15 rounded-[45%] rotate-[30deg] animate-float animation-duration-[30s] animation-delay-5000"></div>
          <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#D4B86A]/20 rounded-[35%] rotate-[60deg] animate-float animation-duration-[20s] animation-delay-10000"></div>
          <div className="absolute -top-32 right-1/3 w-[400px] h-[400px] bg-[#D4B86A]/25 rounded-[50%] rotate-[15deg] animate-float animation-duration-[35s] animation-delay-15000"></div>
          <div className="absolute -bottom-64 left-1/3 w-[700px] h-[700px] bg-[#D4B86A]/30 rounded-[40%] rotate-[75deg] animate-float animation-duration-[40s] animation-delay-20000"></div>
        </div>
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light mb-4 text-[#D4B86A]">About Us</h2>
              <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-[#D4B86A] mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  At 926 Trades, we bridge the gap between Australian quality and Chinese markets. Our mission is to deliver premium Australian products with uncompromising standards of authenticity and excellence.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-[#D4B86A] mb-4">Our Expertise</h3>
                <p className="text-gray-400 leading-relaxed">
                  With over 5 years of experience, we've established ourselves as trusted partners in the export industry. Our team specializes in curating the finest selection of Australian goods for discerning clients.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Authenticity Guaranteed",
                    description: "Every product is carefully vetted to ensure 100% Australian authenticity"
                  },
                  {
                    title: "Quality Assurance",
                    description: "Rigorous quality control processes for every shipment"
                  },
                  {
                    title: "Sustainable Practices",
                    description: "Commitment to ethical and sustainable trade practices"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="p-6 bg-[#222] rounded-lg border border-[#2A2A2A]"
                  >
                    <h4 className="text-lg font-medium text-[#D4B86A] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-light text-[#D4B86A] mb-2">{stat.number}</div>
                <div className="text-sm tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-[#222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4B86A]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4B86A]/5 rounded-full blur-3xl animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light mb-4 text-[#D4B86A]">Let's Connect</h2>
              <p className="text-gray-400 text-lg">
                We're here to answer your questions and discuss how we can work together.
              </p>
            </motion.div>

            <form className="space-y-6 bg-[#1A1A1A]/50 backdrop-blur-sm p-8 rounded-lg border border-[#2A2A2A]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:border-[#D4B86A] focus:ring-0 peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm bg-[#1A1A1A]/50 px-1">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:border-[#D4B86A] focus:ring-0 peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm bg-[#1A1A1A]/50 px-1">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:border-[#D4B86A] focus:ring-0 peer"
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm bg-[#1A1A1A]/50 px-1">
                  WeChat ID
                </label>
              </div>

              <div className="relative">
                <textarea
                  placeholder=" "
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:border-[#D4B86A] focus:ring-0 peer resize-none"
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm bg-[#1A1A1A]/50 px-1">
                  Your Message
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4B86A] to-[#BFA05C] text-black font-medium rounded-lg hover:from-[#E5C97B] hover:to-[#D4B86A] transition-all transform hover:scale-[1.02] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#111] to-black border-t border-[#2A2A2A]">     
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12 lg:gap-24"
          >
            {/* Contact Column */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-light text-[#D4B86A] mb-4">Connect With Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start justify-center md:justify-start">
                  {/* <span className="w-6 h-6 mr-3 text-[#D4B86A]">📍</span> */}
                  <p className="flex-1">Unit 9, 48 Corinna Street<br/>Phillip ACT 2606</p>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  {/* <span className="w-6 h-6 mr-3 text-[#D4B86A]">📞</span> */}
                  <a href="tel:0423343254" className="hover:text-[#D4B86A] transition-colors">0423 343 254</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  {/* <span className="w-6 h-6 mr-3 text-[#D4B86A]">📧</span> */}
                  <a href="mailto:info@926trades.com" className="hover:text-[#D4B86A] transition-colors">info@926trades.com</a>
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-light text-[#D4B86A] mb-4">Quick Navigation</h3>
              <nav className="grid gap-3">
                {[
                  { href: '#products', text: 'Our Collection' },
                  { href: '#about', text: 'Our Story' },
                  { href: '#contact', text: 'Consultation' },
                  { href: '#stats', text: 'Milestones' }
                ].map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4B86A] transition-colors group"
                  >
                    {link.text}
                    <span className="block h-0.5 bg-gradient-to-r from-[#D4B86A]/50 to-transparent w-0 group-hover:w-full transition-all duration-300 mx-auto md:mx-0"></span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Brand Story */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-light text-[#D4B86A] mb-4">Our Promise</h3>
              <p className="text-gray-400 leading-relaxed">
                Bridging continents with curated excellence - we specialize in delivering premium Australian goods to discerning Chinese markets with uncompromising quality.
              </p>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-[#2A2A2A] mt-16 pt-8 text-center">
            <div className="text-sm text-gray-600 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
              <span>926 TRADES</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <span>ABN: 83 627 850 659</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <span>© {new Date().getFullYear()} Premium Australian Exports</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <a href="https://jerryli.me/df-studio" className="text-[#D4B86A] hover:underline">Design by DF Studio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
