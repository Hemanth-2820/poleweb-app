import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    id: '01',
    category: 'Branding',
    items: ['Pitch Deck', 'Brand Identity', 'Logo Design', 'Graphic Design', 'Rebranding'],
    description: 'Build trust with design that resonates with your audience and stands out.',
  },
  {
    id: '02',
    category: 'UI/UX Design',
    items: ['Web Design', 'Mobile App Design', 'Website Redesign', 'UX/UI Audit'],
    description: 'Web & mobile app design focused on user conversion and engagement.',
  },
  {
    id: '03',
    category: 'Development',
    items: ['Web Development', 'MVP Development', 'WebFlow Development', 'Landing Page', 'Mobile Development'],
    description: 'Front-End & Back-End Development for scalable and fast websites.',
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            We unite brand, website, and UI/UX design into a holistic product
          </motion.p>
        </div>

        <div className="services-list">
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="service-number">{service.id}</div>
              <div className="service-content">
                <h3 className="service-title">{service.category}</h3>
                <div className="service-subitems">
                  {service.items.map((item, i) => (
                    <span key={i} className="service-subitem">{item}</span>
                  ))}
                </div>
              </div>
              <div className="service-arrow">
                <motion.div
                  animate={{ 
                    rotate: hoveredIndex === index ? 45 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1,
                    backgroundColor: hoveredIndex === index ? 'var(--accent-color)' : 'transparent',
                    color: hoveredIndex === index ? '#000' : 'var(--text-primary)'
                  }}
                  className="arrow-circle"
                >
                  <ArrowUpRight />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
