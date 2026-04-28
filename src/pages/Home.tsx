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
      <section className="relative min-height-[90vh] flex items-center overflow-hidden px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-near-black">
              Turn Your Skills Into <span className="">Real Experience</span>, Global Exposure & <span className="text-brand-pink">Paid Opportunities</span>
            </h1>

            <p className="text-lg md:text-xl text-near-black/60 mb-10 max-w-xl leading-relaxed">
              From beginner to globally paid roles — Thrive Internships helps you build real-world experience, gain international exposure, and earn from your skills through a structured 3-Stage Internship System.
            </p>

            <div className="flex flex-col sm:row items-start gap-4 mb-12">
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
                <div className="text-sm font-bold">70k+ Students Helped</div>
                <div className="text-[10px] text-near-black/40 uppercase tracking-wider">Join the community</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3-Stage System */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-4">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">A Structured Path From Skills to Global Income</h2>
            <div className="gold-divider w-20 mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                num: '01',
                title: 'Build Experience',
                icon: <Code />,
                desc: 'Skill-based internships + 30-Day Remote Job Support + LinkedIn Optimization Support',
                link: '#stage-1'
              },
              {
                num: '02',
                title: 'Go Global',
                icon: <Globe />,
                desc: 'Work with international companies across multiple industries in a 2–3 month remote internship.',
                link: '#stage-2'
              },
              {
                num: '03',
                title: 'Earn Globally',
                icon: <DollarSign />,
                desc: 'Paid internships — Remote & In-Person for 6 months to 1 year with salary, visa support & housing.',
                link: '#stage-3'
              }
            ].map((stage, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group relative bg-white p-10 rounded-xl border border-border-beige hover:border-near-black transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-surface-gray rounded-lg flex items-center justify-center text-near-black mb-8">
                    {stage.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                  <p className="text-near-black/60 mb-8 leading-relaxed">
                    {stage.desc}
                  </p>
                  <a href={stage.link} className="inline-flex items-center gap-2 text-near-black font-bold group/link">
                    Learn More <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Stages */}
      <StageOneSection />
      <StageTwoSection />
      <StageThreeSection />

      {/* Who It's For */}
      <section className="py-32 bg-surface-gray/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row items-baseline justify-between mb-20 gap-6">
            <motion.div {...fadeIn}>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-4">Who It's For</div>
              <h2 className="text-4xl md:text-5xl font-bold">No Excuses. <span className="italic">No Waiting.</span></h2>
            </motion.div>
            <motion.p {...fadeIn} className="max-w-xs text-sm text-near-black/60 font-serif italic">
              "Whether you're in school, working, or starting fresh — there's a structured path for you."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Students', desc: 'Gain experience while still in school', icon: '🎓' },
              { title: 'Graduates', desc: 'Bridge the gap between degree and career', icon: '🏁' },
              { title: 'Career Switchers', desc: 'Pivot into a new field with proof of skills', icon: '🔄' },
              { title: 'Professionals', desc: 'Expand your portfolio and go global', icon: '💼' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border-beige hover:shadow-xl transition-all duration-500 group"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{card.icon}</div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-near-black/50 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-pink-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter end={70000} suffix="+" label="Students Helped" />
          <StatCounter end={10} suffix="+" label="Career Paths" />
          <StatCounter end={3} label="Stages to Global Roles" />
          <StatCounter end={100} suffix="%" label="Remote-Friendly" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="gold-divider mb-20 mx-auto w-32" />
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-6xl font-serif italic font-medium leading-[1.2] mb-12"
          >
            "We're on a bold mission to unlock <span className="font-bold not-italic font-serif text-pink-800">digital skills</span>, practical work experience, and career readiness for <span className="underline decoration-border-beige underline-offset-8">1 million Africans</span> by 2026."
          </motion.h2>
          <motion.div {...fadeIn} className="font-mono text-xs uppercase tracking-[0.4em] opacity-40">
            — Thrive Internships Team
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-near-black rounded-xl p-12 md:p-24 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Thrive?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join thousands of African professionals who have accelerated their careers through our system.
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-6">
              <LuxuryButton>Apply Now</LuxuryButton>
              <LuxuryButton variant="ghost" className="text-white border-white/20 hover:bg-white/10">Join Live Q&A</LuxuryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
