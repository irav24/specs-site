import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Inbox, Camera, Activity, Zap, Cpu, Radio, ChevronRight } from 'lucide-react';

// Animation blueprints for the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Papers() {
  const milestones = [
    { icon: <Calendar className="w-6 h-6 text-orange-500" />, event: "Call for Paper", date: "August 1", year: "2026" },
    { icon: <Inbox className="w-6 h-6 text-blue-500" />, event: "Submission Deadline", date: "Dec 15", year: "2026" },
    { icon: <Camera className="w-6 h-6 text-emerald-500" />, event: "Camera Ready", date: "Jan 31", year: "2027" },
  ];

  const tracks = [
    { id: "I", name: "Signal Processing and Computer Vision", icon: <Activity className="w-8 h-8" /> },
    { id: "II", name: "Power & Energy Systems", icon: <Zap className="w-8 h-8" /> },
    { id: "III", name: "Power Electronics & Converters", icon: <Cpu className="w-8 h-8" /> },
    { id: "IV", name: "VLSI, Comms & Nanotechnology", icon: <Radio className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Milestones Section --- */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase">
              Key Milestones
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
              Important Dates
            </h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {milestones.map((item, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-center gap-5"
              >
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">{item.event}</h3>
                  <p className="text-2xl font-bold text-slate-900">{item.date}, <span className="text-slate-400 font-medium">{item.year}</span></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- Technical Tracks Section --- */}
        <div>
          <div className="mb-10 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
              Call for Papers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
              Technical Tracks
            </h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {tracks.map((track) => (
              <motion.div 
                key={track.id} 
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-blue-500 mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    {track.icon}
                  </div>
                  <div className="text-xs font-bold text-slate-400 mb-2 tracking-widest uppercase">
                    Track {track.id}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug mb-4">
                    {track.name}
                  </h3>
                  
                  <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}