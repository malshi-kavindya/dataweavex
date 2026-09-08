import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Mark from './Mark';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [['Features', '#features'], ['Pricing', '#pricing'], ['FAQ', '#faq'], ['About', '#about'], ['Contact', '#contact']];
  return (
    <header className="nav-wrap">
      <nav className="nav-shell">
        <Mark compact />
        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          {items.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <Link to="/product" className="nav-product">Open platform <ArrowUpRight size={15} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
    </header>
  );
}
