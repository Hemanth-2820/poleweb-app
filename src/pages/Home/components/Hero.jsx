import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Play, PenTool, Star, Zap, Monitor, Globe, Code, Layers, Smartphone, LayoutGrid, Folder, BarChart3 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Stagger animation variants for headings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  // Continuous gentle floating animation for icons inside tags
  const floatAnimation = {
    y: ["-8%", "8%"],
    transition: {
      y: {
        duration: 1.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="arounda-hero">
      {/* Visual Glowing Mesh Gradients */}
      <div className="hero-radial-glows">
        <div className="radial-glow orb-purple"></div>
        <div className="radial-glow orb-lime"></div>
        <div className="radial-glow orb-cyan"></div>
      </div>

      <div className="container hero-inner">
        <motion.div 
          className="hero-main-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Tagline Pre-title centered */}
          <motion.span variants={itemVariants} className="hero-pretitle">
            Elite Software Engineering & Design Agency | Founded 2026
          </motion.span>

          {/* Heading wrapper with absolute floating green capsules nested inside pills */}
          <div className="hero-heading-wrapper">
            {/* Main Title Heading centered */}
            <motion.h1 variants={itemVariants} className="hero-heading">
              We engineer next-gen products, <br className="desktop-break" />
              uniting{' '}
              <span className="hero-pill-brand">
                brand
                <div className="floating-green-orb orb-folder">
                  <Folder size={14} color="#ffaa00" strokeWidth={2.5} />
                </div>
                <div className="floating-green-orb orb-star">
                  <Star size={14} color="#ffaa00" strokeWidth={2.5} fill="#ffaa00" />
                </div>
                <div className="floating-green-orb orb-zap">
                  <Zap size={14} color="#ffaa00" strokeWidth={2.5} fill="#ffaa00" />
                </div>
              </span> ,{' '}
              <span className="hero-pill-website">
                website
                <div className="floating-green-orb orb-monitor">
                  <Monitor size={14} color="#8eff0a" strokeWidth={2.5} />
                </div>
                <div className="floating-green-orb orb-chart">
                  <BarChart3 size={14} color="#8eff0a" strokeWidth={2.5} />
                </div>
                <div className="floating-green-orb orb-globe">
                  <Globe size={14} color="#8eff0a" strokeWidth={2.5} />
                </div>
              </span> ,{' '}
              <span className="hero-pill-uiux">
                ui/ux design
                <div className="floating-green-orb orb-pentool">
                  <PenTool size={14} color="#00f0ff" strokeWidth={2.5} />
                </div>
                <div className="floating-green-orb orb-layers">
                  <Layers size={14} color="#00f0ff" strokeWidth={2.5} />
                </div>
                <div className="floating-green-orb orb-smartphone">
                  <Smartphone size={14} color="#00f0ff" strokeWidth={2.5} />
                </div>
              </span>
              <br className="desktop-break" />
              <div className="inline-video-wrapper">
                <div className="inline-video-preview">
                  <div className="preview-mesh-glow"></div>
                  <div className="preview-chart-bar"></div>
                  <div className="preview-circle-node"></div>
                </div>
                <div className="inline-play-badge">
                  <span className="play-txt">Play</span>
                  <div className="play-circle-icon">
                    <Play size={8} fill="#000" color="#000" />
                  </div>
                </div>
              </div>{' '}
              into a flawless <span className="hero-serif-accent">standard</span>
            </motion.h1>
          </div>

          {/* Hero Bottom 3-Column Content matching Screenshot exactly */}
          <motion.div variants={itemVariants} className="hero-bottom-grid">
            {/* Column 1: Trusted Business Statement */}
            <div className="hero-bottom-col">
              <div className="col-icon-bracket">{"{/}"}</div>
              <h3 className="col-statement">
                Started in 2026, we deliver strategic software engineering with uncompromised execution standards.
              </h3>
              <div className="col-tag-row">
                <span className="col-tag">Next.js</span>
                <span className="col-tag">React</span>
                <span className="col-tag">AI Integration</span>
              </div>
            </div>

            {/* Column 2: Since 2016 Statement */}
            <div className="hero-bottom-col">
              <div className="col-icon-bracket">{"{/}"}</div>
              <p className="col-desc-text">
                We work at rapid turnaround speeds, plan each architecture deeply before executing, and guarantee 100% client satisfaction on every launch.
              </p>
            </div>

            {/* Column 3: Lime Green CTA Consultation Button side-by-side */}
            <div className="hero-bottom-col col-cta-align">
              <div className="cta-side-by-side">
                <div className="cta-arrow-circle-button">
                  <ArrowUpRight size={20} className="cta-arrow-down-right" />
                </div>
                <a href="/contact" className="hero-lime-cta-pill">
                  <span className="cta-txt">Book a Call</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
