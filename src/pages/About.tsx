import { motion } from 'motion/react';
import { LayoutDashboard, CheckCircle2 } from 'lucide-react';

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
      <section className="bg-soft-pink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-6">Our Story</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Who We Are</h1>
          <p className="text-lg md:text-xl text-near-black/60 leading-relaxed">
            A structured career acceleration platform built for ambitious Africans ready to compete on the global stage.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Our Mission Is Simple</h2>
              <p className="text-lg text-near-black/60 mb-12 leading-relaxed">
                We believe that talent is universal, but opportunity is not. We're bridging that gap by providing a clear, verifiable path from learning to global paid employment.
              </p>
              
              <div className="space-y-6">
                {[
                  'Real-world internship experience',
                  'Structured mentorship system',
                  'Global placement opportunities',
                  'Flexible learning and work options',
                  'Career-focused outcomes'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 luxury-card border-none bg-surface-gray/50">
                    <div className="text-brand-pink"><CheckCircle2 size={24} /></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Collaborative team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-near-black/80 to-transparent text-white">
                <div className="text-sm font-mono uppercase tracking-widest mb-2 opacity-70">Focus</div>
                <div className="text-2xl font-serif italic">Empowering the next generation of African digital leaders.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flowchart */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-pink mb-4">The Journey</div>
            <h2 className="text-4xl font-bold">The Pathway to Success</h2>
          </div>

          <div className="flex flex-col md:row items-center justify-center gap-6 md:gap-0">
            {[
              { label: 'Learning', color: 'bg-soft-pink' },
              { label: 'Experience', color: 'bg-brand-pink text-white' },
              { label: 'Global Exposure', color: 'bg-brand-gold text-white' },
              { label: 'Paid Opportunities', color: 'bg-near-black text-white' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:row items-center">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`${step.color} px-8 py-5 rounded-full font-bold shadow-lg border border-border-beige z-10`}
                >
                  {step.label}
                </motion.div>
                {idx !== 3 && (
                  <div className="w-1 md:w-20 h-10 md:h-1 bg-brand-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
