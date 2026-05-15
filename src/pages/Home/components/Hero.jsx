import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        {/* Abstract Glows */}
        <div className="hero-visuals">
          <motion.div 
            className="glow-orb orb-1"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="glow-orb orb-2"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-subtitle">Digital Product Design And Development Company</p>
          
          <h1 className="hero-title-massive">
            Your design & dev partner that<br/>
            unites <span className="pill">brand</span>, <span className="pill">website</span>, <span className="pill">ui/ux design</span><br/>
            <span className="inline-video-card">
              <span className="inline-video-bg"></span>
              <span className="inline-play-btn">Play <Play size={12} fill="#fff" strokeWidth={0} /></span>
            </span> into a holistic <span className="italic-purple">product</span>
          </h1>
          
          <div className="hero-bottom-info">
            <div className="info-block">
              <span className="code-icon">{"{/}"}</span>
              <p>Works closely with reputable brands,<br/>businesses and fortune 500 companies.</p>
            </div>
            
            <div className="info-block">
              <span className="code-icon">{"{/}"}</span>
              <p>Since 2016, we've helped to achieve<br/>our clients' business goals.</p>
            </div>

            <div className="hero-actions">
              <motion.a 
                href="/contact" 
                className="btn-book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-arrow-box"><ArrowDownRight size={20} color="#000" /></span>
                <span className="btn-text">Book a Call</span>
              </motion.a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
