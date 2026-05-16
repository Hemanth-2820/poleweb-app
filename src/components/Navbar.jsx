import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ArrowRight, ChevronDown,
  Monitor, Smartphone, FileCode2, ShoppingCart,
  Cloud, Server, Cable, ShieldCheck,
  Bot, Cpu, PhoneCall, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const servicesData = {
  column1: {
    title: "DEVELOPMENT",
    items: [
      { icon: <Monitor size={22} color="#d0f601" />, title: "Web Development", subtitle: "Front-End & Back-End Development", path: "/services/web-development" },
      { icon: <Smartphone size={22} color="#d0f601" />, title: "App Development", subtitle: "Mobile & Desktop Apps", path: "/services/app-development" },
      { icon: <FileCode2 size={22} color="#d0f601" />, title: "Software Development", subtitle: "Custom Software Solutions", path: "/services/software-development" },
      { icon: <ShoppingCart size={22} color="#d0f601" />, title: "E-Commerce Solutions", subtitle: "Online Stores & Marketplaces", path: "/services/ecommerce-solutions" },
    ]
  },
  column2: {
    title: "CLOUD & DEVOPS",
    items: [
      { icon: <Cloud size={22} color="#d0f601" />, title: "AWS & DevOps", subtitle: "Cloud Infrastructure & CI/CD", path: "/services/aws-devops" },
      { icon: <Server size={22} color="#d0f601" />, title: "Hosting & Server Mgt", subtitle: "Reliable server hosting", path: "/services/hosting-server-management" },
      { icon: <Cable size={22} color="#d0f601" />, title: "API Integrations", subtitle: "Connecting 3rd-party services", path: "/services/api-integrations" },
      { icon: <ShieldCheck size={22} color="#d0f601" />, title: "Security & Maintenance", subtitle: "Protecting & updating systems", path: "/services/security-maintenance" },
    ]
  },
  column3: {
    title: "AI & MARKETING",
    items: [
      { icon: <Bot size={22} color="#d0f601" />, title: "AI & RAG Chatbots", subtitle: "Intelligent conversational agents", path: "/services/ai-rag-chatbots" },
      { icon: <Cpu size={22} color="#d0f601" />, title: "AI & Automation", subtitle: "Streamlining business processes", path: "/services/ai-automation" },
      { icon: <PhoneCall size={22} color="#d0f601" />, title: "IVR Solutions", subtitle: "Interactive Voice Response systems", path: "/services/ivr-solutions" },
      { icon: <TrendingUp size={22} color="#d0f601" />, title: "Digital Marketing", subtitle: "SEO, SMM, & Paid Ads", path: "/services/digital-marketing" },
    ]
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
  ];

  const allServices = [
    ...servicesData.column1.items,
    ...servicesData.column2.items,
    ...servicesData.column3.items
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">arounda</Link>
          </div>

          <div className="navbar-links">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="nav-link-wrapper"
                onMouseEnter={() => link.name === 'Services' && setShowServicesMenu(true)}
                onMouseLeave={() => link.name === 'Services' && setShowServicesMenu(false)}
              >
                {link.name === 'Services' ? (
                  <div className="nav-link cursor-pointer">
                    {link.name}
                    <ChevronDown size={14} style={{ marginLeft: '4px', verticalAlign: 'middle', display: 'inline-block' }} />
                  </div>
                ) : (
                  <Link to={link.href} className="nav-link">
                    {link.name}
                  </Link>
                )}

                {link.name === 'Services' && (
                  <AnimatePresence>
                    {showServicesMenu && (
                      <motion.div
                        className="mega-menu"
                        initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                        exit={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="mega-menu-content">
                          <div className="mega-menu-left">
                            <span className="pill-services">SERVICES</span>
                          </div>

                          <div className="mega-menu-columns">
                            {[servicesData.column1, servicesData.column2, servicesData.column3].map((col, i) => (
                              <div key={i} className="mega-menu-column">
                                <h4 className="mega-menu-title">{col.title}</h4>
                                <div className="mega-menu-items">
                                  {col.items.map((item, j) => (
                                    <Link to={item.path} key={j} className="mega-menu-item" onClick={() => setShowServicesMenu(false)}>
                                      <div className="mega-icon-box">
                                        {item.icon}
                                      </div>
                                      <div className="mega-item-text">
                                        <h5>{item.title}</h5>
                                        <p>{item.subtitle}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="navbar-actions">
            <Link to="/contact" className="btn-contact">
              Contact Us <span className="btn-contact-arrow"><ArrowRight size={16} /></span>
            </Link>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-header">
              <div className="navbar-logo">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>arounda</Link>
              </div>
              <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.name === 'Services' ? (
                    <div className="mobile-nav-link-group">
                      <div
                        className="mobile-nav-link"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        >
                          <ChevronDown size={24} />
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            className="mobile-accordion-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {allServices.map((service, sIndex) => (
                              <Link
                                key={sIndex}
                                to={service.path}
                                className="mobile-sub-link"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={link.href} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn-contact mobile-btn" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
