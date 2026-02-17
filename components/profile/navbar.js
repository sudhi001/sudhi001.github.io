'use client';

import { useState, useEffect } from 'react';
import data from '../../app/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { id: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.href, top: rect.top };
      });

      const offset = 120;
      const active = sections
        .filter((s) => s.top <= offset)
        .sort((a, b) => b.top - a.top)[0];

      setActiveSection(active ? active.id : '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 frosted-glass transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-sm font-semibold text-foreground no-underline hover:text-primary transition-colors"
        >
          {data.name}
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium no-underline transition-colors ${
                activeSection === link.href
                  ? 'text-primary'
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden frosted-glass border-t border-gray-100 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block py-2 text-sm font-medium no-underline ${
                activeSection === link.href
                  ? 'text-primary'
                  : 'text-foreground-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
