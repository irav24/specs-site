import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    // Wrapped in a pristine header container to fully control background and layout
    <header className="w-full bg-white border-b border-slate-200">
      
      {/* 1. Technical Notice Ticker Bar */}
      <div className="w-full bg-slate-900 text-slate-100 text-[11px] font-bold tracking-wider uppercase py-2.5 px-4 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="text-blue-400 font-extrabold">📢 UPDATES:</span>
            <span>INITIAL DIGEST DEADLINE: AUGUST 1, 2026</span>
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
          <div className="flex flex-wrap -mb-px">
            {[
              { label: "Home", path: "/" },
              { label: "Call for Papers", path: "/call-for-papers" },
              { label: "Registration Fees", path: "/registration" },
              { label: "Organizing Committee", path: "/committee" },
              { label: "Contact Desk", path: "/contact" }
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
          </div>
        </div>
      </div>
    </header>
  );
}