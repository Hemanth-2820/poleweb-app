import React, { useState, useRef, useEffect } from 'react';
import './Services.css';
import {
  Code, Layout, Cloud, Server, Megaphone, Smartphone,
  Phone, Layers, ShoppingBag, Shield, ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    short: 'Websites & Web Apps',
    desc: 'We build fast, modern websites and web applications — from simple business sites to complex custom platforms. Every project is designed for performance, mobile-first, and built to convert visitors into customers.',
    list: ['Business & Company Websites', 'E-Commerce Stores', 'Custom Web Applications', 'Admin Dashboards & Portals', 'SaaS Platform Development', 'Landing Pages & Sales Funnels']
  },
  {
    icon: Layout,
    title: 'Software Development',
    short: 'Custom Business Software',
    desc: 'Off-the-shelf software often does not fit how you work. We build custom software that matches your exact workflow — whether it is billing, inventory, HR, or any internal business process.',
    list: ['Custom Business Software', 'Billing & Invoice Systems', 'Inventory Management', 'CRM & ERP Systems', 'Process Automation Tools', 'Desktop Applications']
  },
  {
    icon: Cloud,
    title: 'AWS & DevOps',
    short: 'Cloud Infrastructure',
    desc: 'We set up and manage cloud infrastructure on AWS — from initial configuration to automated deployment pipelines. Your application stays online, scales automatically, and runs efficiently.',
    list: ['AWS Cloud Architecture', 'CI/CD Pipelines Setup', 'Docker & Kubernetes', 'Infrastructure Automation', 'Cost Optimization', 'Monitoring & Alerts']
  },
  {
    icon: Server,
    title: 'Hosting & Servers',
    short: 'Hosting & Server Management',
    desc: 'We manage your servers so you do not have to. Setup, optimization, security hardening, and ongoing maintenance — your infrastructure stays fast, secure, and available 24/7.',
    list: ['Web Hosting & Domain Setup', 'VPS & Dedicated Servers', 'SSL Certificates', 'Server Optimization', 'Website Migration', 'Email Hosting & Backup']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    short: 'Growth & Marketing',
    desc: 'Great products need to be found. We run targeted marketing campaigns across Google, Meta, and social channels — driving quality traffic and measurable leads for your business.',
    list: ['SEO & Content Strategy', 'Google & Meta Ads', 'Social Media Management', 'Lead Generation Campaigns', 'Performance Marketing', 'Email Marketing']
  },
  {
    icon: Smartphone,
    title: 'AI & Chatbots',
    short: 'AI Automation',
    desc: 'We build AI-powered chatbots and automation systems that handle customer queries, qualify leads, and streamline internal workflows — saving your team hours every single day.',
    list: ['AI Chatbot Development', 'RAG-Based Knowledge Bots', 'WhatsApp Automation Bots', 'Lead Qualification Bots', 'Customer Support Automation', 'Internal Workflow Bots']
  },
  {
    icon: Phone,
    title: 'IVR Solutions',
    short: 'Voice & Call Systems',
    desc: 'Automate your inbound calls with intelligent IVR systems. Route callers, collect information, and resolve common queries automatically — without requiring a live agent every time.',
    list: ['IVR System Setup', 'Automated Call Routing', 'Customer Support IVR', 'Cloud-Based IVR', 'Multi-Level Menu Systems', 'CRM Integration']
  },
  {
    icon: Layers,
    title: 'API & Integrations',
    short: 'System Integrations',
    desc: 'We connect your apps, tools, and platforms with secure API integrations — enabling seamless data flow between your systems and eliminating manual data entry or sync issues.',
    list: ['Third-Party API Integration', 'Payment Gateway Setup', 'WhatsApp & SMS API', 'CRM Integrations', 'Webhook Automation', 'Multi-System Sync']
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    short: 'Online Stores',
    desc: 'We build scalable online stores with smooth shopping experiences, secure payment systems, and easy product management — whether you are launching or scaling your store.',
    list: ['Custom Online Store Development', 'Shopify & WooCommerce', 'Multi-Vendor Marketplaces', 'Order & Inventory Management', 'Payment Gateway Integration', 'Store Optimization']
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    short: 'Ongoing Protection',
    desc: 'Websites and apps need regular care to stay fast and secure. We provide ongoing maintenance, security monitoring, performance optimization, and emergency bug fixes when needed.',
    list: ['Monthly Website Maintenance', 'Security Audits & Hardening', 'Performance Optimization', 'Malware Removal & Protection', 'Backup Management', 'Technical Support']
  }
];

