import React, { useState, useEffect, useRef } from 'react';
import { Users, Rocket, ThumbsUp, Globe } from 'lucide-react';
import './AboutPage.css';

// ─── Count Up Component ────────────────────────────────
const CountUp = ({ target, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(decimals > 0 ? (0).toFixed(decimals) : 0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = eased * target;
            setCount(val.toFixed(decimals));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return <span ref={ref}>{count}</span>;
};

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  // Scroll Reveal Animation Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const isFormValid = () => {
    const emailRegex = /^(?![0-9]+@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const whatsappRegex = /^\d{10}$/;

    return (
      formData.email && emailRegex.test(formData.email) &&
      formData.whatsapp && whatsappRegex.test(formData.whatsapp) &&
      formData.message.trim() !== ''
    );
  };

  const validateForm = () => {
    const errors = {};

    const emailRegex = /^(?![0-9]+@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    const whatsappRegex = /^\d{10}$/;
    if (!formData.whatsapp) {
      errors.whatsapp = "WhatsApp number is required";
    } else if (!whatsappRegex.test(formData.whatsapp)) {
      errors.whatsapp = "WhatsApp number must be exactly 10 digits";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    }
  };

  const coreValues = [
    {
      title: 'Innovation:',
      content: 'We embrace the latest modern frameworks and architectures to engineer cutting-edge web platforms.'
    },
    {
      title: 'Quality:',
      content: 'We adhere to meticulous engineering standards to ensure every line of code is resilient, optimized, and performant.'
    },
    {
      title: 'Customer-Centric Approach:',
      content: 'Your operational growth dictates our roadmap. We construct custom digital interfaces designed around your core business metrics.'
    },
    {
      title: 'Integrity & Transparency:',
      content: 'We prioritize clear, uncompromised developer communication and direct sprint accountability in every engagement.'
    },
    {
      title: 'Continuous Growth:',
      content: 'We consistently refine our tech stack, tools, and infrastructure practices to keep your system ahead of industry changes.'
    }
  ];

  return (
    <div className="about-container">
      {/* Top Banner Section */}
      <section className="about-banner arounda-hero">
        <div className="arounda-hero-orb arounda-hero-orb-left"></div>
        <div className="arounda-hero-orb arounda-hero-orb-right"></div>

        <div className="about-banner-content arounda-hero-content">
          <nav className="breadcrumbs-top arounda-breadcrumbs">
            <a href="/">HOME</a>
            <span className="separator">/</span>
            <span>ABOUT US</span>
          </nav>

          <h1>
            What started in 2016 now supports{" "}
            <em>complex enterprise systems</em> at scale
          </h1>

          <p className="banner-subtitle">
            We structure every engagement around long-term platform resilience,
            operational efficiency, performance, and responsible growth.
          </p>

          <a href="#contact" className="btn-get-started-leaf arounda-main-btn">
            <div className="btn-leaf-arrow">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <div className="btn-leaf-text">Tell us about your project</div>
          </a>
        </div>
      </section>

      {/* Intro Section - Typo Fixed */}
      <section className="about-intro">
        <div className="about-intro-grid">
          <div className="about-intro-image">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Tech Innovation" />
            <div className="about-intro-quote-overlay">
              <span className="quote-icon">"</span>
              <p>At Polweb, we don't just engineer digital platforms—we design scalable systems that secure operational success.</p>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="section-label">ABOUT US</span>
            <h2>Empowering Businesses with High-Performance Systems</h2>
            <p className="intro-desc">
              At Polweb, we believe in using technology to rebuild structural operations,
              maximize workflows, and accelerate business evolution. As an elite corporate platform architect,
              we specialize in <strong>Full-Stack Architecture, Clean Code Deployment, UI/UX System Design, and Enterprise Integrations</strong>,
              helping companies scale reliably without tech debt.
            </p>

            <div className="intro-highlight-box">
              <p>
                Backed by a <strong>disciplined squad of technical leads and digital engineers</strong>,
                we deliver <strong>secure, transparent, and future-proof platforms</strong> built specifically to handle complex operational demands.
              </p>
            </div>

            <p className="intro-sub-desc">
              Our absolute dedication to long-term architectural stability and precise execution places your system infrastructure securely at the top tier.
            </p>

            <button className="btn-get-started">GET STARTED</button>
          </div>
        </div>
      </section>

      {/* Principles, Mission & Vision Section */}
      <section className="principles-mv-section">
        <div className="principles-mv-grid">
          {/* Left Column: Principles */}
          <div className="principles-column">
            <h2>The <em>principles</em><br />behind our work</h2>

            {/* Principles Checklist */}
            <div className="principles-list">
              <div className="principle-item">
                <div className="principle-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Strategy before execution</h3>
                  <p>We apply system thinking to reduce fragmentation across teams and workflows.</p>
                </div>
              </div>

              <div className="principle-item">
                <div className="principle-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Responsible ownership</h3>
                  <p>Our goal is long-term partnerships, so the Polweb team takes responsibility for outcomes.</p>
                </div>
              </div>

              <div className="principle-item">
                <div className="principle-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="principle-content">
                  <h3>Data-driven decision making</h3>
                  <p>We ground every major decision in research, analytics, and measurable signals gathered during discovery stage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Vision */}
          <div className="mv-column">
            <div className="mv-glow-glow"></div>

            {/* AI Widget updated to Polweb */}
            <div className="hmns-ai-widget">
              <span className="hmns-ai-text">Learn about Polweb with AI</span>
              <div className="hmns-ai-avatars">
                <div className="hmns-ai-avatar avatar-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                </div>
                <div className="hmns-ai-avatar avatar-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
                  </svg>
                </div>
                <div className="hmns-ai-avatar avatar-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="12" y1="2" x2="22" y2="12" />
                    <line x1="22" y1="12" x2="12" y2="22" />
                    <line x1="12" y1="22" x2="2" y2="12" />
                    <line x1="2" y1="12" x2="12" y2="2" />
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mv-statement-block">
              <span className="mv-small-label">MISSION</span>
              <p className="mv-statement-desc">
                Our mission is to modernize or build the digital foundations of enterprise systems whose technology has the greatest impact on global efficiency and growth.
              </p>
            </div>

            <div className="mv-statement-block">
              <span className="mv-small-label">VISION</span>
              <p className="mv-statement-desc">
                Our vision is to grow into a disciplined, globally respected organization that enterprises trust with their most complex and mission-critical digital environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2 className="values-title">Our Core Values</h2>
        <div className="values-accordion">
          {coreValues.map((value, index) => (
            <div key={index} className="value-item">
              <div
                className="value-header"
                onClick={() => setActiveValue(activeValue === index ? -1 : index)}
              >
                <span>{activeValue === index ? '−' : '+'}</span>
                {value.title}
              </div>
              {activeValue === index && (
                <div className="value-body">
                  {value.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our approach Section */}
      <section className="our-approach-section reveal-up">
        <h2 className="approach-section-title">
          Our <em>approach</em>
        </h2>
        <span className="approach-section-subtitle">Stability While You Transform</span>

        <div className="approach-cards-grid">
          {/* Card 1 */}
          <div className="approach-card">
            <div className="approach-card-icon-container bg-glow-blue">
              <svg className="approach-svg-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="28" fill="url(#grad-blue-icon)" fillOpacity="0.15" />
                <circle cx="50" cy="50" r="28" stroke="url(#grad-blue-icon)" strokeWidth="1.5" />
                <path d="M50 32C40.0589 32 32 40.0589 32 50C32 59.9411 40.0589 68 50 68" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 32C59.9411 32 68 40.0589 68 50C68 59.9411 59.9411 68 50 68" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="8" fill="#3b82f6" />
                <defs>
                  <linearGradient id="grad-blue-icon" x1="32" y1="32" x2="68" y2="68" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="approach-card-title">Platform modernization without disruption</h3>
            <p className="approach-card-desc">
              We upgrade core digital systems while protecting operational continuity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="approach-card">
            <div className="approach-card-icon-container bg-glow-purple">
              <svg className="approach-svg-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="28" width="44" height="44" rx="12" fill="url(#grad-purple-icon)" fillOpacity="0.15" />
                <rect x="28" y="28" width="44" height="44" rx="12" stroke="url(#grad-purple-icon)" strokeWidth="1.5" />
                <path d="M42 44L36 50L42 56" stroke="#9c64ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M58 44L64 50L58 56" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52 42L48 58" stroke="#9c64ff" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="grad-purple-icon" x1="28" y1="28" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9c64ff" />
                    <stop offset="1" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="approach-card-title">Embedded product & design leadership</h3>
            <p className="approach-card-desc">
              You gain product and design depth that integrates directly into your environment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="approach-card">
            <div className="approach-card-icon-container bg-glow-cyan">
              <svg className="approach-svg-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="32" width="40" height="36" rx="6" fill="url(#grad-cyan-icon)" fillOpacity="0.15" />
                <rect x="30" y="32" width="40" height="36" rx="6" stroke="url(#grad-cyan-icon)" strokeWidth="1.5" />
                <path d="M30 44H70" stroke="#06b6d4" strokeWidth="2.5" />
                <circle cx="40" cy="38" r="2" fill="#06b6d4" />
                <circle cx="48" cy="38" r="2" fill="#06b6d4" />
                <circle cx="56" cy="38" r="2" fill="#06b6d4" />
                <path d="M42 54L48 60L58 50" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="grad-cyan-icon" x1="30" y1="32" x2="70" y2="68" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="approach-card-title">Governance and operational clarity</h3>
            <p className="approach-card-desc">
              You operate with defined ownership, transparent priorities, and structured oversight.
            </p>
          </div>

          {/* Card 4 */}
          <div className="approach-card">
            <div className="approach-card-icon-container bg-glow-indigo">
              <svg className="approach-svg-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="30" width="44" height="32" rx="6" fill="url(#grad-indigo-icon)" fillOpacity="0.15" />
                <rect x="28" y="30" width="44" height="32" rx="6" stroke="url(#grad-indigo-icon)" strokeWidth="1.5" />
                <path d="M40 62H60" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M46 62V68H54V62" stroke="#4f46e5" strokeWidth="2.5" />
                <path d="M40 68H60" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
                <path d="M36 44L46 44" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M54 44L64 44" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="grad-indigo-icon" x1="28" y1="30" x2="72" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="approach-card-title">Confident evolution under real constraints</h3>
            <p className="approach-card-desc">
              You move forward despite legacy dependencies, compliance requirements, and internal complexity.
            </p>
          </div>
        </div>

        {/* Founder action bar */}
        <div className="founder-action-bar">
          <div className="founder-profile-capsule">
            <div className="founder-avatar-wrapper">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" alt="Vladislav Gavriluk" className="founder-avatar-img" />
              <div className="founder-linkedin-overlay">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
            </div>
            <div className="founder-details-text">
              <span className="founder-name">Vladislav Gavriluk</span>
              <span className="founder-role">Founder & CEO</span>
            </div>
          </div>

          <p className="founder-quote-pitch">
            Let’s review your current platform landscape and identify where structure, alignment, and governance will create the strongest impact.
          </p>

          <a href="#contact" className="btn-book-call">
            <span className="btn-arrow-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="5" x2="5" y2="19"></line>
                <polyline points="19 19 5 19 5 5"></polyline>
              </svg>
            </span>
            <span className="btn-book-text">Book a Call</span>
          </a>
        </div>
      </section>

      {/* Our Operating Model Section */}
      <section className="operating-model-section reveal-up">
        <div className="operating-header-block">
          <h2 className="operating-section-title">
            Our operating model <em>reduces</em> delivery risk at scale.
          </h2>
          <a href="#how-it-works" className="operating-link-works">
            How it works
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="operating-columns-grid">
          {/* Column 1 */}
          <div className="operating-column">
            <h3 className="operating-column-title">Integrated into your product structure</h3>
            <p className="operating-column-desc">
              Polweb operates within your existing leadership, workflows, and technical environment to ensure alignment, continuity, and seamless collaboration across teams.
            </p>
            <div className="operating-graphic-block graphic-integrated">
              <div className="neon-orb-glow size-large glow-yellow-green"></div>
              <div className="glassy-card-bg card-base float-item-3">
                <div className="card-dot bg-cyan"></div>
                <div className="card-line bg-cyan-subtle"></div>
              </div>
              <div className="glassy-pill pill-code float-item-1">
                <span className="pill-icon text-cyan">&lt;/&gt;</span>
                <div className="pill-bar bg-white-10"></div>
              </div>
              <div className="glassy-pill pill-eye float-item-2">
                <svg className="pill-icon text-lime" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="pill-bar bg-white-10"></div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="operating-column">
            <h3 className="operating-column-title">Controlled delivery architecture</h3>
            <p className="operating-column-desc">
              Our teams structure execution around defined standards, risk oversight, and predictable iteration cycles to maintain stability while advancing critical initiatives.
            </p>
            <div className="operating-graphic-block graphic-controlled">
              <div className="neon-orb-glow size-medium glow-yellow-green"></div>
              <div className="glassy-card-small float-item-6">
                <div className="card-dot bg-lime"></div>
              </div>
              <div className="glassy-panel-chart float-item-4">
                <div className="panel-chart-header">
                  <div className="panel-dot bg-lime"></div>
                  <div className="panel-dot bg-gray"></div>
                </div>
                <div className="panel-chart-bars">
                  <div className="chart-bar bar-1 bg-lime-gradient" style={{ height: '30px' }}></div>
                  <div className="chart-bar bar-2 bg-lime-gradient" style={{ height: '48px' }}></div>
                  <div className="chart-bar bar-3 bg-lime-gradient" style={{ height: '20px' }}></div>
                </div>
              </div>
              <div className="floating-cursor float-item-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.636 5.636L18.364 9.172L12.707 12.707L9.172 18.364L5.636 5.636Z" fill="#d0f601" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="operating-column">
            <h3 className="operating-column-title">Decision governance and responsibility</h3>
            <p className="operating-column-desc">
              We establish clear decision rights, accountability boundaries, and measurable ownership to protect progress and strengthen outcome reliability.
            </p>
            <div className="operating-graphic-block graphic-governance">
              <div className="neon-orb-glow size-medium glow-yellow-green"></div>
              <div className="glassy-card-small float-item-9">
                <div className="card-dot bg-cyan"></div>
              </div>
              <div className="blueprint-dotted float-item-7">
                <svg className="blueprint-lightbulb" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .4 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5"></path>
                  <line x1="9" y1="18" x2="15" y2="18"></line>
                  <line x1="10" y1="22" x2="14" y2="22"></line>
                </svg>
              </div>
              <div className="glassy-circle-badge float-item-8">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d0f601" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story in Numbers Section */}
      <section className="stats-numbers-section reveal-up">
        <h2 className="stats-section-title">
          Polweb <em>story</em><br />in numbers
        </h2>

        <div className="stats-interactive-grid">
          {/* Column 1 */}
          <div className="stat-column-interactive col-clutch">
            <div className="floating-widgets-container">
              <div className="floating-card rating-card card-left">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Client 1" className="card-avatar" />
                <div className="rating-content">
                  <div className="stars-row">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="rating-number">5.0</span>
                </div>
              </div>
              <div className="floating-card rating-card card-right">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Client 2" className="card-avatar" />
                <div className="rating-content">
                  <div className="stars-row">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="rating-number">5.0</span>
                </div>
              </div>
            </div>

            <div className="massive-number">
              <CountUp target={5} decimals={1} duration={1800} />
            </div>
            <span className="stat-column-label">Clutch rate</span>
          </div>

          {/* Column 2 */}
          <div className="stat-column-interactive col-initiatives">
            <div className="floating-widgets-container">
              <div className="floating-badge finance-badge">
                <div className="badge-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="badge-text-block">
                  <span className="badge-amount">$2.4M</span>
                  <span className="badge-desc">Myso Finance</span>
                </div>
                <span className="badge-time">Now</span>
              </div>
            </div>

            <div className="massive-number">
              <CountUp target={500} duration={2000} /><span>+</span>
            </div>
            <span className="stat-column-label">Platform initiatives</span>
          </div>

          {/* Column 3 */}
          <div className="stat-column-interactive col-team">
            <div className="floating-widgets-container">
              <div className="floating-capsule team-capsule capsule-vlad">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="Vlad" className="capsule-avatar" />
                <span className="capsule-name">Vlad</span>
              </div>
              <div className="floating-capsule team-capsule capsule-roman">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80" alt="Roman" className="capsule-avatar" />
                <span className="capsule-name">Roman</span>
              </div>
            </div>

            <div className="massive-number">
              <CountUp target={30} duration={2200} /><span>+</span>
            </div>
            <span className="stat-column-label">Technical experts</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;