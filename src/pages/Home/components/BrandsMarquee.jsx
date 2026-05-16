import React from 'react';
import './BrandsMarquee.css';

const techRow1 = [
  { name: 'Figma', icon: '🎨' }, { name: 'JavaScript', icon: '🟨' }, { name: 'TypeScript', icon: '🔷' }, 
  { name: 'HTML5', icon: '🟧' }, { name: 'CSS3', icon: '💙' }, { name: 'React', icon: '⚛️' }, 
  { name: 'Redux', icon: '🔮' }, { name: 'Next.js', icon: '◼' }, { name: 'Vue.js', icon: '💚' }
];

const techRow2 = [
  { name: 'Node.js', icon: '🟢' }, { name: 'Express.js', icon: '🖤' }, { name: 'Prisma ORM', icon: '▲' }, 
  { name: 'MongoDB', icon: '🍃' }, { name: 'Firebase', icon: '🔥' }, { name: 'Redis', icon: '🔴' }, 
  { name: 'GraphQL', icon: '⬡' }, { name: 'jQuery', icon: '🔵' }
];

const techRow3 = [
  { name: 'Linux', icon: '🐧' }, { name: 'Git', icon: '🔶' }, { name: 'GitHub', icon: '🐙' }, 
  { name: 'Docker', icon: '🐳' }, { name: 'AWS', icon: '☁️' }, { name: 'WordPress', icon: '🔵' }, 
  { name: 'PostgreSQL', icon: '🐘' }
];

const techRow4 = [
  { name: 'Shopify', icon: '🛍️' }, { name: 'Tailwind CSS', icon: '🌊' }, { name: 'Flutter', icon: '💙' }, 
  { name: 'GitHub Actions', icon: '⚙️' }, { name: 'Nginx', icon: '🌐' }, { name: 'MySQL', icon: '🐬' },
  { name: 'Vite', icon: '⚡' }
];

const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${direction === 'right' ? 'marquee-reverse' : ''}`}>
        {[1, 2, 3, 4].map((setIndex) => (
          <div className="marquee-set" key={setIndex}>
            {items.map((tech, idx) => (
              <div className="tech-pill" key={`${setIndex}-${idx}`}>
                <span className="tech-emoji">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandsMarquee = () => {
  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2 className="tech-title">
          Our Technology <span className="tech-title-serif">Stack.</span>
        </h2>
        <p className="tech-subtitle">
          We use a modern, high-performance tech stack designed to build scalable digital products and automate business workflows.
        </p>
      </div>

      <div className="marquee-stack">
        <MarqueeRow items={techRow1} direction="left" />
        <MarqueeRow items={techRow2} direction="right" />
        <MarqueeRow items={techRow3} direction="left" />
        <MarqueeRow items={techRow4} direction="right" />
      </div>
    </section>
  );
};

export default BrandsMarquee;
