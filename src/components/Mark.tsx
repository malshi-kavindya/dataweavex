import { Link } from 'react-router-dom';

export default function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className={`brand ${compact ? 'brand-compact' : ''}`}>
      <span className="brand-mark"><i /><i /><i /></span>
      <span>DATA<span className="brand-accent">WEAVE</span>X</span>
    </Link>
  );
}
