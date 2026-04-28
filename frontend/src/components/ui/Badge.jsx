export default function Badge({ children }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border"
      style={{
        borderColor: 'var(--border)',
        color: 'var(--text-muted)',
        backgroundColor: 'var(--bg-secondary)',
      }}>
      {children}
    </span>
  );
}
