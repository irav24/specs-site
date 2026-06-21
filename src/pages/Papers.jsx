export default function Papers() {
  return (
    <>
      <section className="section dates-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag" style={{ background: 'var(--orange)' }}>Key Milestones</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Important <span style={{ color: 'var(--gold)' }}>Dates</span></h2>
          </div>
          <div className="dates-grid">
            <div className="date-card"><div className="event">📄 Call for Paper</div><div className="date">August 1</div><div className="year">2026</div></div>
            <div className="date-card"><div className="event">📥 Submission Deadline</div><div className="date">Dec 15</div><div className="year">2026</div></div>
            <div className="date-card"><div className="event">📷 Camera Ready</div><div className="date">Jan 31</div><div className="year">2027</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Call for Papers</div>
            <h2 className="section-title">Technical <span>Tracks</span></h2>
          </div>
          <div className="tracks-grid">
            <div className="track-card"><div className="track-num">Track I</div><div className="track-name">Signal Processing and Computer Vision</div></div>
            <div className="track-card"><div className="track-num">Track II</div><div className="track-name">Power &amp; Energy Systems</div></div>
            <div className="track-card"><div className="track-num">Track III</div><div className="track-name">Power Electronics & Converters</div></div>
            <div className="track-card"><div className="track-num">Track IV</div><div className="track-name">VLSI, Comms & Nanotechnology</div></div>
          </div>
        </div>
      </section>
    </>
  );
}