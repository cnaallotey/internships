import { motion } from 'motion/react';
import { Briefcase, Smartphone, Target, Trophy, Search, Users, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function StageOneSection() {
  const careerPaths = [
    'Data Science', 'Machine Learning', 'AI Engineering', 'Data Engineering',
    'Digital Marketing', 'Cybersecurity', 'Product Management', 'UI/UX Design',
    'Cloud Computing', 'Software Development'
  ];

  return (
    <section id="stage-1" className="bg-white overflow-hidden py-20 md:py-32 scroll-mt-24 border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">Stage 01</div>
              <div className="h-px flex-1 bg-border-beige" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.05]">
              Turn Your Skills Into <span className="">Real-World</span> Experience
            </h2>
            <p className="text-base md:text-xl text-near-black/60 mb-10 leading-relaxed max-w-xl">
              Build your portfolio, get mentored, and become job-ready through our intensive 2-month program.
            </p>
            <LuxuryButton>Apply Now</LuxuryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden border border-border-beige">
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Mentorship"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white border border-border-beige p-5 max-w-[220px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-2">Duration</div>
              <div className="text-2xl font-bold">2 Months</div>
              <div className="text-xs text-near-black/50 mt-1">Intensive program</div>
            </div>
          </motion.div>
        </div>

        {/* Eligibility */}
        <motion.div
          {...fadeIn}
          className="bg-surface-gray/60 border border-border-beige p-8 md:p-12 lg:p-16 mb-24 md:mb-32"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Eligibility</div>
              <h3 className="text-2xl md:text-3xl font-bold">Stage 1 is currently open to:</h3>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/40">
              03 Cohorts
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              'Thrive Africa past students',
              'Thrive Africa current students',
              'University of Cape Coast (UCC) students'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 md:p-6 border border-border-beige">
                <div className="w-10 h-10 bg-near-black text-white flex items-center justify-center shrink-0">
                  <Target size={16} />
                </div>
                <span className="font-medium text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Program Inclusions</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">What's Included</h3>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/40 hidden md:block">
              06 Benefits
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-beige">
            {[
              { title: '30-Day Remote Support', desc: 'CV optimization, interview prep, and active job search strategies.', icon: <Smartphone size={20} /> },
              { title: 'LinkedIn Optimization', desc: 'Complete overhaul of headline, about sections, and skills highlighting.', icon: <Users size={20} /> },
              { title: 'Real Client Projects', desc: 'Work on actual briefs from our partner companies across Africa.', icon: <Briefcase size={20} /> },
              { title: 'Daily Mentorship', desc: 'Constant access to industry experts for Q&A and technical guidance.', icon: <LayoutDashboard size={20} /> },
              { title: 'Aptitude Assessment', desc: 'Rigorous testing to identify and amplify your core skill strengths.', icon: <Search size={20} /> },
              { title: 'Certificate of Completion', desc: 'Verifiable credentials to boost your credibility on global platforms.', icon: <Trophy size={20} /> }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 md:p-10 border-b border-r border-border-beige hover:bg-surface-gray/40 transition-colors group relative"
              >
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.2em] text-near-black/30">
                  0{idx + 1}
                </div>
                <div className="w-11 h-11 bg-surface-gray border border-border-beige flex items-center justify-center text-near-black mb-6 group-hover:bg-near-black group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-near-black/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-border-beige">
                <img
                  src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80&w=1000"
                  alt="Career paths"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Specializations</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">Career Paths Supported</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {careerPaths.map((path, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 md:px-5 md:py-2.5 border border-border-beige text-near-black/70 font-mono text-[10px] md:text-xs uppercase tracking-widest hover:bg-near-black hover:text-white hover:border-near-black transition-all cursor-default"
                  >
                    {path}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <div className="text-center mb-12 md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Investment</div>
            <h3 className="text-3xl md:text-4xl font-bold">Choose Your Track</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeIn} className="bg-white p-8 md:p-12 border border-border-beige relative flex flex-col">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Track 01</div>
              <h4 className="text-2xl font-bold mb-2">Foundational Track</h4>
              <p className="text-near-black/50 text-sm mb-8">Duration: 2 Months</p>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-border-beige">
                <span className="text-4xl md:text-5xl font-serif font-bold text-near-black">GHS 350</span>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {['Real Client Projects', 'Daily Mentorship', '30-Day Remote Support', 'LinkedIn Optimization'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-near-black/70">
                    <CheckCircle2 size={16} className="text-near-black shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <LuxuryButton className="w-full">Apply Now</LuxuryButton>
            </motion.div>

            <motion.div {...fadeIn} className="bg-near-black text-white p-8 md:p-12 border border-near-black relative overflow-hidden flex flex-col">
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] border border-white/20">Coming Soon</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">Track 02</div>
              <h4 className="text-2xl font-bold mb-2">Advanced Track</h4>
              <p className="text-white/50 text-sm mb-8">Duration: 3 Months</p>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-white/10">
                <span className="text-4xl md:text-5xl font-serif font-bold">GHS 700</span>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {['Everything in Foundational', 'Advanced Mentorship', 'Capstone Project', 'Priority Placement'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-white shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <LuxuryButton variant="ghost" className="w-full text-white border-white/30 hover:bg-white/10">Join Waitlist</LuxuryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
