import React from 'react';
import './BrandsMarquee.css';

const technologies = [
  { name: 'Figma',        icon: '🎨' },
  { name: 'JavaScript',   icon: '🟨' },
  { name: 'TypeScript',   icon: '🔷' },
  { name: 'HTML5',        icon: '🟧' },
  { name: 'CSS3',         icon: '💙' },
  { name: 'React',        icon: '⚛️' },
  { name: 'Redux',        icon: '🔮' },
  { name: 'Next.js',      icon: '◼' },
  { name: 'jQuery',       icon: '🔵' },
  { name: 'Vue.js',       icon: '💚' },
  { name: 'Node.js',      icon: '🟢' },
  { name: 'Express.js',   icon: '🖤' },
  { name: 'Prisma ORM',   icon: '▲'  },
  { name: 'MongoDB',      icon: '🍃' },
  { name: 'Firebase',     icon: '🔥' },
  { name: 'Redis',        icon: '🔴' },
  { name: 'GraphQL',      icon: '⬡'  },
  { name: 'PostgreSQL',   icon: '🐘' },
  { name: 'Nginx',        icon: '🌐' },
  { name: 'MySQL',        icon: '🐬' },
  { name: 'Linux',        icon: '🐧' },
  { name: 'Git',          icon: '🔶' },
  { name: 'GitHub',       icon: '🐙' },
  { name: 'Docker',       icon: '🐳' },
  { name: 'AWS',          icon: '☁️' },
  { name: 'WordPress',    icon: '🔵' },
  { name: 'Shopify',      icon: '🛍️' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Flutter',      icon: '💙' },
  { name: 'GitHub Actions', icon: '⚙️' }
];

const BrandsMarquee = () => {
  // Triple the array to ensure seamless infinite looping with no gaps on wide monitors
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  const features = [
    { text: 'Building high-performance web apps using 30+ modern technologies' },
    { text: 'Guaranteed clean, robust & scalable code architecture for every platform' },
    { text: 'Seamless API integrations, cloud deployments & custom software solutions' }
  ];

  return (
    <section className="arounda-marquee-section">
      {/* 1. Scrolling Marquee Row */}
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((item, idx) => (
            <div className="marquee-logo-item" key={idx}>
              <div className="tech-marquee-item">
                <span className="tech-marquee-icon">{item.icon}</span>
                <span className="tech-marquee-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. PoleWeb Information Block (Exactly matches the uploaded design layout) */}
      <div className="tech-info-section container">
        {/* Background Radial Glow */}
        <div className="tech-info-radial-glow"></div>

        <div className="tech-info-inner">
          {/* Left Column: holds the vertically rotated RESULTS badge */}
          <div className="tech-info-badge-col">
            <div className="tech-info-badge-wrapper">
              <span className="tech-info-badge">RESULTS</span>
            </div>
          </div>

          {/* Right Column: holds the heading and list, perfectly aligned */}
          <div className="tech-info-content">
            <h2 className="tech-info-title">
              <span className="serif-italic-title">PoleWeb</span> is your perfect choice <br className="desktop-break" />
              in terms of
            </h2>

            <div className="tech-info-list">
              {features.map((feature, idx) => (
                <div className="tech-info-item" key={idx}>
                  <span className="tech-info-bullet">{'{/}'}</span>
                  <span className="tech-info-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
