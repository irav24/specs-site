import React from 'react';
import { motion } from 'framer-motion';

const committeeData = [
  {
    category: "Steering Committee",
    headerColor: "bg-[#0057b2]", // Deep Blue
    roles: [
      { 
        title: null, 
        members: [
          "Prof. Subhas C. Mukhopadhyay, Macquarie University, Australia",
          "Prof. Santu Rana, Deakin University, Australia",
          "Prof. Saugat Bhattacharya, Ulster University, United Kingdom",
          "Prof. K V S Hari, IISc Bangalore, India",
          "Prof. Prabir Kumar Biswas, IIT Kharagpur, India",
          "Prof. Anindya Nag, Dresden, Germany",
          "Prof. N P Padhy, Director, MNIT Jaipur, India",
          "Prof. Amit Konar, Jadavpur University"
        ]
      }
    ]
  },
  {
    category: "Organising Committee",
    headerColor: "bg-[#7ed957]", // Lime Green
    roles: [
      {
        title: "Chief Patron",
        members: ["Prof. Dilip Kumar Baidya, Director, NIT Silchar"]
      },
      {
        title: "Patrons",
        members: [
          "Prof. Debangshu Dey, Chair, IEEE Kolkata Section",
          "Dr. Asha Rani M A, Chair, IEEE Silchar Subsection"
        ]
      },
      {
        title: "General Chairs",
        members: [
          "Dr. Tanmoy Malakar, NIT Silchar",
          "Dr. Rajeeb Dey, NIT Silchar",
          "Prof. Ram Bilash Pachori, IIT Indore"
        ]
      },
      {
        title: "Technical Program Chairs",
        members: [
          "Prof. N B Dev Choudhury, NIT Silchar",
          "Prof. Arup Kumar Goswami, NIT Silchar",
          "Prof. Sovan Dalai, Jadavpur University"
        ]
      }
    ]
  }
];

export default function Committee() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0057b2] uppercase tracking-wide">
            Conference <span className="text-[#7ed957]">Committee</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {committeeData.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="flex flex-col border border-slate-200 shadow-sm"
            >
              {/* Solid Color Block Header from Flyer */}
              <div className={`${group.headerColor} py-2 px-4 text-center`}>
                <h3 className="text-white font-bold text-lg tracking-wider uppercase">
                  {group.category}
                </h3>
              </div>
              
              {/* Dense List Layout */}
              <div className="p-5 bg-white">
                {group.roles.map((roleGroup, roleIdx) => (
                  <div key={roleIdx} className="mb-4 last:mb-0">
                    {roleGroup.title && (
                      <h4 className="text-[#0057b2] font-bold text-sm mb-1.5">
                        {roleGroup.title}
                      </h4>
                    )}
                    <ul className="space-y-1.5">
                      {roleGroup.members.map((member, memberIdx) => (
                        <li key={memberIdx} className="text-slate-800 text-sm flex items-start">
                          <span className="text-slate-400 mr-2 mt-0.5">•</span>
                          <span className="font-medium">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}