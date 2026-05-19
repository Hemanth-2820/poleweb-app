import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, User } from 'lucide-react';
import './Works.css';

// Import project screenshots from src/assets folder
import jobInfo1 from '../../../assets/jobinfo.1.png';
import jobInfo2 from '../../../assets/jobinfo.2.png';
import healthCard1 from '../../../assets/healthcard.1.png';
import healthCard2 from '../../../assets/healthcard.2.png';
import food1 from '../../../assets/food.1.png';
import food2 from '../../../assets/food.2.png';

const casesData = [
  {
    id: 1,
    tag1: 'Full-Stack',
    tag2: '10k+ MAU',
    flag: 'IN',
    title: 'Jobs Information Portal (Full-Stack Career Platform)',
    quote: 'A modern job discovery platform for internships, fresher openings, and remote roles. Optimized for speed, SEO, and seamless user experience across all devices.\n\nTech Stack: Next.js, React, Tailwind CSS, Node.js, MongoDB, and TypeScript.',
    author: 'Career Lead',
    role: 'Product Analytics, Jobs Portal',
    appType: 'Career & Internship Dashboard',
    primaryColor: '#cc99ff',
    mockupClass: 'myso-mockup',
    laptopImg: jobInfo1,
    phoneImg: jobInfo2
  },
  {
    id: 2,
    tag1: 'Digital Health',
    tag2: '5k+ Records',
    flag: 'US',
    title: 'Health Card Platform (Digital Healthcare Solution)',
    quote: 'A comprehensive healthcare management system featuring digital health cards, QR-based records, and AI-powered health recommendations to provide affordable care.\n\nTech Stack: Next.js, React, Tailwind CSS, Node.js, MongoDB, and REST API.',
    author: 'Medical Admin',
    role: 'Director, Health Platform',
    appType: 'Digital Health Card System',
    primaryColor: '#bdfa5a',
    mockupClass: 'mojo-mockup',
    laptopImg: healthCard1,
    phoneImg: healthCard2
  },
  {
    id: 3,
    tag1: 'SaaS & POS',
    tag2: '30% Faster POS',
    flag: 'UK',
    title: 'Restaurant Management System (SaaS & POS Solution)',
    quote: 'A complete full-stack system designed to manage restaurant orders, menus, billing, inventory, and real-time sales analytics through a unified dashboard.\n\nTech Stack: Next.js, React, Tailwind CSS, Node.js, and MongoDB.',
    author: 'POS Lead',
    role: 'Operations Director, RMS',
    appType: 'Unified POS Dashboard',
    primaryColor: '#00f0ff',
    mockupClass: 'enzyme-mockup',
    laptopImg: food1,
    phoneImg: food2
  }
];

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  // Initially show only 2 cases, show all when showAll is true
  const visibleCases = showAll ? casesData : casesData.slice(0, 2);

  return (
    <section className="arounda-cases-section">
      <div className="works-radial-glow"></div>
      <div className="container cases-container">
        {/* Top Header Row */}
        <div className="cases-top-header">
          <span className="cases-eyebrow-label">OUR CASES</span>
        </div>

        {/* Case Rows Stacked Vertically */}
        <div className="cases-list-wrapper">
          {visibleCases.map((c, index) => (
            <motion.div 
              key={c.id}
              className="case-row-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="case-slide-split">
                {/* Left Column: Details & Testimonial */}
                <div className="case-details-col">
                  <div className="case-pill-tags">
                    <span className="case-tag">{c.tag1}</span>
                    <span className="case-tag">{c.tag2}</span>
                    <span className="case-flag-tag">{c.flag}</span>
                  </div>

                  <h3 className="case-display-title">
                    {c.title}
                  </h3>

                  <div className="case-divider"></div>

                  {/* Clutch Star Review Block */}
                  <div className="case-testimonial-block">
                    <div className="clutch-rating-row">
                      <span className="clutch-brand">Clutch</span>
                      <div className="clutch-stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s} className="star-star">★</span>
                        ))}
                      </div>
                    </div>
                    {/* Render newlines correctly using white-space styled paragraphs */}
                    <p className="case-quote-text" style={{ whiteSpace: 'pre-line' }}>
                      “{c.quote}”
                    </p>
                  </div>

                  {/* Profile Detail Row */}
                  <div className="case-author-footer">
                    <div className="author-avatar-badge" style={{ backgroundColor: c.primaryColor }}>
                      <User size={20} color="#030303" />
                    </div>
                    <div className="author-meta">
                      <span className="auth-name">{c.author}</span>
                      <span className="auth-role">{c.role}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Premium CSS Mockups (Desktop + Mobile) with Real Images */}
                <div className="case-mockup-col">
                  <div className="mockup-double-wrapper">
                    {/* Laptop Device Mockup */}
                    <div className="laptop-outer-frame">
                      <div className="laptop-screen">
                        <img 
                          src={c.laptopImg} 
                          alt={`${c.title} Desktop View`} 
                          className="mockup-screen-image"
                        />
                      </div>
                      <div className="laptop-hinge-base"></div>
                    </div>

                    {/* Phone Device Mockup */}
                    <div className="phone-outer-frame">
                      <div className="phone-speaker"></div>
                      <div className="phone-screen">
                        <img 
                          src={c.phoneImg} 
                          alt={`${c.title} Mobile View`} 
                          className="mockup-screen-image phone-screen-image"
                        />
                      </div>
                      <div className="phone-home-indicator"></div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Cases Footer CTA - Dynamically Toggles List Visibility */}
        <div className="cases-footer-cta">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="explore-cases-btn"
            style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
          >
            <span className="btn-lbl">{showAll ? 'Show less cases' : 'Explore all cases'}</span>
            <div 
              className="arrow-btn-circle"
              style={{ 
                transform: showAll ? 'rotate(90deg)' : 'none', 
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
            >
              <ArrowUpRight size={18} color="#000" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
