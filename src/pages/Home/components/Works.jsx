import React from 'react';
import { ArrowUpRight, CheckCircle2, User } from 'lucide-react';
import './Works.css';
import job1 from '../../../assets/jobinfo.1.png';
import job2 from '../../../assets/jobinfo.2.png';
import health1 from '../../../assets/healthcard.1.png';
import health2 from '../../../assets/healthcard.2.png';
import food1 from '../../../assets/food.1.png';
import food2 from '../../../assets/food.2.png';

const projects = [
  {
    id: 1,
    title: 'Jobs Information Portal',
    category: 'Full-Stack Career Platform',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'TypeScript'],
    desc: 'A modern job discovery platform for internships, fresher openings, and remote roles. Built for speed, SEO, and seamless user experience across all devices.',
    images: [job1, job2],
    link: 'https://jobsinformation.vercel.app/',
    stats: '10k+ Monthly Active Users',
    tag: 'Web App'
  },
  {
    id: 2,
    title: 'Health Card Platform',
    category: 'Digital Healthcare Solution',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST API'],
    desc: 'A comprehensive healthcare management system featuring digital health cards, QR-based records, and AI-powered health recommendations for affordable care.',
    images: [health1, health2],
    link: 'https://health-card-bay.vercel.app/',
    stats: '5k+ Patient Records Managed',
    tag: 'Healthcare'
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    category: 'SaaS & POS Solution',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    desc: 'A comprehensive full-stack system to manage restaurant orders, menu, billing, inventory, and real-time sales analytics through a unified dashboard.',
    images: [food1, food2],
    link: 'https://resturant-management-system-plum.vercel.app/ ',
    stats: '30% Faster Order Processing',
    tag: 'SaaS'
  }
];

const Works = () => {
  return (
    <section className="works-section">
      <div className="container works-container-override">
        <div className="works-header">
          <span className="works-eyebrow">Our Work</span>
          <h2 className="works-title">
            Real Projects.<br />
            <span className="works-title-accent">Real Results.</span>
          </h2>
          <p className="works-subtitle">
            A look at some of the digital products and platforms we have built — and the business outcomes they delivered.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-row" key={project.id}>
              {/* Sticky Left Column */}
              <div className="project-content-sticky">
                <div className="project-info-minimal">
                  {/* Tags Row */}
                  <div className="project-pill-tags">
                    <span className="pill-tag">{project.tag}</span>
                    <span className="pill-tag">{project.stats}</span>
                    <span className="pill-tag">🇺🇸</span>
                  </div>

                  {/* Large Title */}
                  <h2 className="project-display-title">
                    {project.title} {project.id === 1 ? 'simplified career search for freshers' : 
                     project.id === 2 ? 'reached 5k+ patients with digital healthcare' : 
                     'boosted efficiency by 30% for modern cafes'}
                  </h2>

                  <div className="project-divider"></div>

                  {/* Testimonial Section */}
                  <div className="project-testimonial">
                    <div className="clutch-row">
                      <span className="clutch-logo">Clutch</span>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="testimonial-text">
                      {project.desc} The platform's inventive solutions significantly enhanced the user experience and provided a seamless flow for all target users.
                    </p>
                  </div>

                  {/* Profile & Link Row */}
                  <div className="project-footer-row">
                    <div className="client-profile">
                      <div className="profile-icon-box">
                        <User size={24} color="#fff" />
                      </div>
                      <div className="profile-info">
                        <span className="profile-name">
                          {project.id === 1 ? 'Alex Johnson' : 
                           project.id === 2 ? 'Dr. Prasad' : 
                           'Varun Raj'}
                        </span>
                        <span className="profile-role">
                          {project.id === 1 ? 'Director of Talent Acquisition' : 
                           project.id === 2 ? 'Vajra Hospital Founder' : 
                           'Urban Umami Restaurant Owner'}
                        </span>
                      </div>
                    </div>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-arrow-link"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Scrolling Right Column */}
              <div className="project-images-column">
                {project.images.map((img, idx) => (
                  <div className="project-image-wrapper" key={idx}>
                    <div 
                      className="project-image" 
                      style={{ backgroundImage: `url(${img})` }}
                    />
                    <div className="image-overlay-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
