import { Code2, Layers3 } from 'lucide-react';
import { sourceNodes } from '../data/constants';
import Reveal from './Reveal';

export default function FabricOverview() {
  return <section className="section-pad overview" id="about"><Reveal><div className="section-heading"><div><span className="eyebrow">01 / DATA FABRIC</span><h2>One fabric.<br /><span>Every data environment.</span></h2></div><p>DataWeaveX connects distributed enterprise systems into a unified data environment, making information easier to access, transform and operationalize.</p></div></Reveal><div className="source-grid">{sourceNodes.concat([{ label: 'API', icon: Code2, x: 50, y: 88 }, { label: 'WAREHOUSE', icon: Layers3, x: 50, y: 14 }]).map(({ label, icon: Icon }) => <Reveal key={label} delay={0.05 * sourceNodes.findIndex((node) => node.label === label)}><div className="source-card"><Icon size={20} /><span>{label}</span></div></Reveal>)}</div><div className="fabric-bridge"><span /><span /><div><span className="status-dot" /> DATAWEAVEX <small>UNIFIED FABRIC</small></div><span /><span /></div></section>;
}
