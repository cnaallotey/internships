import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-white border-b border-border-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">Our Story</div>
                <div className="h-px w-16 bg-border-beige" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                Who We Are
              </h1>
              <p className="text-base md:text-xl text-near-black/60 leading-relaxed max-w-2xl">
                A structured career acceleration platform built for ambitious Africans ready to compete on the global stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-border-beige">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-5 border-t border-border-beige flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-1">Established</div>
                    <div className="text-sm font-bold">Career Acceleration · Africa</div>
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.2em] text-near-black/40">001</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 px-6 bg-surface-gray/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-4">Mission</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">Our Mission Is Simple</h2>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-border-beige mx-8" />
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50">
              05 / Pillars
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div {...fadeIn} className="lg:col-span-5">
              <div className="relative aspect-square overflow-hidden border border-border-beige">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1000"
                  alt="Collaborative team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-near-black/80 to-transparent text-white">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2 text-brand-pink">Focus</div>
                  <div className="text-lg md:text-xl font-serif italic leading-snug">Empowering the next generation of African digital leaders.</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-7 flex flex-col">
              <p className="text-base md:text-xl text-near-black/70 mb-10 md:mb-12 leading-relaxed border-l-2 border-near-black pl-6">
                We believe that talent is universal, but opportunity is not. We're bridging that gap by providing a clear, verifiable path from learning to global paid employment.
              </p>

              <div className="border-t border-l border-border-beige bg-white">
                {[
                  'Real-world internship experience',
                  'Structured mentorship system',
                  'Global placement opportunities',
                  'Flexible learning and work options',
                  'Career-focused outcomes'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 md:p-6 border-b border-r border-border-beige group hover:bg-surface-gray/60 transition-colors">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-brand-pink shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <CheckCircle2 size={18} className="text-near-black shrink-0" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                    <ArrowRight size={16} className="ml-auto text-near-black/30 shrink-0 group-hover:text-near-black group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flowchart */}
      <section className="py-20 md:py-32 bg-white px-6 border-t border-border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-3">The Journey</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">The Pathway to Success</h2>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/40 hidden md:block">
              04 Stages
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-beige">
            {[
              { label: 'Learning', image: 'https://images.unsplash.com/photo-1562217243-1340a2a73e2f?auto=format&fit=crop&q=80&w=900' },
              { label: 'Experience', image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80&w=900' },
              { label: 'Global Exposure', image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&q=80&w=900' },
              { label: 'Paid Opportunities', image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=900' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white border-b border-r border-border-beige group hover:bg-surface-gray/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-border-beige">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-2">
                      Step {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight">{step.label}</h3>
                  </div>
                  {idx < 3 && (
                    <ArrowRight size={18} className="text-near-black/40 mt-1 hidden sm:block group-hover:text-near-black group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
