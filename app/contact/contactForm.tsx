'use client';

import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

// Drop this component into any Next.js page (App Router compatible)
// Example: app/contact/page.tsx -> export default function Page() { return <InquiryForm /> }

export default function InquiryForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: 50000,
    details: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const maxChars = 500;

  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(form.email), [form.email]);
  const isPhoneValid = useMemo(() => form.phone.trim().length >= 7, [form.phone]);
  const requiredOk =
    form.fullName.trim() && isEmailValid && isPhoneValid && form.service.trim() && form.details.trim();

  function formatMoney(n: number) {
    return n >= 1000 ? `₹${n.toLocaleString()}` : `₹${n}`;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === 'budget' ? Number(value) : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, service: true, details: true });
    if (!requiredOk) return;

    try {
      setSubmitting(true);
      // TODO: Replace with your real endpoint
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success("Thanks! We'll get back to you shortly.");
      setForm({ fullName: '', email: '', phone: '', company: '', service: '', budget: 5000, details: '' });
      setTouched({});
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-indigo-100 bg-white shadow-[0_10px_30px_rgba(31,38,135,0.12)] p-5 sm:p-7 md:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Send us your project details</h2>

          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                placeholder="Enter your full name"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 bg-white ${
                  touched.fullName && !form.fullName.trim() ? 'border-pink-400' : 'border-gray-200'
                }`}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-pink-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="your@email.com"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 bg-white ${
                  touched.email && !isEmailValid ? 'border-pink-400' : 'border-gray-200'
                }`}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-pink-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                placeholder="+1 (555) 123-4567"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 bg-white ${
                  touched.phone && !isPhoneValid ? 'border-pink-400' : 'border-gray-200'
                }`}
                required
              />
            </div>

            {/* Company (optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 bg-white"
              />
            </div>

            {/* Service */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested <span className="text-pink-600">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                onBlur={() => setTouched((t) => ({ ...t, service: true }))}
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 bg-white appearance-none ${
                  touched.service && !form.service.trim() ? 'border-pink-400' : 'border-gray-200'
                }`}
                required
              >
                <option value="">Select a service</option>
                <option value="software-development">Custom Software Development</option>
                <option value="microsoft-solutions">Microsoft Solutions & Integration</option>
                <option value="drone-consultation">Drone Consultation & Strategy</option>
                <option value="training">Training Programs</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="time-attendance">Time & Attendance System</option>
                <option value="canteen-management">Canteen Management</option>
                <option value="hostel-management">Hostel Management</option>
                <option value="drone-purchase">Drone Purchase</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Estimated Budget</label>
              <span className="text-sm font-semibold text-indigo-700">{formatMoney(form.budget)}</span>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-600 font-medium mb-2">Budget Range</div>
              <input
                type="range"
                name="budget"
                min={10000}
                max={1000000}
                step={1000}
                value={form.budget}
                onChange={handleChange}
                className="w-full accent-indigo-600"
              />
              <div className="mt-2 flex justify-between text-[11px] text-gray-500">
                <span>₹1K</span>
                <span>₹250K</span>
                <span>₹500K</span>
                <span>₹750K</span>
                <span>₹1000K+</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">
                Project Details <span className="text-pink-600">*</span>
              </label>
              <span className="text-xs text-gray-500">({form.details.length}/{maxChars})</span>
            </div>
            <textarea
              name="details"
              value={form.details}
              onChange={(e) => {
                const val = e.target.value.slice(0, maxChars);
                setForm((f) => ({ ...f, details: val }));
              }}
              onBlur={() => setTouched((t) => ({ ...t, details: true }))}
              placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
              rows={5}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 resize-y bg-white ${
                touched.details && !form.details.trim() ? 'border-pink-400' : 'border-gray-200'
              }`}
              required
            />
          </div>

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={submitting}
              className="group relative w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-white font-semibold shadow-lg shadow-indigo-200/60 transition hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M3.4 20.4 22 12 3.4 3.6 3 10l11 2-11 2z" />
                </svg>
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </span>
            </button>
          </div>
        </form>
  );
}
