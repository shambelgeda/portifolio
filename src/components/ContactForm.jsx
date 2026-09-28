import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Mail } from 'lucide-react';

export default function ContactForm({ emailAddress }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'mailto-launched' | 'copied'
  const [copiedNotice, setCopiedNotice] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const validationErrors = validate();
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Build safe mailto link (no fake backend submission)
      const recipient = emailAddress || "shambelgeda.contact@example.com";
      const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi Shambel,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
      // Open user's default email client
      window.location.href = mailtoUrl;
      setSubmittedStatus('mailto-launched');
    }
  };

  const copyEmailDirectly = () => {
    const recipient = emailAddress || "shambelgeda.contact@example.com";
    navigator.clipboard.writeText(recipient).then(() => {
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 3000);
    });
  };

  return (
    <div className="bg-surface-card border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card">
      <div className="mb-6 pb-6 border-b border-slate-800">
        <h3 className="text-xl font-bold text-white mb-2">
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          This form initiates a direct <code className="text-brand-400 font-mono">mailto:</code> draft in your email application. No data is sent or stored on an external server.
        </p>
      </div>

      {submittedStatus === 'mailto-launched' && (
        <div className="mb-6 p-4 rounded-xl bg-brand-950/60 border border-brand-700/60 text-slate-200 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">Default email client opened!</p>
            <p className="text-xs text-slate-300 mt-1">
              Your message was prepared in your local email client. If it did not trigger automatically, you can copy the email directly below.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            aria-invalid={!!(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
            placeholder="e.g. Alex Smith"
            className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              touched.name && errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-brand-500'
            }`}
          />
          {touched.name && errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Your Email <span className="text-rose-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            aria-invalid={!!(touched.email && errors.email)}
            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            placeholder="e.g. alex@example.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              touched.email && errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-brand-500'
            }`}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Subject <span className="text-rose-400">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            onBlur={() => handleBlur('subject')}
            aria-invalid={!!(touched.subject && errors.subject)}
            aria-describedby={touched.subject && errors.subject ? "subject-error" : undefined}
            placeholder="e.g. Software Internship Opportunity / Project Collaboration"
            className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              touched.subject && errors.subject ? 'border-rose-500/80' : 'border-slate-800 focus:border-brand-500'
            }`}
          />
          {touched.subject && errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
            Message <span className="text-rose-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            aria-invalid={!!(touched.message && errors.message)}
            aria-describedby={touched.message && errors.message ? "message-error" : undefined}
            placeholder="Write your note, proposal, or inquiry here..."
            className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 resize-y ${
              touched.message && errors.message ? 'border-rose-500/80' : 'border-slate-800 focus:border-brand-500'
            }`}
          />
          {touched.message && errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-md shadow-brand-600/30 focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>

          <button
            type="button"
            onClick={copyEmailDirectly}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-mono text-xs text-slate-300 hover:text-white bg-surface-subtle hover:bg-surface-hover border border-slate-700/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {copiedNotice ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
