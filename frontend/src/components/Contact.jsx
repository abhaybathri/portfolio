import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';

const socials = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'abhay7728bahtri@gmail.com', href: 'mailto:abhay7728bahtri@gmail.com' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'abhay-bathri', href: 'https://www.linkedin.com/in/abhay-bathri-414b99237' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'abhaybathri', href: 'https://github.com/abhaybathri' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    // Mailto fallback — no backend needed
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:abhay7728bahtri@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great Together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I'm currently open to freelance projects and full-time roles. Whether you need a
              complete web application, a backend API, or just want to talk tech — reach out.
            </p>

            <div className="space-y-3">
              {socials.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-colors duration-200"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--card)' }}
                  >
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-sm font-medium group-hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { name: 'name', type: 'text', placeholder: 'Your name', label: 'Name' },
              { name: 'email', type: 'email', placeholder: 'your@email.com', label: 'Email' },
            ].map(({ name, type, placeholder, label }) => (
              <div key={name}>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200 focus:border-gray-400"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--card)',
                    color: 'var(--text)',
                  }}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200 focus:border-gray-400 resize-none"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--card)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80 active:scale-95 disabled:opacity-50"
              style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
            >
              <FiSend size={15} />
              {status === 'sent' ? 'Message Sent' : status === 'sending' ? 'Opening...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
