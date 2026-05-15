import React from 'react';
import './BrandsMarquee.css';

const brands = [
  "SaaS", "AI", "Web 3.0", "Fintech", "Healthcare"
];

const BrandsMarquee = () => {
  return (
    <section className="brands-marquee-section">
      <div className="brands-marquee-wrapper">
        <div className="marquee-track">
          {/* Double the list for seamless looping */}
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="brand-item">
              <span className="brand-text">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
