'use client';

import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-[#333]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-light tracking-wider text-[#D4B86A]">926 TRADES</div>
          <div className="hidden md:flex items-center space-x-8">
            {['HOME', 'PRODUCTS', 'ABOUT', 'CONTACT'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-widest text-gray-300 hover:text-[#D4B86A] transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center space-x-6 ml-8 text-gray-300">
              <button className="hover:text-[#D4B86A]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-[#D4B86A]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 