import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#0057b2] mb-4">
              Get in Touch with Us!
            </h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              For all inquiries related to paper submission, registration, conference program, or general information, please contact the IEEE SPeCS 2027 organizing team.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-slate-700 font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="First Middle Last" 
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-[#0057b2] focus:ring-1 focus:ring-[#0057b2] transition-shadow placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-slate-700 font-semibold">
                  Organization <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Institute / Industry / Start-up / R&D" 
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-[#0057b2] focus:ring-1 focus:ring-[#0057b2] transition-shadow placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-slate-700 font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-[#0057b2] focus:ring-1 focus:ring-[#0057b2] transition-shadow placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-slate-700 font-semibold">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-[#0057b2] focus:ring-1 focus:ring-[#0057b2] transition-shadow placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-slate-700 font-semibold">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows="4"
                  placeholder="Write your message here..." 
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-[#0057b2] focus:ring-1 focus:ring-[#0057b2] transition-shadow placeholder:text-slate-400 resize-y"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-4 flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0057b2] text-white px-8 py-3.5 rounded-lg font-bold tracking-wide hover:bg-[#004185] hover:shadow-md hover:shadow-[#0057b2]/20 transition-all active:scale-[0.98]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="flex flex-col gap-6 lg:mt-2">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#0057b2] mb-4 border-b border-slate-100 pb-3">
                Phone
              </h3>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#0057b2] mt-0.5 shrink-0" />
                <div className="flex flex-col text-sm text-slate-600 font-medium space-y-1">
                  <span>+91 9476-355729</span>
                  <span>+91 94321-25545</span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#0057b2] mb-4 border-b border-slate-100 pb-3">
                Email
              </h3>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#0057b2] shrink-0" />
                <a href="mailto:specs@nits.ac.in" className="text-sm text-slate-600 font-medium hover:text-[#7ed957] transition-colors">
                  specs@nits.ac.in
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#0057b2] mb-4 border-b border-slate-100 pb-3">
                Address
              </h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0057b2] mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Department of Electrical Engineering,<br />
                  National Institute of Technology Silchar,<br />
                  Assam, India - 788010
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}