import React, { useState } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

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

    // Email Validation: Reject numbers-only local part and ensure valid format
    const emailRegex = /^(?![0-9]+@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    // WhatsApp Validation: Exactly 10 digits
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
      // Clear the form fields
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

  const accordionData = [
    {
      title: 'Expertise Across Technologies:',
      content: 'From Java development to robust DevOps automation, we provide seamless digital transformation solutions.'
    },
    {
      title: 'Quality-Driven Approach:',
      content: 'We adhere to the highest industry standards to ensure that every project we deliver is of superior quality and meets all client requirements.'
    },
    {
      title: 'Enterprise-Grade SAP Solutions:',
      content: 'Our team specializes in implementing and managing enterprise-grade SAP solutions that streamline business processes and enhance productivity.'
    },
    {
      title: 'Agile & Scalable Solutions:',
      content: 'We use agile methodologies to deliver scalable solutions that grow with your business, ensuring long-term success.'
    },
    {
      title: 'Client-Centric Approach:',
      content: 'Your goals are our priority. We work closely with you to understand your needs and deliver customized solutions that drive value.'
    }
  ];

  const coreValues = [
    {
      title: 'Innovation:',
      content: 'We embrace the latest technologies to create cutting-edge solutions.'
    },
    {
      title: 'Quality:',
      content: 'We adhere to the highest standards to ensure every project is of superior quality and meets all client requirements.'
    },
    {
      title: 'Customer-Centric Approach:',
      content: 'Your goals are our priority. We work closely with you to understand your needs and deliver customized solutions.'
    },
    {
      title: 'Integrity & Transparency:',
      content: 'We believe in honest and open communication with our clients and partners in every project.'
    },
    {
      title: 'Continuous Growth:',
      content: 'We are committed to learning and evolving to better serve our clients in a rapidly changing industry.'
    }
  ];

  return (
    <div className="about-container">
      {/* Top Banner Section */}
      <section className="about-banner">
        <div
          className="about-banner-bg"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>
        <div className="about-banner-content">
          <h1>About Us</h1>
          <nav className="breadcrumbs">
            <a href="/">Home</a> <span className="separator">›</span> About Us
          </nav>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-intro-grid">
          <div className="about-intro-image">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Tech Innovation" />
            <div className="about-intro-quote-overlay">
              <span className="quote-icon">"</span>
              <p>At HMNS Software Solutions, we don't just build software—we build solutions that drive success.</p>
            </div>
          </div>
          <div className="about-intro-content">
            <span className="section-label">ABOUT US</span>
            <h2>Empowering Businesses with Cutting-Edge Technology</h2>
            <p className="intro-desc">
              At HMNS Software Solutions, we believe in the power of technology to transform businesses,
              enhance efficiency, and drive innovation. As a leading software solutions provider,
              we specialize in <strong>Java Development, Software Testing, DevOps Automation, and SAP Solutions</strong>,
              helping businesses streamline operations and achieve their goals.
            </p>

            <div className="intro-highlight-box">
              <p>
                With a team of <strong>highly skilled professionals and industry experts</strong>,
                we deliver <strong>customized, scalable, and future-ready solutions</strong> tailored to
                your unique business needs.
              </p>
            </div>

            <p className="intro-sub-desc">
              Our commitment to excellence, innovation, and customer satisfaction sets us apart in the competitive IT landscape.
            </p>

            <button className="btn-get-started">GET STARTED</button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Minimal Text Style) */}
      <section className="mv-text-section">
        <div className="mv-text-block">
          <h4 className="mv-label">MISSION</h4>
          <h2 className="mv-statement">
            Our mission is to provide world-class software solutions that empower businesses to innovate, scale, and succeed in the digital era. We strive to deliver high-quality, cost-effective, and customized technology solutions that drive measurable results.
          </h2>
        </div>

        <div className="mv-text-block">
          <h4 className="mv-label">VISION</h4>
          <h2 className="mv-statement">
            Our vision is to be a trusted global leader in software development and IT solutions, recognized for our expertise, innovation, and commitment to client success. We aim to continuously push the boundaries of technology to create a smarter, more connected future.
          </h2>
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

      {/* Hero Section */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>
        <div className="about-hero-content">
          <h1>Don't Hesitate To Contact Us For Better Information And Services</h1>
          <p>
            Partner with HMNS Software Solutions and take your business to new heights
            with cutting-edge technology and innovative solutions. Contact us today to
            discuss your project needs!
          </p>
        </div>
      </section>

      {/* Why Choose & Form Section */}
      <section className="about-middle">
        <div className="why-choose-section">
          <div
            className="why-choose-bg"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800")' }}
          ></div>
          <div className="why-choose-content">
            <h2>Why Choose HMNS Software Solutions??</h2>

            <div className="accordion">
              {accordionData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <span>{activeAccordion === index ? '−' : '+'}</span>
                    {item.title}
                  </div>
                  {activeAccordion === index && (
                    <div className="accordion-body">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="why-choose-btns">
              <button className="btn-quote">GET A QUOTE</button>
              <a href="#get-started" className="btn-started">GET STARTED →</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form className="form-grid" onSubmit={handleFormSubmit} noValidate>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
            </div>
            <div className="form-group full-width">
              <label>Email <span>*</span></label>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
              {formErrors.email && <span className="error-text">{formErrors.email}</span>}
            </div>
            <div className="form-group full-width">
              <label>WhatsApp Number <span>*</span></label>
              <div className="whatsapp-input">
                <span style={{ marginRight: '10px' }}>🇮🇳</span>
                <input type="tel" name="whatsapp" placeholder="10 Digit WhatsApp Number without Country Code" value={formData.whatsapp} onChange={handleInputChange} />
              </div>
              {formErrors.whatsapp && <span className="error-text">{formErrors.whatsapp}</span>}
            </div>
            <div className="form-group full-width">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} />
            </div>
            <div className="form-group full-width">
              <label>Your Message <span>*</span></label>
              <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleInputChange}></textarea>
              {formErrors.message && <span className="error-text">{formErrors.message}</span>}
            </div>
            <div className="form-group full-width">
              <button type="submit" className="btn-submit" disabled={!isFormValid()}>SUBMIT FORM</button>
            </div>
          </form>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="about-stats">
        <div className="stat-item">
          <div className="stat-icon">👥</div>
          <div className="stat-number">210 <span>+</span></div>
          <div className="stat-label">Satisfied Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🚀</div>
          <div className="stat-number">250 <span>+</span></div>
          <div className="stat-label">Completed Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">👍</div>
          <div className="stat-number">15 <span>+</span></div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🌐</div>
          <div className="stat-number">48 <span>+</span></div>
          <div className="stat-label">Professional Team</div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
