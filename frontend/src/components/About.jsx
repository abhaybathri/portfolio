import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const stats = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '15+', label: 'REST APIs Built' },
  { value: '300+', label: 'DSA Problems Solved' },
  { value: '2+', label: 'Years of Experience' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I'm a Computer Science student with a strong foundation in Full Stack development,
              specializing in the MERN stack. I build real-world, production-grade applications
              that are fast, scalable, and maintainable.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              My approach combines solid engineering principles with clean UI — I care about both
              the code quality and the user experience. Whether it's architecting REST APIs,
              managing complex state, or optimizing frontend performance, I bring the same
              attention to detail across the stack.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Alongside development, I actively practice Data Structures & Algorithms, which
              sharpens my problem-solving and helps me write more efficient code. I'm open to
              freelance projects and full-time opportunities where I can contribute meaningfully
              from day one.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['MERN Stack', 'REST APIs', 'DSA', 'Freelance Ready'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-6 rounded-xl border text-center"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
              >
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  {value}
                </div>
                <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
