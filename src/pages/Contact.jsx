import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your custom scratch-built form logic goes here later!
    alert("Form submission logic coming soon!");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
            Contact <span className="text-orange-600">Us</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Have questions about paper submissions, registration metrics, or accommodation? Drop us a line.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Email Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-5 group hover:border-orange-100 transition-all">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Queries</h3>
                <p className="text-lg font-semibold text-slate-800">specs@nits.ac.in</p>
                <p className="text-xs text-slate-500 mt-1">Response within 24-48 business hours</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-5 group hover:border-orange-100 transition-all">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Assistance</h3>
                <p className="text-lg font-semibold text-slate-800">+91 9476-355729</p>
                <p className="text-xs text-slate-500 mt-1">Mon-Fri, 10:00 AM — 5:00 PM IST</p>
              </div>
            </motion.div>

            {/* Venue Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-5 group hover:border-orange-100 transition-all">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Conference Venue</h3>
                <p className="text-lg font-semibold text-slate-800">NIT Silchar</p>
                <p className="text-sm text-slate-600">Department of Electrical Engineering</p>
                <p className="text-xs text-slate-500 mt-1">Silchar, Cachar, Assam, India — 788010</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Scratch Form Container */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <HelpCircle className="w-5 h-5 text-orange-500" />
              <h3 className="text-xl font-bold">Send an Instant Message</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Query regarding Registration / Paper Tracks" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Type your message here..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Message
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}