import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { IMG } from '../data/constants';
import Reveal from './Reveal';
import MetricCard from './MetricCard';

export default function Hero() {
  return (
    <section className="hero-image">
      <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <Reveal><span className="eyebrow cyan-text">AI DATA FABRIC / TRANSFORMATION PLATFORM</span></Reveal>
        <Reveal delay={0.08}><h1>Weave your<br /><em>data</em> into<br />intelligence.</h1></Reveal>
        <Reveal delay={0.16}><p>An AI-powered data fabric for connecting, transforming, enriching and preparing enterprise data for analytics and AI.</p></Reveal>
        <Reveal delay={0.22}><div className="hero-actions"><a className="button button-primary" href="#features">Explore platform <ArrowRight size={16} /></a><Link className="button button-quiet" to="/product"><Play size={15} /> View product</Link></div></Reveal>
      </div>
      <div className="hero-floats">
        <MetricCard className="metric-a" label="Connected sources" value="128" note="↑ 12.4% this month" />
        <MetricCard className="metric-b" label="Active pipelines" value="42" note="38 running · 4 processing" />
        <MetricCard className="metric-c" label="Data readiness" value="94.8%" note="AI ready" />
        <MetricCard className="metric-d" label="Processing today" value="8.4 TB" note="+18.2% volume" />
      </div>
      <div className="hero-scroll"><span>SCROLL</span><i /></div>
    </section>
  );
}
