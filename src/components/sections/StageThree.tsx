import { motion } from 'motion/react';
import { DollarSign, Plane, Building2, TrendingUp } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function StageThreeSection() {
  return (
    <section id="stage-3" className="py-20 md:py-32 bg-white overflow-hidden scroll-mt-24 border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">Stage 03</div>
              <div className="h-px flex-1 bg-border-beige" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.05]">
              Get <span className="">Paid</span> to Work Globally
            </h2>
            <p className="text-base md:text-xl text-near-black/60 leading-relaxed mb-10 max-w-2xl">
              6 months to 1 year. Remote or In-Person. Part-Time or Full-Time. This is where your skills truly transform into global income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LuxuryButton>Join Live Q&A</LuxuryButton>
              <LuxuryButton variant="ghost">Learn About Visa Support</LuxuryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border-beige">
              <img
                src="https://images.unsplash.com/photo-1606596556957-f6566cc865a9?auto=format&fit=crop&q=80&w=1000"
                alt="Global professionals"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-5 border-t border-border-beige">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-1">Duration</div>
                <div className="text-xl font-bold">6 Months – 1 Year</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Program Benefits</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">What You Get</h3>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/40 hidden md:block">
              04 Benefits
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-beige">
            {[
              { title: 'Paid Monthly Salary', desc: 'Secure a consistent, globally competitive salary while you work.', icon: <DollarSign size={20} /> },
              { title: 'Visa Sponsorship', desc: 'Expert support for work permits and international travel documentation.', icon: <Plane size={20} /> },
              { title: 'Housing Assistance', desc: 'We help you find high-quality, safe, and community-driven living spaces.', icon: <Building2 size={20} /> },
              { title: 'Full-Time Conversion', desc: 'Extremely high rates of full-time job offers upon completion.', icon: <TrendingUp size={20} /> }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="p-8 md:p-10 bg-white border-b border-r border-border-beige relative group hover:bg-surface-gray/40 transition-colors"
              >
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.2em] text-near-black/30">
                  0{idx + 1}
                </div>
                <div className="w-11 h-11 bg-surface-gray border border-border-beige flex items-center justify-center text-near-black mb-6 group-hover:bg-near-black group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-near-black/60 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career launchpad */}
        <div className="bg-near-black text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-10 md:p-16 lg:p-20 relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-6">Transitioning</div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]">From Intern to Global Professional</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
                Stage 3 isn't just an internship; it's a career launchpad. We partner with companies that are looking for long-term talent, meaning your performance can lead directly to a full-time role.
              </p>
              <LuxuryButton>Join Waitlist</LuxuryButton>
            </div>
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                src="https://images.unsplash.com/photo-1691796792324-f156620f795c?auto=format&fit=crop&q=80&w=1000"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                alt="Professional success"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-near-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
