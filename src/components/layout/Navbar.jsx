import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "Committee", path: "/committee/organising",
      children: [
        { label: "Organising Committee", path: "/committee/organising" }, 
        { label: "Advisory Committee", path: "/committee/advisory" }
      ]
    },
    {
      label: "Authors", path: "/authors",
      children: [{ label: "Important Dates", path: "/authors#dates" }, { label: "Call for Papers", path: "/call-for-papers" }, { label: "Paper Submission", path: "/authors#submission" }]
    },
    { label: "Registration", path: "/registration" },
    {
      label: "Program", path: "/program",
      children: [{ label: "At a Glance", path: "/program#glance" }, { label: "Keynote Speakers", path: "/speakers" }, { label: "Special Sessions", path: "/program#special-sessions" }, { label: "Workshop", path: "/program#workshop" }, { label: "Tutorials", path: "/program#tutorials" }]
    },
    {
      label: "Sponsors", path: "/sponsors",
      children: [{ label: "Our Sponsors", path: "/sponsors#our-sponsors" }, { label: "Sponsorship Details", path: "/sponsors#details" }]
    },
    {
      label: "Accommodation", path: "/accommodation",
      children: [{ label: "Students", path: "/accommodation#students" }, { label: "Our Suggestion", path: "/accommodation#suggestions" }]
    },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      
      {/* Seamless Marquee Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Moving Ticker Bar */}
      <div className="w-full bg-[#0057b2] text-white py-2 md:py-2.5 overflow-hidden border-b border-white/20">
        <div className="animate-scroll">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 px-4 md:px-8 whitespace-nowrap text-[10px] sm:text-[11px] md:text-xs font-mono font-medium">
              
              
              <span className="text-white/40">|</span>
              <span>Venue: NIT Silchar </span>
              <span className="text-[#7ed957] font-bold tracking-widest ml-1 md:ml-2">REC: #69741</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">

          {/* Left Side: SPeCS Logo & Mobile Hamburger */}
          <div className="w-full lg:w-1/4 flex justify-between items-center lg:justify-start">
            <img src="/specs.png" alt="SPeCS Logo" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 -mr-2 text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Center: Title */}
          <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-0.5 md:mb-1">
              IEEE SPeCS 2027
            </h1>
          </div>

          {/* Right Side: NITS & IEEE Logos (Hidden on small screens to save space) */}
          <div className="hidden lg:flex w-full lg:w-1/4 items-center justify-end gap-6">
             <img src="/nitslogo.png" alt="NIT Silchar Logo" className="h-16 lg:h-20 w-auto object-contain" />
             <img src="/Sponsor.png" alt="Sponsor logo" className="h-16 lg:h-20 w-auto object-contain" />
          </div>

        </div>
      </div>

      {/* Navigation Matrix: 75% Blue, 25% Green Fade */}
      <div className="w-full bg-gradient-to-r from-[#0057b2] via-[#0057b2] via-[75%] to-[#7ed957]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-1 py-0">
            {navLinks.map((item) => {
              const hasDropdown = Boolean(item.children);
              const isActiveRoute = location.pathname.startsWith(`/${item.label.toLowerCase()}`) || (item.path === "/" && location.pathname === "/");

              if (!hasDropdown) {
                return (
                  <NavLink 
                    key={item.label} 
                    to={item.path} 
                    end={item.path === "/"} 
                    className={`px-4 py-3.5 text-xs font-bold uppercase tracking-wider transition-all rounded-t-sm ${
                      isActiveRoute 
                      ? "bg-white text-[#0057b2]" 
                      : "text-white hover:bg-black/20"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div 
                  key={item.label} 
                  className="relative group" 
                  onMouseEnter={() => setActiveDropdown(item.label)} 
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`px-4 py-3.5 text-xs font-bold uppercase tracking-wider transition-all rounded-t-sm flex items-center gap-1.5 ${
                    activeDropdown === item.label || isActiveRoute
                    ? "bg-white text-[#0057b2]" 
                    : "text-white hover:bg-black/20"
                  }`}>
                    <span>{item.label}</span>
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-0 min-w-[240px] z-50">
                      <div className="bg-white rounded-b-xl rounded-tr-xl p-2 shadow-2xl border border-slate-200 border-t-[#0057b2] border-t-2 relative overflow-hidden">
                        <ul className="flex flex-col space-y-1">
                          {item.children.map((subItem) => (
                            <li key={subItem.label}>
                              <Link 
                                to={subItem.path} 
                                className="block px-4 py-2.5 text-slate-700 hover:bg-[#7ed957]/10 hover:text-[#0057b2] font-semibold text-sm transition-colors rounded-md"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Collapsible Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-3 space-y-1 border-t border-white/10 mt-2">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      block px-4 py-3 text-sm font-bold transition-colors uppercase tracking-widest rounded-md
                      ${isActive && !item.children ? "bg-white text-[#0057b2]" : "text-white hover:bg-black/20"}
                    `}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="pl-6 space-y-1 my-1.5 border-l-2 border-white/30 ml-4">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-black/10 transition-colors rounded-md"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </header>
  );
}