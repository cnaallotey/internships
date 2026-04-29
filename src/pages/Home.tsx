import { motion } from 'motion/react';
import { ArrowRight, Globe, Code, DollarSign, CheckCircle2 } from 'lucide-react';
import LuxuryButton from '../components/ui/LuxuryButton';
import StatCounter from '../components/ui/StatCounter';
import { Link } from 'react-router-dom';
import StageOneSection from '../components/sections/StageOne';
import StageTwoSection from '../components/sections/StageTwo';
import StageThreeSection from '../components/sections/StageThree';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-brand-pink mb-6"
            >
              Career Acceleration Platform
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-near-black">
              Turn Your Skills Into <span className="">Real Experience</span>, Global Exposure & <span className="text-brand-pink">Paid Opportunities</span>
            </h1>

            <p className="text-lg md:text-xl text-near-black/60 mb-10 max-w-xl leading-relaxed">
              From beginner to globally paid roles — Thrive Internships helps you build real-world experience, gain international exposure, and earn from your skills through a structured 3-Stage Internship System.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-12">
              <a href="#stage-1">
                <LuxuryButton>Explore the 3 Stages</LuxuryButton>
              </a>
              <LuxuryButton variant="ghost">Join Live Q&A</LuxuryButton>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Real-World Projects', 'Global Placement', 'Paid Opportunities', 'Remote-Friendly'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-white border border-border-beige rounded-full text-xs font-medium text-near-black">
                  <CheckCircle2 size={14} />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-border-beige shadow-sm aspect-[3/4] md:aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/8547400/pexels-photo-8547400.jpeg"
                alt="Professional African Woman"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 md:-right-8 top-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 border border-border-beige"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">70k+ Students Trained</div>
                <div className="text-[10px] text-near-black/40 uppercase tracking-wider">Join the community</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3-Stage System */}
      <section className="py-20 md:py-32 px-6 bg-surface-gray/40 border-y border-border-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-4">How It Works</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">A Structured Path From Skills to Global Income</h2>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-border-beige mx-8" />
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50">
              03 / Stages
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                num: '01',
                title: 'Build Experience',
                icon: <Code size={20} />,
                desc: 'Skill-based internships + 30-Day Remote Job Support + LinkedIn Optimization Support',
                link: '#stage-1',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=900'
              },
              {
                num: '02',
                title: 'Go Global',
                icon: <Globe size={20} />,
                desc: 'Work with international companies across multiple industries in a 2–3 month remote internship.',
                link: '#stage-2',
                image: 'https://images.unsplash.com/photo-1739285452644-3a2c009112fe?auto=format&fit=crop&q=80&w=900'
              },
              {
                num: '03',
                title: 'Earn Globally',
                icon: <DollarSign size={20} />,
                desc: 'Paid internships — Remote & In-Person for 6 months to 1 year with salary, visa support & housing.',
                link: '#stage-3',
                image: 'https://images.unsplash.com/photo-1618085222100-93f0eecad0aa?auto=format&fit=crop&q=80&w=900'
              }
            ].map((stage, idx) => (
              <motion.a
                key={idx}
                href={stage.link}
                variants={fadeIn}
                className="group relative bg-white border border-border-beige hover:border-near-black transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border-beige">
                  <img src={stage.image} alt={stage.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase border border-border-beige">
                    Stage {stage.num}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-surface-gray border border-border-beige flex items-center justify-center text-near-black mb-6">
                    {stage.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{stage.title}</h3>
                  <p className="text-near-black/60 mb-8 leading-relaxed text-sm md:text-base flex-1">
                    {stage.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-near-black font-bold text-sm uppercase tracking-wider">
                    Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Stages */}
      <StageOneSection />
      <StageTwoSection />
      <StageThreeSection />

      {/* Who It's For */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6">
            <motion.div {...fadeIn}>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-4">Who It's For</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">No Excuses. <span className="italic">No Waiting.</span></h2>
            </motion.div>
            <motion.p {...fadeIn} className="max-w-sm text-sm text-near-black/60 font-serif italic md:text-right">
              "Whether you're in school, working, or starting fresh — there's a structured path for you."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'Students', desc: 'Gain experience while still in school', image: 'https://images.unsplash.com/photo-1690808612076-baa7f31baab0?auto=format&fit=crop&q=80&w=800' },
              { title: 'Graduates', desc: 'Bridge the gap between degree and career', image: 'https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?auto=format&fit=crop&q=80&w=800' },
              { title: 'Career Switchers', desc: 'Pivot into a new field with proof of skills', image: 'https://images.unsplash.com/photo-1563132337-f159f484226c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Professionals', desc: 'Expand your portfolio and go global', image: 'https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&q=80&w=800' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white border border-border-beige hover:border-near-black transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden border-b border-border-beige">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-pink mb-3">0{idx + 1}</div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">{card.title}</h4>
                  <p className="text-near-black/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-near-black py-20 md:py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-10 md:mb-14">
            By The Numbers
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="md:pl-0 md:pr-6"><StatCounter end={70000} suffix="+" label="Students Helped" /></div>
            <div className="md:px-6"><StatCounter end={10} suffix="+" label="Career Paths" /></div>
            <div className="md:px-6 pt-10 md:pt-0"><StatCounter end={3} label="Stages to Global Roles" /></div>
            <div className="md:pl-6 pt-10 md:pt-0"><StatCounter end={100} suffix="%" label="Remote-Friendly" /></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden border border-border-beige">
                <img
                  src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&q=80&w=900"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-5 border-t border-border-beige">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-1">Our Mission</div>
                  <div className="text-sm text-near-black/70">1 Million Africans by 2026</div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-6">Mission Statement</div>
              <motion.h2
                {...fadeIn}
                className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-medium leading-[1.25] mb-10"
              >
                "We're on a bold mission to unlock <span className="font-bold not-italic font-serif text-pink-800">digital skills</span>, practical work experience, and career readiness for <span className="underline decoration-border-beige underline-offset-8">1 million Africans</span> by 2026."
              </motion.h2>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-near-black" />
                <motion.div {...fadeIn} className="font-mono text-xs uppercase tracking-[0.3em] text-near-black/60">
                  Thrive Internships Team
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto relative bg-near-black overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-3 p-10 md:p-16 lg:p-20 text-white relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-6">Get Started</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">Ready to Thrive?</h2>
              <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
                Join thousands of African professionals who have accelerated their careers through our system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://internships.thriveafrica.co" target="_blank" rel="noopener noreferrer">
                  <LuxuryButton>Apply Now</LuxuryButton>
                </a>
                <LuxuryButton variant="ghost" className="text-white border-white/30 hover:bg-white/10">Join Live Q&A</LuxuryButton>
              </div>
            </div>
            <div className="lg:col-span-2 relative min-h-[260px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                src="https://images.unsplash.com/photo-1573164713712-03790a178651?auto=format&fit=crop&q=80&w=1000"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-near-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
