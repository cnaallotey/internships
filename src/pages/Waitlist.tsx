import { motion } from 'motion/react';
import LuxuryButton from '../components/ui/LuxuryButton';

export default function Waitlist() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for joining the waitlist! We'll be in touch soon.");
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center justify-center bg-surface-gray/30">
      <div className="max-w-2xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 border border-border-beige text-center"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-4">
            Join The Waitlist
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Be the First to Know
          </h1>
          <p className="text-near-black/60 mb-10 text-lg">
            Our next cohort is filling up fast. Drop your email below to get early access when applications open.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input 
              type="text" 
              required
              placeholder="Full Name" 
              className="w-full px-6 py-4 border border-border-beige focus:outline-none focus:border-near-black transition-colors"
            />
            <input 
              type="email" 
              required
              placeholder="Email Address" 
              className="w-full px-6 py-4 border border-border-beige focus:outline-none focus:border-near-black transition-colors"
            />
            <input 
              type="tel" 
              required
              placeholder="Telephone Number" 
              className="w-full px-6 py-4 border border-border-beige focus:outline-none focus:border-near-black transition-colors"
            />
            <LuxuryButton className="w-full">
              Join Waitlist
            </LuxuryButton>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
