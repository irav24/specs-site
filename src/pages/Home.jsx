import { useState, useEffect } from 'react';

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
        <div className="hero-badge">From Signals to Smart Systems</div>
        <h1>IEEE <span>SPeCS</span> 2027</h1>
        <p className="hero-sub">2027 IEEE International Conference on Signal, Power &amp; Computing Systems</p>
        <p className="hero-conf">Organized by the Department of Electrical Engineering, National Institute of Technology Silchar.</p>
        
        <div className="hero-meta">
          <div className="hero-meta-item"><span className="icon">📅</span><div><strong>25–27 May, 2027</strong><span>Conference Dates</span></div></div>
          <div className="hero-meta-item"><span className="icon">📍</span><div><strong>NIT Silchar, India</strong><span>Venue</span></div></div>
          <div className="hero-meta-item"><span className="icon">🌐</span><div><strong>Hybrid Mode</strong><span>In-person &amp; Virtual</span></div></div>
        </div>

        <div className="hero-logos">
          <img src="/ieeelogo.png" alt="IEEE" style={{ height: '70px' }} />
          <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
          <img src="/specs.jpeg" alt="IEEE Signal Processing" style={{ height: '70px' }} />
          <span style={{ opacity: 0.3, margin: '0 15px' }}>|</span>
          <img src="/nitslogo.png" alt="NIT Silchar" style={{ height: '70px' }} />
        </div>
      </section>

      <div className="countdown-bar">
        <div className="countdown-inner">
          <p className="countdown-label"> Paper Submission Closes In</p>
          <div className="countdown-units">
            <div className="countdown-unit"><span className="num">{timeLeft.days}</span><span className="lbl">Days</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.hours}</span><span className="lbl">Hours</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.minutes}</span><span className="lbl">Mins</span></div>
            <div className="countdown-unit"><span className="num">{timeLeft.seconds}</span><span className="lbl">Secs</span></div>
          </div>
        </div>
      </div>

      <section className="section">
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
              <div className="stat-card"><span className="num">600</span><p className="lbl">Acre Green Campus</p></div>
              <div className="stat-card"><span className="num">4</span><p className="lbl">IEEE Co-sponsors</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}