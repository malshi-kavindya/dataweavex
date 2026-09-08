import { BrainCircuit, Network, Sparkles, Zap } from 'lucide-react';

export default function Strip() {
  return <div className="signal-strip"><div><Sparkles size={16} /><span><b>AI-POWERED</b> DATA TRANSFORMATION</span></div><div><Network size={16} /><span><b>ENTERPRISE</b> DATA FABRIC</span></div><div><Zap size={16} /><span><b>HIGH-SPEED</b> PROCESSING</span></div><div><BrainCircuit size={16} /><span><b>AI-READY</b> DATA</span></div></div>;
}
