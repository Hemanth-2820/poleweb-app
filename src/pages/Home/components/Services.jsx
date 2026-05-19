import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const serviceGroups = [
  {
    title: 'Development & AI',
    services: [
      {
        name: 'Web Development',
        tagline: 'High-performance websites tailored to scale your brand and capture conversions.',
        detailedParagraph: 'At Pole Web, our Web Development services deliver highly optimized, lightning-fast digital solutions built to drive organic traffic and convert visitors into high-value customers. Leveraging modern architectures like React, Next.js, and clean Tailwind CSS, we craft bespoke corporate sites, complex enterprise SaaS platforms, responsive interfaces, and interactive dashboards that stand the test of performance and scale. We focus on semantic HTML structure, flawless search engine readiness, and fluid micro-animations that represent your company engineering standard.',
        subServices: [
          'Business Websites',
          'Company Websites',
          'Portfolio Websites',
          'Landing Pages',
          'E-Commerce Websites',
          'Custom Web Applications',
          'Admin Dashboards',
          'SaaS Platforms',
          'Responsive Website Design',
          'Website Redesign'
        ]
      },
      {
        name: 'Software Development',
        tagline: 'Custom enterprise software systems to automate operations and workflows.',
        detailedParagraph: 'Pole Web builds scalable, modular enterprise software solutions designed to automate complex processes, eliminate manual bottlenecks, and secure critical data assets. Our systems span high-performance inventory tracking, advanced multi-tenant SaaS dashboards, billing portals, and customized workflow automation. By employing strong backend databases, real-time sync, and offline-first capabilities, we construct durable software assets that grow alongside your organizational scale.',
        subServices: [
          'Custom Software Development',
          'Billing Software',
          'Inventory Management Systems',
          'Management Systems',
          'Automation Software',
          'Desktop Applications'
        ]
      },
      {
        name: 'AI & Chatbot Services',
        tagline: 'Intelligent conversational AI bots and customer service automated workflows.',
        detailedParagraph: 'Empower your customer journeys and streamline operational response speeds using Pole Webs conversational AI and intelligent chatbot systems. We design RAG-based search chatbots, automated customer assistance integrations, and custom WhatsApp/SMS agents that process user intents and answer complex queries with brand-accurate, context-aware intelligence. Automate your support desk, schedule appointments, and capture lead parameters 24/7 with zero latency.',
        subServices: [
          'AI Chatbot Development',
          'RAG-Based Chatbots',
          'Website Chatbots',
          'WhatsApp Chatbots',
          'Customer Support Bots',
          'Automation Bots',
          'AI-Based Response Systems'
        ]
      }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    services: [
      {
        name: 'AWS & DevOps Services',
        tagline: 'Continuous delivery setups, cloud configurations, and auto-scaling setups.',
        detailedParagraph: 'Pole Web provides elite DevOps solutions and scalable AWS configurations to ensure your digital ecosystem operates with 99.99% uptime and bulletproof security. We configure multi-zone load balancing, highly scalable containerized environments using Docker & Kubernetes, secure continuous integration pipelines (CI/CD), infrastructure automation scripts, and real-time monitoring and logging aggregates. Deploy code seamlessly and scale traffic effortlessly.',
        subServices: [
          'AWS Cloud Setup',
          'DevOps Solutions',
          'CI/CD Pipeline Setup',
          'Docker Configuration',
          'Kubernetes Setup',
          'Server Deployment',
          'Infrastructure Automation',
          'Monitoring & Logging',
          'Cloud Architecture Setup'
        ]
      },
      {
        name: 'Hosting & Server Services',
        tagline: 'Secure VPS management, website migrations, and dedicated database monitoring.',
        detailedParagraph: 'Experience maximum performance, security, and stability with our comprehensive server hosting and infrastructure management. From high-availability VPS set ups and dedicated server migrations to automated backup and disaster recovery schedules, Pole Web controls your server environments with maximum precision. We handle SSL generation, domain setup, reverse proxies, caching optimizations, and custom email setups to give you total digital peace of mind.',
        subServices: [
          'Web Hosting',
          'Cloud Hosting',
          'VPS Server Setup',
          'Dedicated Server Management',
          'Domain Setup',
          'SSL Installation',
          'Server Optimization',
          'Website Migration',
          'Email Hosting',
          'Backup & Recovery Solutions'
        ]
      },
      {
        name: 'Security & Maintenance',
        tagline: 'Malware mitigation, ongoing server health audits, and fast patch updates.',
        detailedParagraph: 'Protect your digital investments and guarantee operational continuity with our proactive maintenance and advanced security suite. We provide routine performance audits, instant bug resolutions, 24/7 real-time malware monitoring, secure server configurations, and database backup routines. Pole Web secures your web properties against DDoS attacks, data leaks, and script injections, keeping your applications online and fully optimized.',
        subServices: [
          'Website Maintenance',
          'Performance Optimization',
          'Bug Fixing',
          'Website Security',
          'Malware Protection',
          'Backup Management',
          'Technical Support',
          'Server Security Monitoring'
        ]
      }
    ]
  },
  {
    title: 'Business & Integrations',
    services: [
      {
        name: 'Digital Marketing Services',
        tagline: 'Increase your ROI with search engine optimization, Google Ads, and marketing plans.',
        detailedParagraph: 'Scale your companys digital footprint and maximize ROI using Pole Webs data-driven growth strategies. We coordinate highly optimized search engine campaigns (SEO), laser-focused Google & Meta Ads, targeted lead generation funnels, and data-driven marketing templates. Our solutions track key customer parameters, optimize campaign conversions, and lower your customer acquisition cost while maximizing organic reach.',
        subServices: [
          'SEO Optimization',
          'Social Media Marketing',
          'Google Ads',
          'Meta Ads',
          'Lead Generation',
          'Performance Marketing',
          'Email Marketing',
          'Content Marketing'
        ]
      },
      {
        name: 'IVR Services',
        tagline: 'Interactive call systems and automated routing setups for call management.',
        detailedParagraph: 'Re-engineer your business communication networks using Pole Webs advanced interactive voice response (IVR) platforms. We customize cloud-hosted multi-level routing, automated speech and DTMF recognition, call queue parameters, and unified customer support pipelines. Seamlessly connect callers with appropriate agents, handle large voice traffic volumes, and deliver immediate professional responses without expensive physical infrastructure.',
        subServices: [
          'IVR Setup',
          'Automated Voice Response Systems',
          'Business Call Management',
          'Customer Support IVR',
          'Cloud IVR Solutions',
          'Multi-Level IVR Systems'
        ]
      },
      {
        name: 'API & Integration Services',
        tagline: 'Custom payment gateways, WhatsApp webhooks, and secure API links.',
        detailedParagraph: 'Connect your digital ecosystem seamlessly with our third-party API integration and operational automation services. Pole Web bridges data gaps between payment gateways, customer relationship portals, custom ERP tools, and instant notification endpoints (such as WhatsApp, SMS, and email setups). Eliminate manual duplication, streamline automated records, and orchestrate perfect data synchronization across all channels.',
        subServices: [
          'Third-Party API Integration',
          'Payment Gateway Integration',
          'WhatsApp API Integration',
          'SMS & Email API Setup',
          'Automation Integrations'
        ]
      }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="arounda-services-section" id="services">
      <div className="services-radial-glow"></div>
      <div className="container services-container">
        {/* Rotated Vertical Badge */}
        <div className="vertical-badge-wrapper">
          <span className="vertical-badge">SERVICES</span>
        </div>

        {/* Header Title */}
        <div className="services-header">
          <h2 className="services-title">
            Digital Product Design & Development <br />
            <span className="serif-italic-title">Services We Offer</span>
          </h2>
        </div>

        {/* High-Contrast Large Rounded Card (Restored original layout!) */}
        <div className="services-catalog-card">
          <div className="services-grid-columns">
            {serviceGroups.map((group, colIdx) => (
              <div key={colIdx} className="service-vertical-col">
                <h3 className="vertical-title">{group.title}</h3>
                <div className="vertical-links-list">
                  {group.services.map((srv, idx) => (
                    <div key={idx} className="service-item-wrapper">
                      {/* Active Row item link - Triggers Modal on click */}
                      <div className="service-item-link" onClick={() => setSelectedService(srv)}>
                        <span className="service-name">{srv.name}</span>
                        <div className="item-arrow-circle">
                          <ArrowUpRight size={14} className="arrow-icon" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA Banner */}
          <div className="services-cta-banner">
            <div className="cta-left-profile">
              <div className="profile-avatar-circle">
                <span className="avatar-initials">PW</span>
                <div className="avatar-active-dot"></div>
              </div>
              <div className="profile-details">
                <span className="profile-name">PoleWeb Team</span>
                <span className="profile-role">Lead Developers</span>
                <p className="profile-message">
                  Grow revenue and maximize ROI with our product design and development services.
                </p>
              </div>
            </div>

            <div className="cta-right-button">
              <a href="/contact" className="services-lime-cta">
                <span className="cta-txt">Book a Call</span>
                <div className="cta-arrow-circle">
                  <ArrowUpRight size={18} color="#000" strokeWidth={2.5} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Large Split-Pane Center Modal Popup */}
      {selectedService && (
        <div className="services-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="services-modal-content split-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
              &times;
            </button>
            
            {/* Left Creative Brand Column */}
            <div className="modal-left-brand-panel">
              <div className="brand-glow-circle"></div>
              <div className="brand-panel-content">
                <div className="brand-badge">Pole Web Elite</div>
                <h4 className="brand-quote">
                  Architecting <br />
                  <span className="lime-quote-text">Future-Ready</span> <br />
                  Digital Platforms.
                </h4>
                <p className="brand-panel-subtext">
                  Enterprise-grade performance, custom-engineered for rapid business growth and bulletproof security.
                </p>
                <div className="brand-decor-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="modal-right-content-panel">
              <div className="modal-header-row">
                <div className="modal-badge-row">
                  <span className="modal-category-badge">Engineering Capabilities</span>
                </div>
                <h3 className="modal-service-title">{selectedService.name}</h3>
              </div>
              
              <p className="modal-service-description">
                {selectedService.detailedParagraph}
              </p>

              <div className="modal-capabilities-section">
                <h4 className="modal-subtitle">Detailed Technical Capabilities:</h4>
                <div className="modal-capabilities-grid">
                  {selectedService.subServices.map((sub, sIdx) => (
                    <div key={sIdx} className="modal-cap-item">
                      <span className="modal-cap-bullet">•</span>
                      <span className="modal-cap-name">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer-row">
                <a href="/contact" className="modal-cta-button" onClick={() => setSelectedService(null)}>
                  <span>Connect With Our Architects</span>
                  <ArrowUpRight size={16} style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
