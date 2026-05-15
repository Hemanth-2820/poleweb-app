import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './BlogSection.css';

const articles = [
  {
    category: 'Branding',
    title: 'Global Branding in Enterprise SaaS and Fintech with Unified Identity',
    author: 'Vlad Gavriluk',
    date: '24.04.2026'
  },
  {
    category: 'Branding',
    title: 'Stages of Branding for Organizations With More Than One Decision Maker',
    author: 'Vlad Gavriluk',
    date: '20.04.2026'
  },
  {
    category: 'Design Audit',
    title: 'Brand SWOT Analysis for Companies That Cannot Afford Blind Spots',
    author: 'Vlad Gavriluk',
    date: '10.04.2026'
  }
];

const BlogSection = () => {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="blog-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Insights
          </motion.h2>
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="btn-view-all"
          >
            Read more articles <ArrowRight size={18} />
          </motion.a>
        </div>

        <div className="blog-list">
          {articles.map((article, idx) => (
            <motion.a 
              href="#"
              key={idx}
              className="blog-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="blog-item-content">
                <div className="blog-meta">
                  <span className="blog-category">{article.category}</span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
                <div className="blog-info">
                  <span className="blog-author">{article.author}</span>
                  <span className="blog-dot">•</span>
                  <span className="blog-date">{article.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
