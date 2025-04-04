'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span style={{ fontFamily: 'var(--font-nunito)' }} className="font-nunito text-3xl font-extrabold text-black  transition-all duration-500">
                Libri.to
              </span>
            </Link>
          </div>

          {/* Menú de opciones */}
          <div className="flex space-x-7">
            {[
              { href: '/precios', label: 'Precios' },
              { href: '/biblioteca', label: 'Biblioteca' },
              { href: '/buscar', label: 'Buscar' },

            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: 'var(--font-nunito)' }}
                className={`relative text-black font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-500 ${pathname === link.href
                  ? 'bg-white text-blue-500 shadow-md'
                  : 'hover:bg-gray-200 hover:shadow-lg'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute inset-0  rounded-lg blur-md opacity-0 transition-opacity duration-500 ${pathname === link.href ? 'opacity-100' : 'hover:opacity-100'
                    }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}