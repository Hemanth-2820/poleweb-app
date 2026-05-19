import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, TrendingUp, Landmark, Activity, Plus, Minus } from 'lucide-react';
import './Industries.css';

const industriesData = [
  {
    id: 0,
    name: 'Web 3, Blockchain',
    subtags: ['dApps', 'DeFi', 'Play2Earn', 'IoT'],
    desc: 'Custom dApps, secure smart contracts, and decentralized liquidity flows. Engineered in 2026 with strict consistency, rapid turnaround, and 100% client satisfaction structures.',
    icon: Sparkles,
    glowColor: '#cc99ff',
    metricName: 'Total Value Locked',
    metricValue: '$840M+'
  },
  {
    id: 1,
    name: 'AI & ML',
    subtags: ['AI Marketing', 'HR & AI', 'Crypto AI', 'Education AI'],
    desc: 'We think deeply before executing, delivering intelligent conversational chatbots, predictive neural modeling, and automated customer assistance integrations at high speeds with flawless quality.',
    icon: TrendingUp,
    glowColor: '#bdfa5a',
    metricName: 'Tokens Analyzed',
    metricValue: '4.8B / sec'
  },
  {
    id: 2,
    name: 'SaaS',
    subtags: ['CRM', 'HR', 'AI', 'ERP', 'Automation tools'],
    desc: 'Multi-tenant high-performance administration panels, billing ledgers, and automated SaaS pipelines. Built with bulletproof consistency and rapid delivery times to guarantee 100% satisfaction.',
    icon: Shield,
    glowColor: '#00f0ff',
    metricName: 'Uptime SLA',
    metricValue: '99.99%'
  },
  {
    id: 3,
    name: 'Fintech',
    subtags: ['Banking', 'Trading', 'Exchanges', 'IoT'],
    desc: 'Secure consumer-grade banking dashboards, real-time POS systems, and trading exchanges. Our thorough strategic planning ensures rapid delivery and perfect compliance checks.',
    icon: Landmark,
    glowColor: '#ffffff',
    metricName: 'Daily Transactions',
    metricValue: '10M+'
  },
  {
    id: 4,
    name: 'Healthcare & Wellness',
    subtags: ['Mental health', 'Insurance', 'Fitness'],
    desc: 'Proactively designed telehealth portals, secure patient medical record registers, and fitness trackers. Delivered with rapid precision and uncompromised quality to secure patient data perfectly.',
    icon: Activity,
    glowColor: '#ff9999',
    metricName: 'Records Secured',
    metricValue: '5.4M'
  }
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentInd = industriesData[activeIndex];

  return (
    <section className="arounda-industries-section">
      <div className="industries-radial-glow"></div>
      <div className="container-wide industries-container">
        {/* Split Grid */}
        <div className="industries-grid">
          {/* Left Column: Premium Interactive Mockup */}
          <div className="industries-mockup-col">
            <div className="ind-mockup-frame">
              <div 
                className="ind-mockup-inner"
                style={{ 
                  '--glow-color': currentInd.glowColor,
                  boxShadow: `0 20px 80px -10px ${currentInd.glowColor}1a`
                }}
              >
                {/* Glowing Aura */}
                <div className="ind-mockup-aura" style={{ backgroundColor: currentInd.glowColor }}></div>

                {/* Dashboard Frame Header */}
                <div className="ind-mock-header">
                  <div className="ind-dots">
                    <span className="ind-dot-red"></span>
                    <span className="ind-dot-yellow"></span>
                    <span className="ind-dot-green"></span>
                  </div>
                  <span className="ind-mock-title">{currentInd.name} Showcase</span>
                </div>

                {/* Mockup content pane */}
                <div className="ind-mock-body">
                  <div className="ind-mock-sidebar">
                    <div className="sidebar-circle-skele" style={{ borderColor: currentInd.glowColor }}>
                      {React.createElement(currentInd.icon, { size: 14, color: currentInd.glowColor })}
                    </div>
                    <div className="sidebar-rect-skele active-skele" style={{ backgroundColor: currentInd.glowColor }}></div>
                    <div className="sidebar-rect-skele"></div>
                    <div className="sidebar-rect-skele"></div>
                  </div>

                  <div className="ind-mock-content">
                    <div className="ind-content-header">
                      <div className="content-skele-line width-60"></div>
                      <div className="content-skele-line width-30"></div>
                    </div>

                    {/* Metrics card block inside left showcase */}
                    <div className="ind-showcase-metric-box">
                      <span className="metric-box-lbl">{currentInd.metricName}</span>
                      <span className="metric-box-val" style={{ color: currentInd.glowColor }}>
                        {currentInd.metricValue}
                      </span>
                    </div>

                    {/* Multi bar metrics */}
                    <div className="ind-grid-elements">
                      <div className="grid-el el-1">
                        <div className="el-bar-fill" style={{ height: '70%', backgroundColor: currentInd.glowColor }}></div>
                      </div>
                      <div className="grid-el el-2">
                        <div className="el-bar-fill" style={{ height: '40%', backgroundColor: currentInd.glowColor }}></div>
                      </div>
                      <div className="grid-el el-3">
                        <div className="el-bar-fill" style={{ height: '90%', backgroundColor: currentInd.glowColor }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title + Accordion List */}
          <div className="industries-accordion-col">
            <span className="ind-eyebrow-tag">INDUSTRIES</span>
            <h2 className="ind-section-title">
              Our experience matches <br />
              <span className="serif-italic-title">your market</span>
            </h2>
            <p className="ind-section-desc">
              Since starting our journey in 2026, Pole Web has engineered custom industry solutions with absolute consistency and elite quality. We think deeply before we code, deliver at rapid execution speeds, and guarantee 100% client satisfaction on every single deployment.
            </p>

            {/* Flat Link List Rows */}
            <div className="ind-accordion-rows">
              {industriesData.map((ind, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={ind.id} 
                    className={`ind-accordion-row ${isActive ? 'row-active' : ''}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {/* Header line of flat link list row */}
                    <div className="row-header">
                      <div className="row-title-side">
                        <span className="row-number">0{idx + 1}</span>
                        <h3 className="row-name">{ind.name}</h3>
                      </div>
                      <div className="row-tags-side">
                        <div className="tags-capsule-row">
                          {ind.subtags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className="subtag-pill">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
