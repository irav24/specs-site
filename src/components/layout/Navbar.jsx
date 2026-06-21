import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-top">
        <p className="nav-ticker">
          <span>📢 Call for Papers Open!</span> &nbsp;•&nbsp; Paper Submission Deadline: <span>August 1, 2026</span> &nbsp;•&nbsp; Venue: NIT Silchar, Assam &nbsp;•&nbsp; Mode: <span>Hybrid</span>
        </p>
      </div>
      <div className="nav-main">
        <div className="nav-brand">
          <img src="/specs.jpeg" alt="My Logo" style={{ height: '35px' }} />
          <div className="nav-title">IEEE International Conference on Signal, Power &amp; Computing Systems</div>
        </div>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/call-for-papers">Call for Papers</NavLink>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/committee">Committee</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}