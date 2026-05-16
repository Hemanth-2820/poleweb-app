import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import './Industries.css';

const industries = [
  { name: 'Fintech & Digital Banking', desc: 'Secure transaction systems, wealth management dashboards, and automated reporting.' },
  { name: 'Healthcare & MedTech', desc: 'Patient record management, QR health cards, and telemedicine platforms.' },
  { name: 'SaaS & AI Startups', desc: 'Scalable cloud architectures, automated workflows, and AI-driven analytics.' },
  { name: 'Real Estate & PropTech', desc: 'Property management systems, immersive listing portals, and CRM solutions.' },
  { name: 'E-Commerce & Retail', desc: 'Multi-vendor marketplaces, inventory tracking, and seamless checkout flows.' },
  { name: 'Hospitality & Restaurants', desc: 'POS management, online ordering systems, and table reservation tech.' }
];

const Industries = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="industries-section">
      <div className="container-wide">
        <div className="industries-header-ultra">
          <span className="ind-eyebrow-tag">INDUSTRIES WE SERVE (2024-25)</span>
          
          <h2 className="ind-display-title">
            Transforming Complex <br />
            <span className="ind-title-serif">Industries.</span>
          </h2>
          
          <div className="ind-sub-row">
            <p className="ind-display-desc">
              We partner with visionary companies across India and internationally <br />
              to build high-performance digital products and platforms.
            </p>
            <button 
              className={`ind-toggle-btn ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'CLOSE INDUSTRIES' : 'VIEW ALL INDUSTRIES'} 
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </div>

        <div className={`industries-expand-container ${isOpen ? 'is-open' : ''}`}>
          <div className="industries-minimal-grid">
            {industries.map((ind, idx) => (
              <div 
                className="ind-minimal-card" 
                key={idx}
                style={{ transitionDelay: isOpen ? `${idx * 0.1}s` : '0s' }}
              >
                <div className="ind-card-content">
                  <span className="ind-number">0{idx + 1}</span>
                  <div className="ind-title-wrapper">
                    <h3 className="ind-minimal-title">{ind.name}</h3>
                    <div className="ind-hover-line"></div>
                  </div>
                  <p className="ind-minimal-desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
