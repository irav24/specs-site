import React from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            For any queries regarding paper submission, registration, or logistics, please reach out to our official desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-[#0057b2]/30 transition-colors">
            <div className="p-4 bg-slate-50 rounded-full text-[#0057b2]">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Email Address</h3>
              <a href="mailto:specs@nits.ac.in" className="text-slate-600 font-medium hover:text-[#0057b2] transition-colors text-lg">
                specs@nits.ac.in
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-[#0057b2]/30 transition-colors">
            <div className="p-4 bg-slate-50 rounded-full text-[#0057b2]">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Phone Lines</h3>
              <p className="text-slate-600 font-mono font-medium text-lg">
                +91 9476-355729
                <br />
                +91 94321-25545
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-[#0057b2]/30 transition-colors">
            <div className="p-4 bg-slate-50 rounded-full text-[#0057b2]">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Official Website</h3>
              <a href="https://specs.nits.ac.in" target="_blank" rel="noreferrer" className="text-slate-600 font-medium hover:text-[#0057b2] transition-colors text-lg">
                specs.nits.ac.in
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-[#0057b2]/30 transition-colors">
            <div className="p-4 bg-slate-50 rounded-full text-[#0057b2]">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Conference Venue</h3>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Department of Electrical Engineering,<br />
                National Institute of Technology Silchar<br />
                Assam, India - 788010
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}