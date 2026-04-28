import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon, HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map(l => l.to));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navStyle = {
    backgroundColor: scrolled
      ? isDark ? 'rgba(10,10,10,0.85)' : 'rgba(255,255,255,0.85)'
      : 'transparent',
    borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={navStyle}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            AB<span style={{ color: 'var(--text-muted)' }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="text-sm font-medium cursor-pointer transition-colors duration-200"
                style={{ color: active === to ? 'var(--text)' : 'var(--text-muted)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-colors duration-200 hover:opacity-70"
            style={{ color: 'var(--text-muted)' }}
          >
            {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
            style={{ color: 'var(--text-muted)' }}
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: isDark ? '#0a0a0a' : '#ffffff',
              borderColor: 'var(--border)',
            }}
          >
            <ul className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-64}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium cursor-pointer block py-1"
                    style={{ color: 'var(--text)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
