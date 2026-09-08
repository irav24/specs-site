import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-[#0057b2] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">
              IEEE SPeCS <span className="text-[#7ed957]">2027</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              IEEE Conference on Signal, Power & Computing Systems. Bridging foundational research with applied engineering paradigms.
            </p>
            <div className="flex items-center gap-4">
              <img src="/nitslogo.png" alt="NIT Silchar Logo" className="h-16 lg:h-20 w-auto object-contain" />
              
              
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 border-b border-slate-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Call for Papers", path: "/call-for-papers" },
                { name: "Important Dates", path: "/authors#dates" },
                { name: "Registration Fees", path: "/registration" },
                { name: "Organising Committee", path: "/committee/organising" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-sm hover:text-[#7ed957] transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-[#0057b2] group-hover:text-[#7ed957] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 border-b border-slate-700 pb-2">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Paper Submission", path: "/authors#submission" },
                { name: "IEEE Templates", url: "https://www.ieee.org" },
                { name: "Accommodation", path: "/accommodation" },
                { name: "Sponsorship Details", path: "/sponsors" },
                { name: "Conference Program", path: "/program" }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.url ? (
                    <a href={link.url} target="_blank" rel="noreferrer" className="text-sm hover:text-[#7ed957] transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-[#0057b2] group-hover:text-[#7ed957] transition-colors" />
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-sm hover:text-[#7ed957] transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-[#0057b2] group-hover:text-[#7ed957] transition-colors" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Secretariat */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 border-b border-slate-700 pb-2">
              Contact Secretariat
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0057b2] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Department of Electrical Engineering,<br />
                  National Institute of Technology Silchar<br />
                  Assam, India - 788010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0057b2] flex-shrink-0" />
                <a href="mailto:specs@nits.ac.in" className="text-sm hover:text-[#7ed957] transition-colors">
                  specs@nits.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#0057b2] flex-shrink-0 mt-1" />
                <div className="text-sm font-mono flex flex-col gap-1">
                  <span>+91 9476-355729</span>
                  <span>+91 94321-25545</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#0057b2] via-[#0057b2] via-[75%] to-[#7ed957] mb-8"></div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            &copy; {currentYear > 2027 ? currentYear : 2027} IEEE SPeCS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}