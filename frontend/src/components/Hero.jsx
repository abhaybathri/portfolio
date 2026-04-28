import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
const resumeFile = '/Abhay_Bathri_Resume.docx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.4,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl w-full text-center"
      >
        <motion.div variants={item}>
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border mb-8"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-secondary)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for freelance & full-time
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ color: 'var(--text)' }}
        >
          Abhay Bathri
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl font-medium mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          Full Stack Developer &nbsp;·&nbsp; MERN Stack Specialist
        </motion.p>

        <motion.p
          variants={item}
          className="text-base max-w-xl mx-auto mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          Building scalable, production-ready web applications. Turning complex problems into clean, performant solutions.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link to="projects" smooth duration={500} offset={-64}>
            <button
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
            >
              View Projects
            </button>
          </Link>

          <a
            href={resumeFile}
            download="Abhay_Bathri_Resume.docx"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:opacity-70 active:scale-95"
            style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'transparent' }}
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {[
            { href: 'https://github.com/abhaybathri', icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/abhay-bathri-414b99237', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:abhay7728bahtri@gmail.com', icon: <FiMail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-all duration-200 hover:opacity-60"
              style={{ color: 'var(--text-muted)' }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} offset={-64} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ color: 'var(--text-muted)' }}
          >
            <HiArrowDown size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
