import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ position: 'relative', zIndex: 50 }}
    >
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
    </motion.nav>
  );
}