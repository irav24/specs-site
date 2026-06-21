export default function Contact() {
  return (
    <section className="section contact-section" style={{ minHeight: '60vh' }}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag" style={{ background: 'var(--orange)' }}>Get in Touch</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Contact <span style={{ color: 'var(--gold)' }}>Us</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>📧 Email</h3>
            <div className="contact-item"><span className="icon">🌐</span><p>specs@nits.ac.in</p></div>
          </div>
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <div className="contact-item"><span className="icon">📱</span><p>+91 9476-355729</p></div>
          </div>
          <div className="contact-card">
            <h3>📍 Venue</h3>
            <div className="contact-item"><span className="icon">🏫</span><p>NIT Silchar, Assam</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}