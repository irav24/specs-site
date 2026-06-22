import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2 } from 'lucide-react';

const committeeData = [
  {
    category: "Chief Patron & Patrons",
    members: [
      { 
        name: "Prof. Dilip Kumar Baidya", 
        role: "Director", 
        affiliation: "NIT Silchar",
        image: null // Replace with image URL later
      },
      { 
        name: "Prof. Debangshu Dey", 
        role: "Chair", 
        affiliation: "IEEE Kolkata Section",
        image: null
      }
    ]
  },
  {
    category: "General Chairs",
    members: [
      { 
        name: "Dr. Tanmoy Malakar", 
        role: "Department of EE", 
        affiliation: "NIT Silchar",
        image: null
      },
      { 
        name: "Dr. Rajeeb Dey", 
        role: "Department of EE", 
        affiliation: "NIT Silchar",
        image: null
      }
    ]
  }
];

// Animation Blueprints
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Committee() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase">
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
            Steering & Organising <span className="text-indigo-600">Committee</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Meet the academic leaders and technical experts driving the vision behind SPeCS 2027.
          </p>
        </div>

        {/* Committee Groups */}
        <div className="space-y-16">
          {committeeData.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Group Title */}
              <h3 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-3 mb-8">
                {group.category}
              </h3>

              {/* Members Grid */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {group.members.map((member, memberIndex) => (
                  <motion.div 
                    key={memberIndex}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all group flex flex-col items-center text-center"
                  >
                    {/* Avatar / Placeholder */}
                    <div className="w-24 h-24 rounded-full mb-5 overflow-hidden bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center relative">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-10 h-10 text-slate-300" />
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Member Details */}
                    <h4 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-indigo-600 mb-3">
                      {member.role}
                    </p>
                    
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg w-full">
                      <Building2 className="w-3.5 h-3.5" />
                      {member.affiliation}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}