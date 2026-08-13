import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import { validateEmail } from '../utils/validation';

export default function Contact() {
  useDocumentTitle('Contact - CaptionFlow');

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!validateEmail(form.email)) errs.email = 'Enter a valid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">Message Sent</h2>
          <p className="mt-2 text-ink-soft">
            Thanks for reaching out! Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            subtitle="Have a question about CaptionFlow? Our team is here to help."
          />
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-6 sm:p-8 shadow-card backdrop-blur">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-ink bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-400' : 'border-surface-200'}`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-ink bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-400' : 'border-surface-200'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-ink bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${errors.subject ? 'border-red-400' : 'border-surface-200'}`}
                placeholder="How can we help?"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-ink bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none ${errors.message ? 'border-red-400' : 'border-surface-200'}`}
                placeholder="Tell us what you're posting and what you need..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="btn-glow w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:brightness-105"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-muted">
            Or email us directly at{' '}
            <a href="mailto:support@captionflow.online" className="text-primary hover:underline">
              support@captionflow.online
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
