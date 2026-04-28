import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 sm:px-6 border-t"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Abhay Bathri. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhaybathri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-bathri-414b99237"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
