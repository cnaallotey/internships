import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ChevronDown } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const stages = [
    { name: 'Stage 1: Build Experience', path: '/#stage-1' },
    { name: 'Stage 2: Go Global', path: '/#stage-2' },
    { name: 'Stage 3: Earn Globally', path: '/#stage-3' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-white border-b border-border-beige'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img src="https://internships.thriveafrica.co/images/logo.svg" className='h-9 sm:h-10 md:h-12' alt="Thrive Internships" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-near-black ${location.pathname === link.path ? 'text-near-black font-bold' : 'text-near-black/70'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Programs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-near-black/70 hover:text-near-black transition-colors h-full py-2">
              Programs <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-sm rounded-xl border border-border-beige py-3 mt-2"
                >
                  {stages.map((stage) => (
                    <a
                      key={stage.path}
                      href={stage.path}
                      className="block px-6 py-3 text-sm hover:bg-surface-gray hover:text-near-black transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      {stage.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/apply">
            <LuxuryButton className="px-6 py-2 text-sm">Apply Now</LuxuryButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden text-near-black p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-border-beige"
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-2 border-b border-border-beige/50 ${location.pathname === link.path ? 'text-near-black font-bold' : 'text-near-black'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="py-4">
            <h4 className="text-xs uppercase tracking-widest text-near-black/40 mb-4">Our Programs</h4>
            <div className="flex flex-col gap-4">
              {stages.map((stage) => (
                <a
                  key={stage.path}
                  href={stage.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-near-black/70 hover:text-near-black"
                >
                  {stage.name}
                </a>
              ))}
            </div>
          </div>

          <Link to="/apply" onClick={() => setIsOpen(false)} className="mt-4">
            <LuxuryButton className="w-full">Apply Now</LuxuryButton>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
