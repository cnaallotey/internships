import { motion } from 'motion/react';
import { Clock, Briefcase } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

const industries = [
  'Accounting', 'Business', 'Data Analytics', 'Engineering', 'Fashion', 'Film & Media',
  'Finance', 'Graphic Design', 'Investment Banking', 'IT & Computer Science',
  'Logistics & Supply Chain', 'Management Consulting', 'Marketing', 'NGO & Non-Profits', 'Pre-Medical'
];

export default function StageTwoSection() {
  return (
    <section id="stage-2" className="py-20 md:py-32 bg-surface-gray/40 overflow-hidden scroll-mt-24 border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden border border-border-beige">
              <img
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Global Team"
              />
            </div>
            <div className="hidden md:block absolute bg-white border border-border-beige p-5 max-w-[240px] -translate-y-1/2 ml-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-2">Duration</div>
              <div className="text-2xl font-bold">2 – 3 Months</div>
              <div className="text-xs text-near-black/50 mt-1">Remote · Global</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">Stage 02</div>
              <div className="h-px flex-1 bg-border-beige" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.05]">
              Work With <span className="">International</span> Companies
            </h2>
            <p className="text-base md:text-xl text-near-black/60 mb-10 leading-relaxed max-w-xl">
              2–3 month remote internship across global industries. Take your skills outside African borders and build a worldwide network.
            </p>
            <LuxuryButton>Join Live Q&A</LuxuryButton>
          </motion.div>
        </div>

        {/* Format options */}
        <div className="mb-20 md:mb-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Format Options</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Choose Your Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-10 lg:p-12 border border-border-beige flex items-start gap-6 hover:border-near-black transition-colors group">
              <div className="w-14 h-14 bg-near-black text-white flex items-center justify-center shrink-0 group-hover:bg-brand-pink transition-colors">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-2">Option 01</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Part-Time Option</h3>
                <p className="text-near-black/60 text-sm md:text-base leading-relaxed">Balance your current commitments with international experience. Flexible hours designed for students and working professionals.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 lg:p-12 border border-border-beige flex items-start gap-6 hover:border-near-black transition-colors group">
              <div className="w-14 h-14 bg-near-black text-white flex items-center justify-center shrink-0 group-hover:bg-brand-pink transition-colors">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-2">Option 02</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Full-Time Option</h3>
                <p className="text-near-black/60 text-sm md:text-base leading-relaxed">Fully immersive remote experience working 40 hours a week with global teams. Accelerate your career growth exponentially.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="mb-20 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Industries</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Internships Across Every Sector</h3>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/40 hidden md:block">
              {industries.length} Sectors
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-border-beige">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-5 md:p-6 border-b border-r border-border-beige bg-white text-xs md:text-sm font-medium hover:bg-near-black hover:text-white transition-all cursor-default flex items-center justify-between gap-2"
              >
                <span>{industry}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] opacity-40">{String(i + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-near-black text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-4">Next Step</div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">Want to learn more?</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">Connect with us in our next Live Q&A session to get all your questions answered about global placements.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <LuxuryButton className="text-white">Join Live Q&A</LuxuryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
