import React from 'react';
import { motion } from 'framer-motion';
import './Advantages.css';

const Advantages = () => {
  // Stagger entry animations
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
  };

  return (
    <section className="arounda-results-section">
      <div className="advantages-radial-glow"></div>
      <div className="container results-container">
       

        {/* 3-Column Metrics Grid (No boxes, clean vertical columns exactly like the design) */}
        <motion.div 
          className="metrics-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={listVariants}
        >
          {/* Column 1: Engagement Rate */}
          <motion.div className="metric-column column-engagement" variants={colVariants}>
            {/* Top: Floating stickers */}
            <div className="floating-stickers">
              {/* WordPress capsule: White background, black text/icon */}
              <div className="sticker sticker-wp">
                <span className="sticker-icon-wrapper wp-black">
                  <svg className="brand-svg" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="M12.158 12.786l-2.698 7.84a9.755 9.755 0 01-2.183-.933l4.881-14.137zm6.744 5.253a9.782 9.782 0 01-3.692 2.87l3.197-8.995c.574 1.706.574 3.731.495 6.125zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm.18-22.846c.928 0 1.954.218 2.698.81-.462.066-.99.33-1.386.726-.462.462-.726.99-.792 1.584-.066.66-.066 1.386.132 2.046l1.32 4.488c.198.66.528 1.452.858 2.046a9.761 9.761 0 01-2.83 5.478L9.042 3.84c.858-.462 1.98-.686 3.138-.686z"/>
                  </svg>
                </span>
                <span className="sticker-label">WordPress.com</span>
              </div>

              {/* Galaxy capsule: White background, black text/icon */}
              <div className="sticker sticker-galaxy">
                <span className="sticker-icon-wrapper galaxy-black">
                  <svg className="brand-svg" viewBox="0 0 24 24" width="13" height="13">
                    <path fill="currentColor" d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
                  </svg>
                </span>
                <span className="sticker-label">Galaxy</span>
              </div>

              {/* Flair capsule: Purple background, white text/icon */}
              <div className="sticker sticker-flair">
                <span className="sticker-icon-wrapper flair-white">
                  <svg className="brand-svg" viewBox="0 0 24 24" width="13" height="13">
                    <path fill="currentColor" d="M12 2L2 12l10 10 10-10L12 2z"/>
                  </svg>
                </span>
                <span className="sticker-label">Flair</span>
              </div>
            </div>

            {/* Middle: Large value */}
            <h3 className="metric-value">+170%</h3>

            {/* Bottom: Title & Description */}
            <h4 className="metric-eyebrow">Engagement Rate</h4>
            <p className="metric-desc">
              Intuitive flows that turn clicks into leads
            </p>
          </motion.div>

          {/* Column 2: Revenue Growth */}
          <motion.div className="metric-column column-revenue" variants={colVariants}>
            {/* Top: Overlapping bubbles */}
            <div className="revenue-bubbles">
              {/* GT Protocol bubble: Dark background */}
              <div className="rev-bubble bubble-gt">
                <div className="bubble-icon-wrapper gt-icon">
                  <svg className="bubble-svg" viewBox="0 0 24 24" width="12" height="12">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                    <path fill="currentColor" d="M8 12h8v2H8z"/>
                  </svg>
                </div>
                <div className="bubble-info">
                  <span className="bubble-label">$1.5 M</span>
                  <span className="bubble-client">GT Protocol</span>
                </div>
              </div>

              {/* Mojo CX bubble: Green background */}
              <div className="rev-bubble bubble-mojo">
                <div className="bubble-icon-wrapper mojo-icon">
                  <svg className="bubble-svg" viewBox="0 0 24 24" width="12" height="12">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <div className="bubble-info">
                  <span className="bubble-label">$2.3M</span>
                  <span className="bubble-client">Mojo CX</span>
                </div>
              </div>

              {/* Myso Finance bubble: Dark background */}
              <div className="rev-bubble bubble-myso">
                <div className="bubble-icon-wrapper myso-icon">
                  <svg className="bubble-svg" viewBox="0 0 24 24" width="12" height="12">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <div className="bubble-info">
                  <span className="bubble-label">$2.4M</span>
                  <span className="bubble-client">Myso Finance</span>
                </div>
              </div>
            </div>

            {/* Middle: Large value */}
            <h3 className="metric-value">4.6x</h3>

            {/* Bottom: Title & Description */}
            <h4 className="metric-eyebrow">Revenue Growth After Redesign</h4>
            <p className="metric-desc">
              Product improvements that scale business impact
            </p>
          </motion.div>

          {/* Column 3: Churn Rate */}
          <motion.div className="metric-column column-churn" variants={colVariants}>
            {/* Top: Visual chart element */}
            <div className="churn-visual-element">
              <div className="bar-chart-mini">
                <div className="chart-bar bar-1"></div>
                <div className="chart-bar bar-2"></div>
                <div className="chart-bar bar-3"></div>
                <div className="chart-bar bar-4 active-lime"></div>
              </div>
              
              {/* Saved Pill capsule with actual overlapping avatars and stacked labels */}
              <div className="saved-pill">
                <div className="saved-avatars">
                  <img className="avatar av-1" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="Client 1" />
                  <img className="avatar av-2" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="Client 2" />
                  <img className="avatar av-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" alt="Client 3" />
                </div>
                <div className="saved-info">
                  <span className="saved-label-big">12K</span>
                  <span className="saved-label-sub">SAVED</span>
                </div>
              </div>
            </div>

            {/* Middle: Large value */}
            <h3 className="metric-value">-37%</h3>

            {/* Bottom: Title & Description */}
            <h4 className="metric-eyebrow">Churn Across SaaS Clients</h4>
            <p className="metric-desc">
              Better onboarding, better UX, fewer cancellations
            </p>
          </motion.div>
        </motion.div>

        {/* Small Bottom Features Row (Immediate Hiring, Deliverables, etc.) */}
        <div className="results-features-row">
          <div className="res-feat-item">
            <span className="res-feat-bullet">•</span>
            <span className="res-feat-text">Hiring system with immediate start</span>
          </div>
          <div className="res-feat-item">
            <span className="res-feat-bullet">•</span>
            <span className="res-feat-text">Guaranteed on-time deliverables</span>
          </div>
          <div className="res-feat-item">
            <span className="res-feat-bullet">•</span>
            <span className="res-feat-text">Flexible collaboration & fixed monthly rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
