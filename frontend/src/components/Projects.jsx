import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { PROJECTS } from '../data';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col p-6 rounded-xl border transition-colors duration-200"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--card)',
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>
          <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-muted)' }}
            >
              <FiExternalLink size={17} />
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiGithub size={17} />
          </a>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-5 flex-1">
        {project.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-muted)' }} />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        {project.tech.map(t => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          subtitle="A selection of projects that showcase my full-stack capabilities."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://github.com/abhaybathri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border px-5 py-2.5 rounded-lg transition-opacity hover:opacity-70"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            <FiGithub size={16} />
            More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
