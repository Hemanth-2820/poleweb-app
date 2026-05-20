import React from 'react';
import './Advantages.css';
import {
  Layers, Cpu, ShieldCheck, TrendingUp, Zap, BarChart3, Users, Headset
} from 'lucide-react';

const cards = [
  {
    icon: Layers,
    title: 'End-to-End Digital Ecosystems',
  },
  {
    icon: Cpu,
    title: 'Future-Proof Technology Stack',
  },
  {
    icon: TrendingUp,
    title: 'AI & Automation Excellence',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable Infrastructure',
  },
  {
    icon: Zap,
    title: 'Rapid Market Launch Strategy',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Performance Growth',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team Support',
  },
  {
    icon: Headset,
    title: '24/7 Ongoing Maintenance',
  }
];

const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-header">
          <span className="advantages-eyebrow">Why Choose Us</span>
          <h2 className="advantages-title">
            Our Key <span className="advantages-title-accent">Advantages</span>
          </h2>
        </div>

        <div className="advantages-badges-grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div className="adv-badge-container" key={index}>
                <div className="adv-badge-circle">
                  <div className="badge-laurel-wrapper">
                    {/* SVG Laurel Wreath */}
                    <svg className="laurel-svg" viewBox="0 0 100 60">
                      <path d="M20,50 Q10,30 25,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M80,50 Q90,30 75,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="20" cy="45" r="2" fill="currentColor" />
                      <circle cx="15" cy="35" r="2" fill="currentColor" />
                      <circle cx="15" cy="25" r="2" fill="currentColor" />
                      <circle cx="20" cy="15" r="2" fill="currentColor" />
                      <circle cx="80" cy="45" r="2" fill="currentColor" />
                      <circle cx="85" cy="35" r="2" fill="currentColor" />
                      <circle cx="85" cy="25" r="2" fill="currentColor" />
                      <circle cx="80" cy="15" r="2" fill="currentColor" />
                    </svg>
                    <div className="badge-inner-icon">
                      <Icon size={32} />
                    </div>
                  </div>
                  <div className="badge-content">
                    <p className="badge-text">{card.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
