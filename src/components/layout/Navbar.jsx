import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    // Wrapped in a pristine header container to fully control background and layout
    <header className="w-full bg-white border-b border-slate-200">
      
      {/* 1. Technical Notice Ticker Bar */}
      <div className="w-full bg-slate-900 text-slate-100 text-[11px] font-bold tracking-wider uppercase py-2.5 px-4 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="text-blue-400 font-extrabold">📢 UPDATES:</span>
            <span>INITIAL DIGEST DEADLINE: SEPTEMBER 1, 2026</span>
            <span className="text-slate-600">|</span>
            <span>VENUE: NIT SILCHAR (HYBRID MODE)</span>
          </div>
          <span className="hidden md:inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] px-2 py-0.5 rounded-xs font-mono tracking-tight">
            RECORD NO. #69741
          </span>
        </div>
      </div>

      {/* 2. Institutional Brand Display Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Logo & Core Title Block */}
          <div className="flex items-center gap-4 text-left">
            <img src="/nitslogo.png" alt="NIT Silchar Logo" className="h-14 w-auto object-contain" />
            <div className="border-l border-slate-200 pl-4">
              <h1 className="text-lg md:text-xl font-black text-slate-900 tracking-tight leading-none">
                IEEE SPeCS 2027
              </h1>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1">
                International Conference on Signal, Power & Computing Systems
              </p>
              <span className="text-[10px] block font-semibold text-slate-400 mt-0.5 uppercase">
                Department of Electrical Engineering, National Institute of Technology Silchar
              </span>
            </div>
          </div>

          {/* Core Co-Sponsor Anchors */}
          <div className="flex items-center gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
            <div className="text-center">
              <img src="/ieeelogo.png" alt="IEEE Logo" className="h-8 mx-auto object-contain" />
              <span className="text-[9px] font-bold text-slate-400 block mt-1 uppercase tracking-tight">Silchar Subsection</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <img src="/specs.jpeg" alt="Signal Processing Chapter Logo" className="h-8 mx-auto object-contain" />
              <span className="text-[9px] font-bold text-slate-400 block mt-1 uppercase tracking-tight">Kolkata Chapter</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Navigation System Link Matrix */}
      <div className="w-full bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -mb-px relative">
            
            {/* Standard Nav Links */}
            {[
              { label: "Home", path: "/" },
              { label: "Registration", path: "/registration" },
              
              { label: "Speakers", path: "/speakers" },
              { label: "Program", path: "/schedule" },
            ].map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) => `
                  px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center
                  ${isActive 
                    ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Dropdown: Committee */}
            <div 
              className="relative group flex"
              onMouseEnter={() => setOpenDropdown('committee')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center flex items-center gap-1.5 ${
                  openDropdown === 'committee' 
                  ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}>
                Committee
                <span className="text-[9px]">▼</span>
              </button>
              
              {openDropdown === 'committee' && (
                <div className="absolute left-0 top-full mt-0 w-60 z-50">
                  <div className="bg-[#eef2ff] rounded-xl p-5 shadow-xl border border-indigo-100/50">
                    <ul className="flex flex-col space-y-4">
                      <li><Link to="/committee#steering" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Steering Committee</Link></li>
                      <li><Link to="/committee#organising" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Organising Committee</Link></li>
                      <li><Link to="/committee#advisory" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Advisory Committee</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Call for Papers */}
            <div 
              className="relative group flex"
              onMouseEnter={() => setOpenDropdown('papers')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center flex items-center gap-1.5 ${
                  openDropdown === 'papers' 
                  ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}>
                Call for Papers
                <span className="text-[9px]">▼</span>
              </button>
              
              {openDropdown === 'papers' && (
                <div className="absolute left-0 top-full mt-0 w-64 z-50">
                  <div className="bg-[#eef2ff] rounded-xl p-5 shadow-xl border border-indigo-100/50">
                    <ul className="flex flex-col space-y-4">
                      <li><Link to="/call-for-papers" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Call For Papers</Link></li>
                      <li><Link to="/call-for-papers#camera-ready" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Camera Ready Version</Link></li>
                      <li><Link to="/call-for-papers#travel-grant" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Travel Grant Award</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Sponsors */}
            <div 
              className="relative group flex"
              onMouseEnter={() => setOpenDropdown('sponsors')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center flex items-center gap-1.5 ${
                  openDropdown === 'sponsors' 
                  ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}>
                Sponsors
                <span className="text-[9px]">▼</span>
              </button>
              
              {openDropdown === 'sponsors' && (
                <div className="absolute left-0 top-full mt-0 w-56 z-50">
                  <div className="bg-[#eef2ff] rounded-xl p-5 shadow-xl border border-indigo-100/50">
                    <ul className="flex flex-col space-y-4">
                      <li><Link to="/sponsors#our-sponsors" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Our Sponsors</Link></li>
                      <li><Link to="/sponsors#details" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Sponsorship Details</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Accomodation */}
            <div 
              className="relative group flex"
              onMouseEnter={() => setOpenDropdown('accommodation')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center flex items-center gap-1.5 ${
                  openDropdown === 'accommodation' 
                  ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}>
                Accomodation
                <span className="text-[9px]">▼</span>
              </button>
              
              {openDropdown === 'accommodation' && (
                <div className="absolute left-0 top-full mt-0 w-56 z-50">
                  <div className="bg-[#eef2ff] rounded-xl p-5 shadow-xl border border-indigo-100/50">
                    <ul className="flex flex-col space-y-4">
                      <li><Link to="/accomodation#students" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Students</Link></li>
                      <li><Link to="/accomodation#suggestions" className="block text-[#22215b] hover:text-blue-600 font-medium text-sm transition-colors">Our Suggestion</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) => `
                px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 text-center
                ${isActive 
                  ? "border-blue-600 text-blue-600 bg-white font-black shadow-xs" 
                  : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }
              `}
            >
              Contact Desk
            </NavLink>

          </div>
        </div>
      </div>
    </header>
  );
}