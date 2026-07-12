import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const achievements = [
  { label: '100+ DSA Problems', desc: 'Solved across LeetCode and GeeksforGeeks, covering arrays, link-list,stack, queue and more.' },
  { label: 'Problem-First Mindset', desc: 'Every feature I build starts with understanding the problem deeply before writing a single line of code.' },
  { label: 'Consistent Learner', desc: 'Actively learning system design, advanced backend patterns, and cloud deployment strategies.' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Education & Achievements" title="Background" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
          >
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Education
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text)' }}
              >
                🎓
              </div>
              <div>
                <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Mahakal Institute of Technology, Ujjain
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-md border font-medium"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-secondary)' }}
                  >
                    CGPA: 7.35 / 10
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-md border font-medium"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-secondary)' }}
                  >
                    Aug 2022 – Jun 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl border"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
          >
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Coding & Achievements
            </div>

            <div className="space-y-4">
              {achievements.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--text-muted)' }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{label}</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
