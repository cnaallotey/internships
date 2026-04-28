import { Link } from 'react-router-dom';
import { Leaf, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="https://internships.thriveafrica.co/images/logo.svg" className='h-12' alt="Thrive Internships" />
            </Link>
            <p className="text-near-black/60 text-sm leading-relaxed max-w-xs">
              From Skills to Global Paid Roles. We unlock digital skills and career readiness for 1 million Africans.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-near-black/40 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm hover:text-near-black transition-colors">About</Link></li>
              <li><Link to="/about" className="text-sm hover:text-near-black transition-colors">Mission</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-near-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-near-black/40 mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><a href="/#stage-1" className="text-sm hover:text-near-black transition-colors">Stage 1</a></li>
              <li><a href="/#stage-2" className="text-sm hover:text-near-black transition-colors">Stage 2</a></li>
              <li><a href="/#stage-3" className="text-sm hover:text-near-black transition-colors">Stage 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-near-black/40 mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-border-beige rounded-full hover:bg-near-black hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-border-beige rounded-full hover:bg-near-black hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-border-beige rounded-full hover:bg-near-black hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-border-beige text-xs text-near-black/40 gap-4">
          <p>© 2025 Thrive Internships. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-near-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-near-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
