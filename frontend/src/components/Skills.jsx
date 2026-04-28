import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import { SKILLS } from '../data';

const categoryIcons = {
  Languages: <FiCode size={16} />,
  Frontend: <FiLayout size={16} />,
  Backend: <FiServer size={16} />,
  Databases: <FiDatabase size={16} />,
  'Tools & Cloud': <FiTool size={16} />,
  'Core CS': <FiCpu size={16} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="What I Work With"
          subtitle="A curated set of technologies I use to build full-stack applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(({ category, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-6 rounded-xl border group transition-colors duration-200"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--card)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                >
                  {categoryIcons[category]}
                </span>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md border font-medium"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
