import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Works.css';

const works = [
  {
    id: 1,
    title: 'MYSO Finance',
    category: 'Web3 & DeFi',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2000&auto=format&fit=crop',
    stats: '$2.4M Raised'
  },
  {
    id: 2,
    title: 'MOJO-CX',
    category: 'AI & SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    stats: '85% Engagement'
  },
  {
    id: 3,
    title: 'Enzyme',
    category: 'Fintech Platform',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop',
    stats: '10x Faster'
  }
];

const Works = () => {
  return (
    <section className="section works-section">
      <div className="container">
        <div className="works-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured Works
          </motion.h2>
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="btn-view-all"
          >
            Explore all cases <ArrowRight size={18} />
          </motion.a>
        </div>

        <div className="works-grid">
          {works.map((work, index) => (
            <motion.div 
              key={work.id}
              className="work-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="work-image-container">
                <div className="work-image" style={{ backgroundImage: `url(${work.image})` }} />
                <div className="work-overlay">
                  <div className="work-stats">{work.stats}</div>
                </div>
              </div>
              <div className="work-info">
                <div className="work-category">{work.category}</div>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
