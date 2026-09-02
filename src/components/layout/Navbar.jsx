import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "Committee", path: "/committee/organising", // default click goes somewhere safe
      children: [
        { label: "Steering Committee", path: "/committee/steering" },
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
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm relative">
      
      {/* Vibrant Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0057b2] via-[#0057b2] to-[#7ed957]"></div>

      {/* High-Contrast Ticker */}
      <div className="w-full bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono font-medium">
          <div className="flex items-center gap-4 whitespace-nowrap overflow-x-auto scrollbar-none">
            <span className="text-[#7ed957] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7ed957] animate-pulse"></span>
              Updates
            </span>
            <span>Digest Deadline: Sept 1, 2026</span>
            <span className="text-slate-600">|</span>
            <span>Venue: NIT Silchar</span>
          </div>
          <span className="hidden md:inline-block text-slate-400">
            REC: #69741
          </span>
        </div>
      </div>

      {/* Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="w-full md:w-1/4 flex justify-between items-center md:justify-start">
            <img src="/specs.png" alt="SPeCS Logo" className="h-14 md:h-16 w-auto object-contain" />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <div className="w-full md:w-2/4 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-1">
              IEEE SPeCS 2027
            </h1>
            <h2 className="text-sm font-semibold text-[#0057b2] uppercase tracking-wider max-w-lg mx-auto">
              From Signals to Smart Systems
            </h2>
          </div>

          <div className="hidden md:flex w-full md:w-1/4 items-center justify-end gap-6">
             <img src="/nitslogo.png" alt="NIT Silchar Logo" className="h-10 md:h-12 w-auto object-contain" />
             <img src="/ieeelogo.png" alt="IEEE Logo" className="h-8 md:h-9 w-auto object-contain" />
          </div>

        </div>
      </div>

      {/* Navigation Matrix */}
      <div className="w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 py-1">
            {navLinks.map((item) => {
              const hasDropdown = Boolean(item.children);

              if (!hasDropdown) {
                return (
                  <NavLink key={item.label} to={item.path} end={item.path === "/"} className={({ isActive }) => `px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-md ${isActive ? "bg-[#0057b2] text-white" : "text-slate-600 hover:text-[#0057b2] hover:bg-slate-50"}`}>
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div key={item.label} className="relative group" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                  <button className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-md flex items-center gap-1.5 ${activeDropdown === item.label || window.location.pathname.includes(item.path) ? "bg-[#0057b2] text-white" : "text-slate-600 hover:text-[#0057b2] hover:bg-slate-50"}`}>
                    <span>{item.label}</span>
                  </button>

                  {/* High-Impact Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 min-w-[240px] z-50">
                      <div className="bg-[#0057b2] rounded-xl p-2 shadow-2xl border border-[#004185] overflow-hidden relative">
                        {/* Subtle Green Glow inside dropdown */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#7ed957]"></div>
                        <ul className="flex flex-col space-y-1 mt-1">
                          {item.children.map((subItem) => (
                            <li key={subItem.label}>
                              <Link to={subItem.path} className="block px-4 py-2.5 text-white hover:bg-[#7ed957] hover:text-[#0057b2] font-semibold text-sm transition-colors rounded-md">
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
        </div>
      </div>
    </header>
  );
}