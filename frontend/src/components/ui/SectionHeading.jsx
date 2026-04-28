import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase mb-3 block"
          style={{ color: 'var(--text-muted)' }}>
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
