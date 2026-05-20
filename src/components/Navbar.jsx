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
      { icon: <Monitor size={22} color="#4A90E2" />, title: "Web Development", subtitle: "Front-End & Back-End Development", path: "/services/web-development" },
      { icon: <Smartphone size={22} color="#50E3C2" />, title: "App Development", subtitle: "Mobile & Desktop Apps", path: "/services/app-development" },
      { icon: <FileCode2 size={22} color="#B8E986" />, title: "Software Development", subtitle: "Custom Software Solutions", path: "/services/software-development" },
      { icon: <ShoppingCart size={22} color="#F5A623" />, title: "E-Commerce Solutions", subtitle: "Online Stores & Marketplaces", path: "/services/e-commerce-solutions" },
    ]
  },
  column2: {
    title: "CLOUD & DEVOPS",
    items: [
      { icon: <Cloud size={22} color="#9013FE" />, title: "AWS & DevOps", subtitle: "Cloud Infrastructure & CI/CD", path: "/services/aws-devops" },
      { icon: <Server size={22} color="#4A4A4A" />, title: "Hosting & Server Mgt", subtitle: "Reliable server hosting", path: "/services/hosting-server-management" },
      { icon: <Cable size={22} color="#D0021B" />, title: "API Integrations", subtitle: "Connecting 3rd-party services", path: "/services/api-integrations" },
      { icon: <ShieldCheck size={22} color="#417505" />, title: "Security & Maintenance", subtitle: "Protecting & updating systems", path: "/services/security-maintenance" },
    ]
  },
  column3: {
    title: "AI & MARKETING",
    items: [
      { icon: <Bot size={22} color="#F8E71C" />, title: "AI & RAG Chatbots", subtitle: "Intelligent conversational agents", path: "/services/ai-rag-chatbots" },
      { icon: <Cpu size={22} color="#7ED321" />, title: "AI & Automation", subtitle: "Streamlining business processes", path: "/services/ai-automation" },
      { icon: <PhoneCall size={22} color="#BD10E0" />, title: "IVR Solutions", subtitle: "Interactive Voice Response systems", path: "/services/ivr-solutions" },
      { icon: <TrendingUp size={22} color="#FF2D55" />, title: "Digital Marketing", subtitle: "SEO, SMM, & Paid Ads", path: "/services/digital-marketing" },
    ]
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

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
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
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
                <Link to={link.href} className="nav-link">
                  {link.name}
                  {link.name === 'Services' && <ChevronDown size={14} style={{marginLeft: '4px', verticalAlign: 'middle', display: 'inline-block'}} />}
                </Link>

                {link.name === 'Services' && (
                  <AnimatePresence>
                    {showServicesMenu && (
                      <motion.div 
                        className="mega-menu"
                        initial={{ opacity: 0, y: 15, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 15, x: "-50%" }}
                        transition={{ duration: 0.2 }}
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
                                    <Link to={item.path} key={j} className="mega-menu-item">
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
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-header">
              <div className="navbar-logo">
                <Link to="/">arounda</Link>
              </div>
              <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to={link.href} className="mobile-nav-link">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/contact" className="btn-contact mobile-btn">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
