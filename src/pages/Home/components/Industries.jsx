import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Industries.css';

const industries = [
  {
    title: 'Web 3, Blockchain',
    tags: ['dApps', 'DeFi', 'Play2Earn', 'IoT']
  },
  {
    title: 'AI & ML',
    tags: ['AI Marketing', 'HR & AI', 'Crypto AI', 'Education AI']
  },
  {
    title: 'SaaS',
    tags: ['CRM', 'HR', 'AI', 'ERP', 'Automation tools']
  },
  {
    title: 'Fintech',
    tags: ['Banking', 'Trading', 'Exchanges', 'IoT']
  },
  {
    title: 'Healthcare',
    tags: ['Mental health', 'Wellness', 'Insurance', 'Fitness']
  }
];

const Industries = () => {
  return (
    <section className="section industries">
      <div className="container">
        <div className="industries-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            A global team that understands your market, users, and how to make products win
          </motion.p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="industry-content">
                <h3 className="industry-title">{ind.title}</h3>
                <div className="industry-tags">
                  {ind.tags.map((tag, i) => (
                    <span key={i} className="industry-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="industry-arrow">
                <ArrowUpRight size={28} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
