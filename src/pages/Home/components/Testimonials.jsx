import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Arounda excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. Their inventive solutions captivate visually and significantly enhance the user experience.",
    author: "Aetienne Sardon",
    role: "Founder, MYSO Finance",
    highlight: "MYSO Finance raised $2.4M and reached 85% user engagement with our design"
  },
  {
    quote: "I was impressed with the high levels of detail and polish for all the features. Their professionalism, dedication, responsiveness, and determination are commendable.",
    author: "Jimmy Hosang",
    role: "Founder & CEO, MOJO-CX",
    highlight: "MOJO-CX by TMAC streamlines contact centers with AI-powered coaching and prompts."
  },
  {
    quote: "Working with Arounda is really smooth in terms of communication and workflow. They demonstrated their commitment to creating a product that resonated with our target audience.",
    author: "Stephane Heip",
    role: "CMO, Enzyme",
    highlight: "Enzyme is a DeFi platform that helps businesses and developers easily create and manage tokenized financial products."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="testimonials-header">
            <Quote className="quote-icon" size={60} />
          </div>

          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="testimonial-content"
              >
                <h3 className="testimonial-highlight">{testimonials[currentIndex].highlight}</h3>
                <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                <div className="testimonial-author-box">
                  <h4 className="testimonial-author">{testimonials[currentIndex].author}</h4>
                  <p className="testimonial-role">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-controls">
            <button onClick={prev} className="control-btn"><ChevronLeft size={24} /></button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot-indicator ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            <button onClick={next} className="control-btn"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
