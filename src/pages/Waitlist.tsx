import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import LuxuryButton from '../components/ui/LuxuryButton';

const FORM_ENDPOINT = 'https://getform.io/f/azyyxzxb';

const fieldClass =
  'w-full px-6 py-4 border border-border-beige focus:outline-none focus:border-near-black transition-colors';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center justify-center bg-surface-gray/30">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 border border-border-beige text-center"
        >
          {submitted ? (
            <>
              <div className="w-14 h-14 bg-near-black text-white flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">You're on the List</h1>
              <p className="text-near-black/60 text-lg max-w-md mx-auto leading-relaxed">
                Thanks for joining the waitlist. We'll email you as soon as applications open for the next cohort.
              </p>
            </>
          ) : (
            <>
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
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input type="hidden" name="_source" value="waitlist" />
                <input type="text" name="fullName" required placeholder="Full Name" className={fieldClass} />
                <input type="email" name="email" required placeholder="Email Address" className={fieldClass} />
                <input type="tel" name="phone" required placeholder="Telephone Number" className={fieldClass} />
                {error && (
                  <div className="px-4 py-3 bg-soft-pink border border-brand-pink/40 text-sm text-near-black/80 text-left">
                    {error}
                  </div>
                )}
                <LuxuryButton className="w-full">
                  {submitting ? 'Submitting…' : 'Join Waitlist'}
                </LuxuryButton>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
