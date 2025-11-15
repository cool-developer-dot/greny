'use client';

import React from 'react';
import Image from 'next/image';

const Header: React.FC = React.memo(() => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a4d2e] px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-90">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Greyn Eco Logo"
            >
              {/* Brick pattern */}
              <rect x="4" y="6" width="6" height="4" fill="#1a4d2e" />
              <rect x="11" y="6" width="6" height="4" fill="#1a4d2e" />
              <rect x="18" y="6" width="6" height="4" fill="#1a4d2e" />
              
              <rect x="7.5" y="11" width="6" height="4" fill="#1a4d2e" />
              <rect x="14.5" y="11" width="6" height="4" fill="#1a4d2e" />
              
              <rect x="4" y="16" width="6" height="4" fill="#1a4d2e" />
              <rect x="11" y="16" width="6" height="4" fill="#1a4d2e" />
              <rect x="18" y="16" width="6" height="4" fill="#1a4d2e" />
              
              <rect x="7.5" y="21" width="6" height="4" fill="#1a4d2e" />
              <rect x="14.5" y="21" width="6" height="4" fill="#1a4d2e" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-white">
            greyn-eco-front
          </span>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-16">
            <li>
              <a
                href="/"
                className="nav-link relative text-base font-medium text-white transition-colors hover:text-green-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="nav-link relative text-base font-medium text-white transition-colors hover:text-green-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="nav-link relative text-base font-medium text-white transition-colors hover:text-green-200"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/wallet"
                className="nav-link relative text-base font-medium text-white transition-colors hover:text-green-200"
              >
                Wallet
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link relative text-base font-medium text-white transition-colors hover:text-green-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <style jsx>{`
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #86efac;
            transition: width 0.3s ease-in-out;
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
        `}</style>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

