export default function Registration() {
  return (
    <section className="section reg-section" style={{ minHeight: '60vh' }}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Registration</div>
          <h2 className="section-title">Registration <span>Fees</span></h2>
        </div>
        <div className="reg-table-wrap">
          <table>
            <thead>
              <tr><th>Author Category</th><th>Indian (INR)</th><th>Foreign (USD)</th></tr>
            </thead>
            <tbody>
              <tr><td colSpan="3" style={{ background: '#e8f5e9', fontWeight: '700', color: '#1a7a4a' }}>IEEE Member</td></tr>
              <tr className="member-row"><td>Students (UG/PG/PhD)</td><td>₹5,000</td><td>$100</td></tr>
              <tr className="member-row"><td>Academia (Faculty)</td><td>₹10,000</td><td>$250</td></tr>
              <tr><td colSpan="3" style={{ background: '#fff3e0', fontWeight: '700', color: '#e87722' }}>Non-IEEE Member</td></tr>
              <tr><td>Students (UG/PG/PhD)</td><td>₹6,000</td><td>$120</td></tr>
              <tr><td>Academia (Faculty)</td><td>₹12,000</td><td>$300</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}