import { motion } from 'motion/react';
import { Briefcase, Smartphone, Target, Trophy, Search, Users, LayoutDashboard } from 'lucide-react';
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
    <section id="stage-1" className="bg-white overflow-hidden py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-block px-4 py-2 border border-pink-600 text-pink-500 rounded-full font-mono text-[10px] uppercase tracking-widest mb-6">
              Stage 01
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Turn Your Skills Into <span className="">Real-World</span> Experience
            </h2>
            <p className="text-xl text-near-black/60 mb-10 leading-relaxed">
              Build your portfolio, get mentored, and become job-ready through our intensive 2-month program.
            </p>
            <LuxuryButton>Apply Now</LuxuryButton>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
              className="rounded-xl shadow-sm border border-border-beige"
              alt="Mentorship"
            />
          </motion.div>
        </div>

        {/* Eligibility */}
        <motion.div
          {...fadeIn}
          className="bg-white border border-border-beige p-10 md:p-16 rounded-xl mb-32"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Stage 1 is currently open to:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Thrive Africa past students',
                'Thrive Africa current students',
                'University of Cape Coast (UCC) students'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-xl border border-border-beige">
                  <div className="w-8 h-8 bg-surface-gray text-near-black rounded-full flex items-center justify-center shrink-0">
                    <Target size={16} />
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-bold mb-4">What's Included</h3>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '30-Day Remote Support', desc: 'CV optimization, interview prep, and active job search strategies.', icon: <Smartphone /> },
              { title: 'LinkedIn Optimization', desc: 'Complete overhaul of headline, about sections, and skills highlighting.', icon: <Users /> },
              { title: 'Real Client Projects', desc: 'Work on actual briefs from our partner companies across Africa.', icon: <Briefcase /> },
              { title: 'Daily Mentorship', desc: 'Constant access to industry experts for Q&A and technical guidance.', icon: <LayoutDashboard /> },
              { title: 'Aptitude Assessment', desc: 'Rigorous testing to identify and amplify your core skill strengths.', icon: <Search /> },
              { title: 'Certificate of Completion', desc: 'Verifiable credentials to boost your credibility on global platforms.', icon: <Trophy /> }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-xl border border-border-beige hover:border-near-black transition-all group"
              >
                <div className="w-12 h-12 bg-surface-gray rounded-lg flex items-center justify-center text-pink-800 mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-near-black/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="text-center mb-32">
          <h3 className="text-3xl font-bold mb-12">Career Paths Supported</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {careerPaths.map((path, i) => (
              <span key={i} className="px-6 py-3 border border-border-beige text-near-black/70 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-near-black hover:text-white transition-all cursor-default">
                {path}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="bg-white p-12 rounded-xl border border-border-beige relative">
            <h4 className="text-2xl font-bold mb-2">Foundational Track</h4>
            <p className="text-pink-500 text-sm mb-6">Duration: 2 Months</p>
            <div className="text-5xl font-serif font-bold mb-10 text-near-black">GHS 350</div>
            <LuxuryButton className="w-full">Apply Now</LuxuryButton>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white p-12 rounded-xl border border-border-beige relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-near-black text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">Coming Soon</div>
            <h4 className="text-2xl font-bold mb-2 opacity-60">Advanced Track</h4>
            <p className="text-pink-500 text-sm mb-6 opacity-60">Duration: 3 Months</p>
            <div className="text-5xl font-serif font-bold mb-10 text-near-black opacity-60">GHS 700</div>
            <LuxuryButton variant="ghost" className="w-full">Join Waitlist</LuxuryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
