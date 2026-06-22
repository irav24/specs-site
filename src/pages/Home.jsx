import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExploreCarousel from '../components/ExploreCarousel';

// --- Animation Blueprints ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const deadline = new Date('2026-08-01T00:00:00');
    const timer = setInterval(() => {
      const diff = deadline - new Date();
      if(diff <= 0) return;
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        {/* We wrap the inner hero content in a motion.div to orchestrate the stagger */}
        <motion.div 
          className="hero-content-wrapper"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="hero-badge">From Signals to Smart Systems</motion.div>
          <motion.h1 variants={fadeInUp}>IEEE <span>SPeCS</span> 2027</motion.h1>
          <motion.p variants={fadeInUp} className="hero-sub">2027 IEEE International Conference on Signal, Power &amp; Computing Systems</motion.p>
          <motion.p variants={fadeInUp} className="hero-conf">Organized by the Department of Electrical Engineering, National Institute of Technology Silchar.</motion.p>
          
          <motion.div variants={fadeInUp} className="hero-meta">
            <div className="hero-meta-item"><span className="icon">📅</span><div><strong>25–27 May, 2027</strong><span>Conference Dates</span></div></div>
            <div className="hero-meta-item"><span className="icon">📍</span><div><strong>NIT Silchar, India</strong><span>Venue</span></div></div>
            <div className="hero-meta-item"><span className="icon">🌐</span><div><strong>Hybrid Mode</strong><span>In-person &amp; Virtual</span></div></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-logos">
            <img src="/ieeelogo.png" alt="IEEE" style={{ height: '70px' }} />
            <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
            <img src="/specs.jpeg" alt="IEEE Signal Processing" style={{ height: '70px' }} />
            <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
            <img src="/nitslogo.png" alt="NIT Silchar" style={{ height: '70px' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Animate the countdown bar sliding up */}
      <motion.div 
        className="countdown-bar"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="countdown-inner">
          <p className="countdown-label"> Paper Submission Closes In</p>
          <div className="countdown-units">
            <div className="countdown-unit"><span className="num">{timeLeft.days}</span><span className="lbl">Days</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.hours}</span><span className="lbl">Hours</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.minutes}</span><span className="lbl">Mins</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.seconds}</span><span className="lbl">Secs</span></div>
          </div>
        </div>
      </motion.div>

      {/* Animate the About section as the user scrolls to it */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <div className="section-tag">About the Conference</div>
                <h2 className="section-title">IEEE <span>SPeCS</span> 2027</h2>
              </div>
              <p>The IEEE International Conference on Signal, Power and Computing Systems (SPeCS) is a premier international conference organized by the Department of Electrical Engineering, National Institute of Technology Silchar...</p>
              <div className="about-highlight">
                <p>All accepted papers will appear in IEEE Xplore after successful registration.</p>
              </div>
            </div>
            <div className="about-stats">
              <motion.div whileHover={{ scale: 1.05 }} className="stat-card"><span className="num">600</span><p className="lbl">Acre Green Campus</p></motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="stat-card"><span className="num">4</span><p className="lbl">IEEE Co-sponsors</p></motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <ExploreCarousel />
    </>
  );
}