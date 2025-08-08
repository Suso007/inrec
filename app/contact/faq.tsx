'use client';

import { useMemo, useState } from 'react';

type FAQ = { question: string; answer: string };


export default function FAQSection() {

    const faqs: FAQ[] = [
  {
    question: 'What software solutions do you offer?',
    answer:
      'We offer comprehensive software solutions including Time & Attendance Management, Canteen Management, Hostel Management, and custom software development. All solutions can be integrated with Microsoft technologies and cloud services.',
  },
  {
    question: 'What are the benefits of being a Microsoft partner?',
    answer:
      'As a Microsoft partner, we provide exclusive access to Azure cloud services, Office 365 integration, Power Platform development, enterprise-grade security, and ongoing Microsoft support with competitive pricing.',
  },
  {
    question: 'Do you provide pilot training and certification?',
    answer:
      'Yes, we offer complete training programs including Part 107 commercial pilot certification, advanced flight operations, safety protocols, and ongoing recertification programs.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve multiple industries including education, healthcare, agriculture, construction, security, energy, and corporate enterprises. Each solution is customized for specific industry requirements.',
  },
  {
    question: 'Do you offer international support?',
    answer:
      'Yes, we have offices in the US, Europe, and partnerships worldwide. We provide global support for our products and services with local expertise and Microsoft technology backing.',
  },
  {
    question: 'How long does it take to implement a solution?',
    answer:
      'Implementation time varies: software solutions typically take 4–8 weeks, drone deployments 2–4 weeks, and custom development projects 8–12 weeks including design, testing, and training.',
  },
];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  return (
    <section className="py-20 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-blue-50">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Quick answers to common questions. Can’t find what you need? Reach out and we’ll help.
          </p>

          {/* Search */}
          <div className="mt-6 relative mx-auto max-w-lg">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3 pl-11 shadow-sm outline-none ring-0 transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-3.6-3.6" />
            </svg>
          </div>
        </header>

        <div className="grid gap-4 md:gap-5">
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-6 text-center text-slate-600">
              No results. Try a different search.
            </div>
          )}

          {filtered.map((item, i) => {
            const active = openIndex === i;
            return (
              <div
                key={i}
                className={`group rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-300 ${
                  active
                    ? 'border-blue-300 shadow-[0_10px_30px_rgba(59,130,246,0.15)]'
                    : 'border-slate-200 hover:border-blue-200 hover:shadow-[0_6px_20px_rgba(2,6,23,0.06)]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(active ? null : i)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-start gap-4"
                  aria-expanded={active}
                >
                  <span
                    className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                      active
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-slate-300 bg-white text-slate-500 group-hover:border-blue-300'
                    }`}
                  >
                    <svg
                      className={`h-3.5 w-3.5 transition-transform ${active ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                      {item.question}
                    </h3>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-2 pt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Divider */}
                <div className="px-5 sm:px-6 pb-4">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {active ? 'Showing answer' : 'Click to reveal answer'}
                    </span>
                    <a href="/contact" className="font-medium text-blue-600 hover:underline">
                      Still need help?
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:shadow-md hover:border-blue-300"
          >
            Contact support
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Open a ticket
          </a>
        </div>
      </div>
    </section>
  );
}
