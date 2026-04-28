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
    <section id="stage-3" className="py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-block px-4 py-2 border border-pink-600 text-pink-500 rounded-full font-mono text-[10px] uppercase tracking-widest mb-6">
              Stage 03
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">
              Get <span className="">Paid</span> to Work Globally
            </h2>
            <p className="text-xl md:text-2xl text-near-black/60 max-w-3xl mx-auto leading-relaxed mb-12">
              6 months to 1 year. Remote or In-Person. Part-Time or Full-Time. This is where your skills truly transform into global income.
            </p>
            <div className="flex flex-col max-w-xl mx-auto sm:row justify-center gap-6">
              <LuxuryButton>Join Live Q&A</LuxuryButton>
              <LuxuryButton variant="ghost">Learn About Visa Support</LuxuryButton>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: 'Paid Monthly Salary', desc: 'Secure a consistent, globally competitive salary while you work.', icon: <DollarSign /> },
            { title: 'Visa Sponsorship', desc: 'Expert support for work permits and international travel documentation.', icon: <Plane /> },
            { title: 'Housing Assistance', desc: 'We help you find high-quality, safe, and community-driven living spaces.', icon: <Building2 /> },
            { title: 'Full-Time Conversion', desc: 'Extremely high rates of full-time job offers upon completion.', icon: <TrendingUp /> }
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white rounded-xl border border-border-beige relative group"
            >
              <div className="w-14 h-14 bg-surface-gray rounded-lg flex items-center justify-center text-pink-800 mb-8 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-pink-800">{benefit.title}</h3>
              <p className="text-near-black/60 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-near-black text-white p-12 md:p-20 rounded-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/60 mb-6">Transitioning</div>
              <h3 className="text-3xl md:text-5xl font-bold mb-8">From Intern to Global Professional</h3>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                Stage 3 isn't just an internship; it's a career launchpad. We partner with companies that are looking for long-term talent, meaning your performance can lead directly to a full-time role.
              </p>
              <LuxuryButton>Join Waitlist</LuxuryButton>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                className="rounded-xl shadow-sm grayscale hover:grayscale-0 transition-all duration-700"
                alt="Professional success"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
