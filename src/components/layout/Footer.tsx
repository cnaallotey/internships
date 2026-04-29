import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-near-black text-white pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="https://internships.thriveafrica.co/images/logo.svg" className='h-12 brightness-0 invert' alt="Thrive Internships" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              From Skills to Global Paid Roles. We unlock digital skills and career readiness for 1 million Africans.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">Mission</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><a href="/#stage-1" className="text-sm text-white/70 hover:text-white transition-colors">Stage 1</a></li>
              <li><a href="/#stage-2" className="text-sm text-white/70 hover:text-white transition-colors">Stage 2</a></li>
              <li><a href="/#stage-3" className="text-sm text-white/70 hover:text-white transition-colors">Stage 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-6">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 border border-white/20 hover:bg-white hover:text-near-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2.5 border border-white/20 hover:bg-white hover:text-near-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 border border-white/20 hover:bg-white hover:text-near-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-10 border-t border-white/10 text-xs text-white/40 gap-4">
          <p>© 2025 Thrive Internships. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
