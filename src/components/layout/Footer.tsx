'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="py-16 bg-[#1A1A1A] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-[#D4B86A] text-lg font-light mb-6">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              926 TRADES specializes in premium Australian product exports to China. We pride ourselves on delivering authentic, high-quality goods to our discerning clients.
            </p>
          </div>
          <div>
            <h3 className="text-[#D4B86A] text-lg font-light mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-center">
                <span className="w-5 h-5 mr-3">📍</span>
                Unit 9, 48 Corinna Street, Phillip ACT 2606
              </p>
              <p className="flex items-center">
                <span className="w-5 h-5 mr-3">📱</span>
                0423 343 254
              </p>
              <p className="flex items-center">
                <span className="w-5 h-5 mr-3">🏢</span>
                ABN: 83 627 850 659
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[#D4B86A] text-lg font-light mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#products" className="text-gray-400 hover:text-[#D4B86A] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#D4B86A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#D4B86A] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-gray-400 hover:text-[#D4B86A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 tracking-wider">
            &copy; {new Date().getFullYear()} 926 PTY LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 