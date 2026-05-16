import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Smartphone, Layers, LayoutGrid, PenTool, Star, Zap, Monitor, Globe, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Stagger variants for the title elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  // Continuous floating animation for icons
  const floatAnimation = {
    y: ["-10%", "10%"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-dark-overlay"></div>
      <div className="container hero-container">
        
        {/* Abstract Glows - Upgraded to Brand Colors */}
        <div className="hero-visuals">
          <motion.div 
            className="glow-orb orb-1"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="glow-orb orb-2"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="hero-subtitle">
            <span className="subtitle-glow"></span>
            DIGITAL SOLUTIONS • CLOUD • AI • DEVELOPMENT
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-title-massive">
            Building <span className="pill hover-trigger group-brand">
              Scalable
              <span className="floating-icons">
                <motion.span animate={floatAnimation} className="float-icon icon-1"><PenTool size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '0.5s' }} className="float-icon icon-2"><Star size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '1s' }} className="float-icon icon-3"><Zap size={18} /></motion.span>
              </span>
            </span> <span className="pill hover-trigger group-website">
              Digital
              <span className="floating-icons">
                <motion.span animate={floatAnimation} className="float-icon icon-1"><Monitor size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '0.3s' }} className="float-icon icon-2"><Globe size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '0.8s' }} className="float-icon icon-3"><Code size={18} /></motion.span>
              </span>
            </span> <span className="pill hover-trigger group-uiux">
              Solutions
              <span className="floating-icons">
                <motion.span animate={floatAnimation} className="float-icon icon-1"><Smartphone size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '0.6s' }} className="float-icon icon-2"><Layers size={18} /></motion.span>
                <motion.span animate={floatAnimation} style={{ animationDelay: '0.2s' }} className="float-icon icon-3"><LayoutGrid size={18} /></motion.span>
              </span>
            </span><br/>
            
            <span className="inline-video-card group">
              <span className="inline-video-bg"></span>
              <span className="video-card-overlay"></span>
              <span className="inline-play-btn">
                <span className="play-pulse"></span>
                Start Project <ArrowRight size={14} color="#000" strokeWidth={3} />
              </span>
            </span> For Modern <span className="italic-purple hover-scale text-gradient-orange">Businesses</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="hero-bottom-info">
            <div className="info-block glass-panel">
              <span className="panel-corner c-tl"></span>
              <span className="panel-corner c-tr"></span>
              <span className="panel-corner c-bl"></span>
              <span className="panel-corner c-br"></span>
              <span className="code-icon glow-text">{"{/}"}</span>
              <p className="info-title">Web Development, Cloud Infrastructure, AI Automation & Business Growth Solutions</p>
              <p className="info-desc">Pole Web is a modern digital solutions company helping startups, businesses and growing brands build scalable websites, custom software systems, cloud infrastructure, AI-powered automation and performance-driven digital platforms.</p>
              <div className="tags-container">
                {['Web Development', 'AWS & DevOps', 'AI Automation', 'Digital Marketing', 'Cloud Solutions', 'E-Commerce', 'API Integrations', 'Security'].map(tag => (
                  <span key={tag} className="tag premium-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="info-block-right">
              <div className="info-text glass-panel-sm">
                <span className="panel-corner c-tl"></span>
                <span className="panel-corner c-tr"></span>
                <span className="panel-corner c-bl"></span>
                <span className="panel-corner c-br"></span>
                <span className="code-icon glow-text">{"{/}"}</span>
                <p className="info-title">Trusted technology solutions for modern businesses.</p>
                <p className="info-desc">We combine development, DevOps, AI technologies and marketing strategies to create complete business solutions designed for long-term growth.</p>
              </div>
              <motion.a 
                href="/contact" 
                className="btn-book-wrapper group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="btn-arrow-circle">
                  <ArrowDownRight size={20} color="#000" strokeWidth={2.5} style={{ transition: 'transform 0.3s' }} />
                </div>
                <div className="btn-text-pill">
                  <span className="btn-shine"></span>
                  Book a Free Consultation
                </div>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