const Services = () => {
  const [active, setActive] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [showAsteroid, setShowAsteroid] = useState(false);
  const [showShatter, setShowShatter] = useState(false);
  const [displayedService, setDisplayedService] = useState(null);
  const panelRef = useRef(null);

  // 12 shards — fall DOWNWARD with slight sideways drift
  const shards = [
    { top: '10%', left: '5%',  tx: '-30px',  ty: '280px', rot: '-50deg',  size: 38, delay: '0ms'  },
    { top: '8%',  left: '30%', tx: '10px',   ty: '310px', rot: '30deg',   size: 28, delay: '15ms' },
    { top: '12%', left: '60%', tx: '35px',   ty: '290px', rot: '70deg',   size: 42, delay: '5ms'  },
    { top: '12%', left: '85%', tx: '40px',   ty: '270px', rot: '-40deg',  size: 30, delay: '20ms' },
    { top: '35%', left: '0%',  tx: '-40px',  ty: '240px', rot: '-80deg',  size: 36, delay: '8ms'  },
    { top: '38%', left: '88%', tx: '45px',   ty: '220px', rot: '55deg',   size: 32, delay: '25ms' },
    { top: '55%', left: '10%', tx: '-25px',  ty: '200px', rot: '-35deg',  size: 44, delay: '12ms' },
    { top: '50%', left: '40%', tx: '15px',   ty: '230px', rot: '20deg',   size: 26, delay: '30ms' },
    { top: '52%', left: '70%', tx: '38px',   ty: '210px', rot: '75deg',   size: 38, delay: '3ms'  },
    { top: '70%', left: '20%', tx: '-20px',  ty: '170px', rot: '-60deg',  size: 22, delay: '18ms' },
    { top: '68%', left: '55%', tx: '25px',   ty: '180px', rot: '-25deg',  size: 34, delay: '10ms' },
    { top: '72%', left: '80%', tx: '42px',   ty: '160px', rot: '90deg',   size: 28, delay: '22ms' },
  ];

  const handleServiceClick = (index) => {
    if (animating) return;
    setAnimating(true);

    // Step 1: Star flies in (0.5 second)
    setShowAsteroid(true);

    // Step 2: At 0.5s — star hits bottom-right → shatter
    setTimeout(() => {
      setShowAsteroid(false);
      setActive(index);
      setShowShatter(true);
    }, 500);

    // Step 3: At ~1.06s — shards done falling, show new content
    setTimeout(() => {
      setShowShatter(false);
      setDisplayedService(index);
      setAnimating(false);
    }, 1060);
  };

  const currentService = displayedService !== null ? services[displayedService] : null;

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-eyebrow">What We Do</span>
          <h2 className="services-main-title">
            Technology Services<br />
            <span className="services-title-accent">Built for Real Business</span>
          </h2>
          <p className="services-main-subtitle">
            From your first website to full cloud infrastructure — everything your business needs to build, grow, and scale digitally.
          </p>
        </div>

        {/* Main Layout */}
        <div className="services-split">

          {/* LEFT — Grid of service cards */}
          <div className="services-grid-left">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={i}
                  className={`srv-grid-item ${active === i ? 'active' : ''}`}
                  onClick={() => handleServiceClick(i)}
                  id={`service-card-${i}`}
                >
                  <div className="srv-grid-icon">
                    <Icon size={20} />
                  </div>
                  <span className="srv-grid-title">{s.title}</span>
                  <ArrowUpRight size={14} className="srv-grid-arrow" />
                </button>
              );
            })}
          </div>

          {/* RIGHT — Panel */}
          <div className="services-panel-wrapper">
            {/* Asteroid */}
            {showAsteroid && (
              <div className="asteroid">
                <div className="asteroid-body" />
                <div className="asteroid-fire" />
                <div className="asteroid-trail" />
              </div>
            )}

            <div className={`services-panel ${showShatter ? 'panel-shatter' : ''}`} ref={panelRef}>
              <span className="panel-corner c-tl"></span>
              <span className="panel-corner c-tr"></span>
              <span className="panel-corner c-bl"></span>
              <span className="panel-corner c-br"></span>
              {/* Shatter shards */}
              {showShatter && shards.map((s, i) => (
                <div
                  key={i}
                  className="shard"
                  style={{
                    top: s.top,
                    left: s.left,
                    width: `${s.size}px`,
                    height: `${s.size}px`,
                    '--tx': s.tx,
                    '--ty': s.ty,
                    '--rot': s.rot,
                    animationDelay: s.delay
                  }}
                />
              ))}
              {currentService === null ? (
                /* Default State — Pole Web Brand */
                <div className="panel-default">
                  <div className="panel-brand-logo">
                    <span className="brand-pole">pole</span>
                    <span className="brand-web">web</span>
                  </div>
                  <h3 className="panel-default-title">Complete Digital Solutions</h3>
                  <p className="panel-default-desc">
                    Pole Web is a full-stack digital agency built for modern businesses. We design, build, and scale digital products — from websites and software to cloud infrastructure and AI automation.
                  </p>
                  <p className="panel-default-hint">
                    ← Select a service to explore what we offer
                  </p>
                </div>
              ) : (
                /* Service Detail */
                <div className="panel-detail">
                  <div className="panel-icon-wrapper">
                    {React.createElement(services[displayedService].icon, { size: 26 })}
                  </div>
                  <h3 className="panel-title">{currentService.title}</h3>
                  <p className="panel-desc">{currentService.desc}</p>
                  <ul className="panel-list">
                    {currentService.list.map((item, i) => (
                      <li key={i} className="panel-list-item">
                        <span className="panel-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="panel-cta">
                    Get a Free Quote <ArrowUpRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
