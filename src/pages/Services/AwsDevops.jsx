import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Monitor, Code, Rocket, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AwsDevops.css';

const AwsDevops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="service-page awsdevops-page">
      {/* 1. HERO SECTION */}
      <section className="service-hero">
        <div className="service-hero-bg">
          <div className="glow-circle glow-1"></div>
        </div>
        <div className="container">
          <motion.div 
            className="service-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="pill">PREMIUM SERVICE</motion.div>
            <motion.h1 variants={fadeIn} className="massive-heading">AWS & DevOps</motion.h1>
            <motion.h3 variants={fadeIn} className="hero-subtitle">Cloud & Infrastructure</motion.h3>
            <motion.p variants={fadeIn} className="hero-desc">Transforming your operations with automated cloud infrastructure that ensures maximum uptime, security, and scalability for global applications.</motion.p>
            <motion.div variants={fadeIn} className="hero-cta-group">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW SECTION */}
      <section className="service-overview section">
        <div className="container">
          <div className="overview-grid">
            <motion.div 
              className="overview-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="section-heading">Professional AWS & DevOps Solutions</h2>
              <p>
                In today's fast-paced digital world, having a robust and scalable solution is not just an option—it's a necessity. 
                Our team provides cutting-edge digital services that empower your brand.
              </p>
              <ul className="overview-benefits">
                <li><CheckCircle2 className="benefit-icon" /> Scalable and future-proof architecture.</li>
                <li><CheckCircle2 className="benefit-icon" /> Enterprise-grade security and performance.</li>
                <li><CheckCircle2 className="benefit-icon" /> Designed for maximum user engagement.</li>
              </ul>
            </motion.div>
            <motion.div 
              className="overview-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card visual-card">
                <div className="visual-code-mockup">
                  <div className="mockup-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="mockup-body">
                    <code>
                      <span className="code-keyword">const</span> <span className="code-var">service</span> = <span className="code-keyword">new</span> <span className="code-class">AwsDevops</span>();<br/>
                      <span className="code-var">service</span>.<span className="code-method">initialize</span>(&#123;<br/>
                      &nbsp;&nbsp;quality: <span className="code-string">'Premium'</span>,<br/>
                      &nbsp;&nbsp;performance: <span className="code-string">'Max'</span><br/>
                      &#125;);<br/>
                      <span className="code-keyword">await</span> <span className="code-var">service</span>.<span className="code-method">deploy</span>();
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION */}
      <section className="service-offers section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-subheading">Comprehensive capabilities tailored to your requirements.</p>
          </motion.div>
          
          <motion.div 
            className="offers-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {["AWS Cloud Setup","DevOps Solutions","CI/CD Pipeline Setup","Docker Configuration","Kubernetes Setup","Server Deployment","Infrastructure Automation","Monitoring & Logging","Cloud Architecture Setup"].map((offer, index) => (
              <motion.div key={index} variants={fadeIn} className="offer-card glass-card">
                <div className="offer-icon-wrapper">
                  <Monitor size={24} />
                </div>
                <h3>{offer}</h3>
                <p>Premium implementation of {offer.toLowerCase()} for your business growth.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="service-process section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-heading">Our Delivery Process</h2>
          </motion.div>

          <div className="timeline-container">
            {[
              { title: "Discovery", icon: <Rocket size={20} />, desc: "Understanding goals." },
              { title: "Planning", icon: <Settings size={20} />, desc: "Architecting the solution." },
              { title: "Development", icon: <Code size={20} />, desc: "Building the product." },
              { title: "Testing", icon: <Shield size={20} />, desc: "Quality assurance." },
              { title: "Deployment", icon: <CheckCircle2 size={20} />, desc: "Going live." }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="timeline-icon">{step.icon}</div>
                <div className="timeline-content glass-card">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="service-why-us section">
        <div className="container">
          <div className="why-us-grid">
            <motion.div 
              className="why-us-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="section-heading">Why Choose Us?</h2>
              <p>We blend technology with clean design to deliver products that stand out.</p>
            </motion.div>
            <div className="why-us-cards">
              <motion.div className="feature-card glass-card">
                <h4>Quality First</h4>
                <p>We don't compromise on performance or scalability.</p>
              </motion.div>
              <motion.div className="feature-card glass-card">
                <h4>Modern Design</h4>
                <p>Clean, professional aesthetics for a premium experience.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="service-cta section">
        <div className="container">
          <motion.div 
            className="cta-card glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Ready to start?</h2>
            <p>Let's turn your vision into reality. Contact us today.</p>
            <Link to="/contact" className="btn-primary mt-6">
              Get Started <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AwsDevops;
