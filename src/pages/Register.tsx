import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import LuxuryButton from '../components/ui/LuxuryButton';

const FORM_ENDPOINT = 'https://forminit.com/f/bpjnlwrb';

const fieldClass =
  'w-full px-4 py-3.5 bg-white border border-border-beige text-sm focus:outline-none focus:border-near-black transition-colors placeholder:text-near-black/30';

const labelClass = 'block text-sm font-medium mb-2 text-near-black';

export default function Register() {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError('Something went wrong submitting your application. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-near-black text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '44px 44px'
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">Reserve My Spot</div>
            <div className="h-px w-16 bg-white/20" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            Internship Application
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            Secure your place in the next cohort. Complete the form below and our team will review your eligibility.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 px-6 bg-surface-gray/40">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-border-beige p-10 md:p-16 text-center"
            >
              <div className="w-14 h-14 bg-near-black text-white flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Received</h2>
              <p className="text-near-black/60 leading-relaxed max-w-md mx-auto">
                Thank you for applying. If you're eligible, our team will reach out to you with the next steps. Keep an eye on your email and WhatsApp.
              </p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Eligibility notice */}
              <div className="flex items-start gap-4 bg-soft-pink border border-border-beige p-5 md:p-6 mb-8">
                <div className="w-9 h-9 bg-brand-pink text-white flex items-center justify-center shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <p className="text-sm md:text-base text-near-black/80 leading-relaxed">
                  This application is strictly for past &amp; current students of Thrive Africa. Applications from non-students will not be processed. If eligible, please complete the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white border border-border-beige p-6 md:p-10 lg:p-12">
                {/* Honeypot — spam protection (hidden from users) */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input type="hidden" name="_source" value="internship-application" />

                {/* Personal Information */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">01</div>
                    <h3 className="text-lg md:text-xl font-bold">Personal Information</h3>
                    <div className="h-px flex-1 bg-border-beige" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="fullName">Full Name <span className="text-brand-pink">*</span></label>
                      <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={fieldClass} />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="email">Email Address <span className="text-brand-pink">*</span></label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="phone">Phone Number <span className="text-brand-pink">*</span></label>
                      <input id="phone" name="phone" type="tel" required placeholder="Enter your phone number" className={fieldClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="whatsapp">WhatsApp Number <span className="text-brand-pink">*</span></label>
                      <input id="whatsapp" name="whatsapp" type="tel" required placeholder="Enter your WhatsApp number" className={fieldClass} />
                    </div>
                  </div>
                </div>

                {/* Stage 1 enrolment */}
                <div className="mb-10">
                  <label className={labelClass}>
                    Have you already enrolled in our Stage 1 Internship? <span className="text-brand-pink">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 px-4 py-3 border border-border-beige cursor-pointer hover:bg-surface-gray/60 transition-colors flex-1">
                        <input type="radio" name="stageOneEnrolled" value={opt} required className="accent-near-black" />
                        <span className="text-sm font-medium">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cohort Information */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink">02</div>
                    <h3 className="text-lg md:text-xl font-bold">Cohort Information</h3>
                    <div className="h-px flex-1 bg-border-beige" />
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="course">Which course did you enroll in with us?</label>
                      <input id="course" name="course" type="text" placeholder="e.g. CyberSecurity" className={fieldClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="cohort">Which cohort and year did you graduate?</label>
                      <input id="cohort" name="cohort" type="text" placeholder="e.g. March Cohort, 2026" className={fieldClass} />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mb-5 px-4 py-3 bg-soft-pink border border-brand-pink/40 text-sm text-near-black/80">
                    {error}
                  </div>
                )}

                <LuxuryButton className="w-full">{submitting ? 'Submitting…' : 'Submit Application'}</LuxuryButton>
                <p className="text-xs text-near-black/40 mt-4 text-center">
                  Fields marked <span className="text-brand-pink">*</span> are required.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
