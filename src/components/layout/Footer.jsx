export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logos">
          <div className="footer-logo-item">
            <img src="/ieeelogo.png" alt="IEEE" style={{ height: '40px', margin: '0 auto' }} />
            <div className="logo-text">IEEE Silchar Subsection</div>
          </div>
          <div className="footer-logo-item">
            <img src="/specs.jpeg" alt="Signal Processing" style={{ height: '40px', margin: '0 auto' }} />
            <div className="logo-text">Kolkata Chapter</div>
          </div>
          <div className="footer-logo-item">
            <img src="/nitslogo.png" alt="NIT Silchar" style={{ height: '55px', margin: '0 auto' }} />
            <div className="logo-text">NIT Silchar</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2027 IEEE SPeCS — IEEE International Conference on Signal, Power &amp; Computing Systems.</p>
          <div className="footer-specs" style={{ fontFamily: "'Merriweather', serif", fontSize: '14px', fontWeight: '700', color: 'rgba(255,255,255,0.5)' }}>SPeCS <span style={{ color: 'var(--gold)' }}>2027</span></div>
        </div>
      </div>
    </footer>
  );
}