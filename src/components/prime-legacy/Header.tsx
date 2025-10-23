'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#FFD700]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#FFD700]">Prime</span>
              <span className="text-white"> Legacy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('ebook')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              E-book
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('cta-final')}
              className="btn-gold"
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FFD700] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('ebook')}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors py-2"
            >
              E-book
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors py-2"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('cta-final')}
              className="btn-gold w-full"
            >
              Começar Agora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
