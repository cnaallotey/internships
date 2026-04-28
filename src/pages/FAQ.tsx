import { motion } from 'motion/react';
import FaqAccordion from '../components/ui/FaqAccordion';
import LuxuryButton from '../components/ui/LuxuryButton';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Thrive Internships?",
      answer: "Thrive Internships is a structured 3-Stage Career Acceleration System designed to take ambitious Africans from skill-building to global paid experience. We provide a bridge between digital learning and real-world employment."
    },
    {
      question: "Who can join Stage 1?",
      answer: "Stage 1 is currently open to past and current students of Thrive Africa, as well as students from the University of Cape Coast (UCC). We plan to expand this eligibility in the coming months."
    },
    {
      question: "Is it remote?",
      answer: "Yes, all stages of our program support remote participation. Stage 2 specifically focuses on remote internships with global companies, while Stage 3 offers both remote and in-person opportunities depending on the partner company."
    },
    {
      question: "Is Stage 3 paid?",
      answer: "Yes! Stage 3 is a paid internship program. In additional to a monthly salary, participants receive support for visa sponsorship and housing if the role is in-person."
    },
    {
      question: "How do I apply?",
      answer: "You can apply through our official application page or by attending one of our regular Live Q&A sessions where we explain the system in detail and provide application guidance."
    },
    {
      question: "How long does each stage last?",
      answer: "Stage 1 is a 2-month intensive. Stage 2 typically lasts 2-3 months. Stage 3 is a longer placement ranging from 6 months to 1 year."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-32 px-6 bg-surface-gray/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">FAQ</h1>
            <p className="text-xl text-near-black/60 leading-relaxed">
              Everything you need to know about the Thrive 3-Stage System.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <FaqAccordion question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-soft-pink rounded-3xl p-12 md:p-24 text-center border border-border-beige">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Still have questions?</h2>
          <p className="text-lg text-near-black/60 mb-12 max-w-2xl mx-auto">
            Our team is ready to help you navigate your career journey. Join our next live session or start your application today.
          </p>
          <div className="flex flex-col sm:row items-center justify-center gap-6">
            <LuxuryButton>Join Live Q&A</LuxuryButton>
            <LuxuryButton variant="ghost">Apply Now</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
