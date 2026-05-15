import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Advantages.css';

const Advantages = () => {
  const points = [
    "Hiring system with immediate start",
    "Guaranteed on-time deliverables",
    "Flexible collaboration & fixed monthly rate"
  ];

  return (
    <section className="section advantages">
      <div className="container">
        <div className="advantages-wrapper">
          <motion.div 
            className="advantages-title-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Arounda is your perfect choice in terms of
            </h2>
          </motion.div>
          
          <div className="advantages-points-col">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                className="advantage-point"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <CheckCircle2 className="advantage-icon" size={28} />
                <p>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
