'use client';

import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                CHILDBOOKAIP
              </span>
            </Link>
          </div>

          {/* Menú de opciones */}
          <div className="flex space-x-7">
            <Link
              href="/create"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              CREATE
            </Link>
            <Link
              href="/illustrator"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              ILLUSTRATOR
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              GALLERY
            </Link>
            <Link
              href="/pricing"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              PRICING
            </Link>
            <Link
              href="/guide"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              GUIDE
            </Link>
            <Link
              href="/templates"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              TEMPLATES
            </Link>
            
            <Link
              href="/Login"
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}