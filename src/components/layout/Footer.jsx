import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#002b5e] text-white border-t-4 border-[#7ed957]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Branding & About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#7ed957] tracking-tight">
              IEEE SPeCS 2027
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed font-medium pr-4">
              2027 IEEE International Conference on Signal, Power & Computing Systems. 
              Organized by the Department of Electrical Engineering, National Institute of Technology Silchar.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <img src="/ieeelogo.png" alt="IEEE Logo" className="h-10 object-contain bg-white p-1" />
              <img src="/nitslogo.png" alt="NIT Silchar Logo" className="h-10 object-contain bg-white p-1" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider border-b border-[#004185] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Call for Papers", path: "/call-for-papers" },
                { name: "Paper Submission", path: "/authors#submission" },
                { name: "Registration Fees", path: "/registration" },
                { name: "Conference Program", path: "/program" },
                { name: "Steering Committee", path: "/committee#steering" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-blue-200 hover:text-[#7ed957] text-sm flex items-center transition-colors font-medium">
                    <ChevronRight className="w-4 h-4 mr-1 text-[#7ed957]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider border-b border-[#004185] pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7ed957] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-100 font-medium leading-relaxed">
                  Department of Electrical Engineering<br />
                  National Institute of Technology Silchar<br />
                  Silchar, Assam, India - 788010
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7ed957] flex-shrink-0" />
                <span className="text-sm text-blue-100 font-medium">9476-355729 / 94321-25545</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7ed957] flex-shrink-0" />
                <a href="mailto:specs@nits.ac.in" className="text-sm text-blue-100 hover:text-[#7ed957] transition-colors font-medium">
                  specs@nits.ac.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#001938] border-t border-[#003a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs font-medium text-center md:text-left tracking-wide">
            &copy; {new Date().getFullYear()} IEEE SPeCS. All rights reserved. NIT Silchar.
          </p>
          <div className="text-blue-300 text-xs font-medium uppercase tracking-wider">
            Record No. #69741
          </div>
        </div>
      </div>
    </footer>
  );
}