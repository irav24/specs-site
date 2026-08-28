import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submission logic coming soon!");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Contact Information (Flyer Style) */}
          <motion.div 
            className="border border-slate-200 bg-white shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Flyer Solid Green Block Header */}
            <div className="bg-[#7ed957] py-2 px-4 text-center">
              <h3 className="text-white font-bold text-lg tracking-wider uppercase">
                Contact
              </h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-[#0057b2]" />
                <a href="https://specs.nits.ac.in" className="text-slate-800 font-bold hover:text-[#0057b2] transition-colors">
                  specs.nits.ac.in
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#e4405f]" /> {/* Red mail icon accent from flyer */}
                <a href="mailto:specs@nits.ac.in" className="text-slate-800 font-bold hover:text-[#0057b2] transition-colors">
                  specs@nits.ac.in
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#25D366]" /> {/* WhatsApp green accent from flyer */}
                <div>
                  <p className="text-slate-800 font-bold">9476-355729 / 94321-25545</p>
                  <p className="text-xs text-slate-500 mt-1">Student registration allowed for single paper.</p>
                  <p className="text-xs text-slate-500">Academia registration for maximum of two papers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <MapPin className="w-6 h-6 text-[#0057b2]" />
                <div>
                  <p className="text-slate-800 font-bold">Department of Electrical Engineering</p>
                  <p className="text-sm text-slate-600">National Institute of Technology Silchar</p>
                  <p className="text-sm text-slate-600">Assam, India - 788010</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div 
            className="border border-slate-200 bg-white shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Flyer Solid Blue Block Header */}
            <div className="bg-[#0057b2] py-2 px-4 text-center">
              <h3 className="text-white font-bold text-lg tracking-wider uppercase">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0057b2] uppercase tracking-wider mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 rounded-none border border-slate-300 text-slate-800 focus:outline-none focus:border-[#7ed957] focus:ring-1 focus:ring-[#7ed957] transition-all bg-slate-50"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#0057b2] uppercase tracking-wider mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 rounded-none border border-slate-300 text-slate-800 focus:outline-none focus:border-[#7ed957] focus:ring-1 focus:ring-[#7ed957] transition-all bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0057b2] uppercase tracking-wider mb-1">Your Message</label>
                <textarea 
                  rows="4"
                  required
                  className="w-full px-3 py-2 rounded-none border border-slate-300 text-slate-800 focus:outline-none focus:border-[#7ed957] focus:ring-1 focus:ring-[#7ed957] transition-all bg-slate-50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-3 bg-[#0057b2] hover:bg-[#004185] text-white font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4 text-[#7ed957]" />
                Submit
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}