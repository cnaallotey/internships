import { motion } from 'motion/react';
import { Globe, Clock, Briefcase } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

const industries = [
  'Accounting', 'Business', 'Data Analytics', 'Engineering', 'Fashion', 'Film & Media',
  'Finance', 'Graphic Design', 'Investment Banking', 'IT & Computer Science',
  'Logistics & Supply Chain', 'Management Consulting', 'Marketing', 'NGO & Non-Profits', 'Pre-Medical'
];

export default function StageTwoSection() {
  return (
    <section id="stage-2" className="py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
              className="rounded-xl border border-border-beige shadow-sm"
              alt="Global Team"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-block px-4 py-2 border border-pink-600 text-pink-500 rounded-full font-mono text-[10px] uppercase tracking-widest mb-6">
              Stage 02
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Work With <span className="">International</span> Companies
            </h2>
            <p className="text-xl text-near-black/60 mb-10 leading-relaxed">
              2–3 month remote internship across global industries. Take your skills outside African borders and build a worldwide network.
            </p>
            <div className="flex gap-4">
              <LuxuryButton>Join Live Q&A</LuxuryButton>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="bg-white p-12 rounded-xl border border-border-beige flex items-start gap-8">
            <div className="w-16 h-16 bg-surface-gray rounded-lg flex items-center justify-center text-pink-800 shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-800">Part-Time Option</h3>
              <p className="text-near-black/60">Balance your current commitments with international experience. Flexible hours designed for students and working professionals.</p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-xl border border-border-beige flex items-start gap-8">
            <div className="w-16 h-16 bg-surface-gray rounded-lg flex items-center justify-center text-pink-800 shrink-0">
              <Briefcase size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-800">Full-Time Option</h3>
              <p className="text-near-black/60">Fully immersive remote experience working 40 hours a week with global teams. Accelerate your career growth exponentially.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-24">
          <div className="font-mono text-xs uppercase tracking-widest text-near-black/60 mb-6">Industries</div>
          <h3 className="text-4xl font-bold mb-16">Internships Across Every Sector</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: '#0A0A0A' }}
                className="p-6 border border-border-beige bg-white rounded-lg text-sm font-medium hover:bg-surface-gray transition-all cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-near-black border border-border-beige rounded-xl p-12 md:p-20 text-white text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">Want to learn more?</h3>
          <p className="text-lg text-white/70 mb-12">Connect with us in our next Live Q&A session to get all your questions answered about global placements.</p>
          <LuxuryButton className="mx-auto text-white">Join Live Q&A</LuxuryButton>
        </div>
      </div>
    </section>
  );
}
