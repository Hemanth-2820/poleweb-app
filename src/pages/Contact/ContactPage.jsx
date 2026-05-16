import React, { useState, useRef, useEffect } from 'react';
import { Check, Mail, Copy, Phone, Paperclip, ArrowDownRight, ArrowUp, X } from 'lucide-react';
import html2canvas from 'html2canvas';
import './ContactPage.css';

const LinkedinIcon = ({ size = 24, fill = "none" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactPage = () => {
  const [activeBudgets, setActiveBudgets] = useState([]);
  const [fileName, setFileName] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [pieces, setPieces] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const formRef = useRef(null);
  const rightColRef = useRef(null);

  const budgetOptions = ['Up to ₹5K', '₹5K to ₹10K', '₹10K to ₹25K', '₹25K to ₹50K', '₹50K to ₹1L', '₹1L to ₹5L', '₹5L to ₹10L', '>₹10L'];

  const resetForm = () => {
    setShowSuccess(false);
    setFileName('');
    setActiveBudgets([]);
    if (formRef.current) formRef.current.reset();
  };

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        resetForm();
      }, 40000); // 40 seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleExplode = async (e) => {
    e.preventDefault();
    if (isExploding || showSuccess || !rightColRef.current) return;

    const element = rightColRef.current;

    // Capture the form as a canvas image
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 1, // Keep standard scale to simplify math
      logging: false
    });
    const imgData = canvas.toDataURL('image/png');

    // Calculate dimensions
    const rect = element.getBoundingClientRect();
    const cols = 12;
    const rows = 12;
    const pieceWidth = rect.width / cols;
    const pieceHeight = rect.height / rows;

    const newPieces = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Calculate explosion physics from center
        const centerX = cols / 2;
        const centerY = rows / 2;
        const dirX = c - centerX;
        const dirY = r - centerY;

        const force = Math.random() * 200 + 100;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

        // Add random scatter and rotation
        const tx = (dirX / dist) * force + (Math.random() - 0.5) * 100;
        const ty = (dirY / dist) * force + (Math.random() - 0.5) * 100;
        const rot = (Math.random() - 0.5) * 1080;

        newPieces.push({
          id: `${r}-${c}`,
          x: c * pieceWidth,
          y: r * pieceHeight,
          w: pieceWidth,
          h: pieceHeight,
          bgX: -(c * pieceWidth),
          bgY: -(r * pieceHeight),
          tx,
          ty,
          rot,
          imgData
        });
      }
    }

    setPieces(newPieces);
    setIsExploding(true);

    // Show success state after animation finishes
    setTimeout(() => {
      setIsExploding(false);
      setShowSuccess(true);
      setPieces([]);
    }, 1200);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <div>
            <h2 className="contact-left-heading">We Build the Right <br /> Technology! <br /> That Powers Your Business.</h2>

            <p className="contact-left-description">
              At POLEWEB, we make technology work for you. From building custom apps and websites to setting up smart AI chatbots and secure cloud hosting, Digital Marketing and E-Commerce. We handle the complex technical work so you can focus on growing your business.
            </p>
          </div>

          <div className="inquiries-section">
            <h4>Project inquiries</h4>
            <div 
              className="inquiry-item" 
              onClick={() => {
                navigator.clipboard.writeText('info@poleweb.in');
                alert('Email copied to clipboard!');
              }}
            >
              <Mail className="inquiry-icon" size={18} />
              <a href="mailto:info@poleweb.in" style={{ textDecoration: 'none', color: 'inherit' }} onClick={(e) => e.stopPropagation()}>
                <span>info@poleweb.in</span>
              </a>
              <Copy className="inquiry-icon" size={18} style={{ marginLeft: 'auto' }} />
            </div>
            <a href="tel:7671031879" className="inquiry-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Phone className="inquiry-icon" size={18} />
              <span>Book a call</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right" ref={rightColRef} style={{ position: 'relative' }}>

          {/* Explosion Pieces */}
          {isExploding && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50, pointerEvents: 'none' }}>
              {pieces.map((p) => (
                <div
                  key={p.id}
                  className="shatter-piece"
                  style={{
                    position: 'absolute',
                    left: p.x,
                    top: p.y,
                    width: p.w,
                    height: p.h,
                    backgroundImage: `url(${p.imgData})`,
                    backgroundPosition: `${p.bgX}px ${p.bgY}px`,
                    backgroundSize: `${rightColRef.current?.offsetWidth}px ${rightColRef.current?.offsetHeight}px`,
                    '--tx': `${p.tx}px`,
                    '--ty': `${p.ty}px`,
                    '--rot': `${p.rot}deg`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Success State */}
          {showSuccess ? (
            <div className="success-state">
              <div className="success-icon">
                <Check size={40} strokeWidth={3} />
              </div>
              <h2>Project Received!</h2>
              <p>We'll review your details and get back to you within 12 hours.</p>
              <button
                className="budget-chip"
                onClick={resetForm}
                style={{ marginTop: '30px', background: '#f4f4f4', padding: '12px 24px' }}
                type="button"
              >
                Submit another project
              </button>
            </div>
          ) : (
            <div style={{ opacity: isExploding ? 0 : 1, transition: 'opacity 0.1s', pointerEvents: isExploding ? 'none' : 'auto' }}>
              <h2>Tell us about your project</h2>
              <p className="contact-right-description">
                Have an idea or need a technical partner? We’re here to help. Our team is ready to deliver everything from websites to AI integrations.
              </p>



              <form onSubmit={handleExplode} ref={formRef}>
                <div className="form-grid">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Full name*"
                      required
                      pattern="^[A-Za-z\s]+$"
                      title="Please enter only letters and spaces."
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="Email*" 
                      required 
                      // Pattern handles: no consecutive dots, no leading/trailing dots in local part, exactly one @
                      pattern="^[a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email address (e.g., user@example.com). No consecutive dots or leading/trailing dots."
                      onBlur={(e) => {
                        e.target.value = e.target.value.trim();
                      }}
                      onInput={(e) => {
                        // Remove spaces and illegal characters like #
                        e.target.value = e.target.value.replace(/[\s#]/g, '');
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="WhatsApp Number*" 
                      required 
                      pattern="[0-9]*"
                      title="Please enter only numbers."
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-input" style={{ appearance: 'none', background: 'transparent', cursor: 'pointer' }} required defaultValue="">
                      <option value="" disabled>Select Service*</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="software-development">Software Development</option>
                      <option value="ecommerce-solutions">E-Commerce Solutions</option>
                      <option value="aws-devops">AWS & DevOps</option>
                      <option value="hosting-server-management">Hosting & Server Mgt</option>
                      <option value="api-integrations">API Integrations</option>
                      <option value="security-maintenance">Security & Maintenance</option>
                      <option value="ai-rag-chatbots">AI & RAG Chatbots</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="ivr-solutions">IVR Solutions</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">What is your budget?*</label>
                    <div className="budget-options">
                      {budgetOptions.map(option => (
                        <div
                          key={option}
                          className={`budget-chip ${activeBudgets.includes(option) ? 'active' : ''}`}
                          onClick={() => {
                            setActiveBudgets(prev =>
                              prev.includes(option)
                                ? prev.filter(item => item !== option)
                                : [...prev, option]
                            );
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <input type="text" className="form-input" placeholder="Description" />
                  </div>
                </div>

                <div className="form-bottom">
                  <div className="attachment-group">
                    {fileName ? (
                      <div className="file-preview-box">
                        <span className="file-name">{fileName}</span>
                        <button 
                          type="button" 
                          className="remove-file-btn"
                          onClick={() => setFileName('')}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <label className="attach-label">
                        <input
                          type="file"
                          accept=".doc,.docx,.pdf"
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setFileName(e.target.files[0].name);
                            }
                          }}
                        />
                        <Paperclip size={20} className="attach-icon-svg" />
                        <span className="attach-text-new">Attach files (.pdf, .doc)</span>
                      </label>
                    )}
                  </div>

                  <button 
                    className={`submit-btn ${fileName || isSubmitHovered ? 'file-attached' : ''}`} 
                    type="submit"
                    onMouseEnter={() => setIsSubmitHovered(true)}
                    onMouseLeave={() => setIsSubmitHovered(false)}
                  >
                    <div className="submit-arrow">
                      {fileName || isSubmitHovered ? <ArrowUp size={20} /> : <ArrowDownRight size={20} />}
                    </div>
                    <div className="submit-text">Submit</div>
                  </button>

                  <div className="disclaimer">
                    By submitting this form you agree to our <br /> <b>Cookie Policy</b> and <b>Privacy Policy</b>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
