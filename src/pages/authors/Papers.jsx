import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ChevronRight, ArrowRight, X } from 'lucide-react';

export default function CallForPapers() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    { 
      id: "Track I", 
      name: "Signal Processing and Computer Vision",
      subtracks: [
        "Digital Signal, Image and Video Processing",
        "Computer Vision and Pattern Recognition",
        "Speech, Audio and Multimedia Signal Processing",
        "Biomedical Signal and Image Processing",
        "Machine Learning for Signal and Vision Applications"
      ]
    },
    { 
      id: "Track II", 
      name: "Power & Energy Systems",
      subtracks: [
        "Power System Planning, Operation and Protection",
        "Renewable Energy and Distributed Generation",
        "Smart Grids, Microgrids and Energy Management",
        "Power System Stability, Reliability and Resilience",
        "Energy Storage, Electric Vehicles and Integrated Energy Systems"
      ]
    },
    { 
      id: "Track III", 
      name: "Power Electronics, Drives and Energy-Efficient Converters",
      subtracks: [
        "Power Electronic Converters and Topologies",
        "Electrical Machines, Drives and Motion Control",
        "Wide-Bandgap Semiconductor Devices and Applications",
        "Power Electronics for Renewable Energy and Electric Vehicles",
        "High-Efficiency, High-Power-Density and Energy-Efficient Conversion Systems"
      ]
    },
    { 
      id: "Track IV", 
      name: "VLSI, Communications, and Nanotechnology",
      subtracks: [
        "VLSI Design, FPGA and Reconfigurable Computing",
        "Wireless, Optical and Next-Generation Communication Systems",
        "Antennas, RF, Microwave and Millimetre-Wave Technologies",
        "Nanoelectronics, Nanomaterials and Nanoscale Devices",
        "Integrated Circuits, MEMS and Emerging Hardware Technologies"
      ]
    },
    { 
      id: "Track V", 
      name: "Computational Intelligence, Techniques, Data Informatics",
      subtracks: [
        "Artificial Intelligence and Machine Learning",
        "Deep Learning, Reinforcement Learning and Evolutionary Computing",
        "Data Analytics, Data Mining and Knowledge Discovery",
        "Computational Optimization and Intelligent Decision-Making",
        "Big Data, Data Informatics and Intelligent Information Systems"
      ]
    },
    { 
      id: "Track VI", 
      name: "Embedded Systems for Digitization in Industry Applications",
      subtracks: [
        "Embedded Systems, IoT and Cyber-Physical Systems",
        "Industrial Internet of Things and Smart Manufacturing",
        "Edge Computing, Embedded AI and Intelligent Devices",
        "Digital Twins, Industry 4.0 and Industrial Automation",
        "Real-Time Systems, Sensor Networks and Embedded Applications"
      ]
    },
    { 
      id: "Track VII", 
      name: "Control, Automation and Robotics",
      subtracks: [
        "Modern Control Theory and Intelligent Control",
        "Industrial Automation and Process Control",
        "Robotics, Autonomous Systems and Human-Robot Interaction",
        "UAVs, Multi-Agent Systems and Autonomous Navigation",
        "Optimization, Estimation and Control for Complex Systems"
      ]
    },
    { 
      id: "Track VIII", 
      name: "Cybersecurity and Emerging Technologies",
      subtracks: [
        "Cybersecurity, Privacy and Secure Communication",
        "Blockchain, Distributed Systems and Trust Technologies",
        "Cloud, Edge and Quantum Computing",
        "Generative AI, Large Language Models and Emerging AI Technologies",
        "Digital Forensics, Threat Intelligence and Resilient Cyber-Physical Systems"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Call for Papers
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Authors are invited to submit original, unpublished research papers (4-6 pages PDF following the IEEE double-column template).
          </p>
        </div>

        {/* Technical Tracks Grid */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 text-center border-b border-slate-200 pb-4">
            Technical Tracks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#0057b2] hover:border-t-[#7ed957] hover:shadow-md transition-all flex flex-col h-full"
              >
                <span className="font-mono text-xs text-[#0057b2] font-bold uppercase tracking-widest block mb-3">
                  {track.id}
                </span>
                <h3 className="font-serif text-lg text-slate-900 font-bold leading-snug mb-6 flex-grow">
                  {track.name}
                </h3>
                
                {/* Clickable View Subtracks Button */}
                <button 
                  onClick={() => setSelectedTrack(track)}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0057b2] transition-colors group/btn"
                >
                  View Subtracks 
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-[#7ed957] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Action Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#7ed957]"></div>
          <FileText className="w-12 h-12 text-[#0057b2] mx-auto mb-6" />
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Paper Submission is Open</h3>
          <p className="text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
            A paper will appear in the proceedings if at least one of the authors of the accepted paper registers before the registration deadline. Presenting the accepted paper is a prerequisite for appearing in IEEE Xplore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://cmt3.research.microsoft.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0057b2] text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#004185] transition-colors shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
              Microsoft CMT Portal <ExternalLink className="w-4 h-4 text-[#7ed957]" />
            </a>
            <a href="https://www.ieee.org" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-100 text-slate-700 font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              IEEE Templates <Download className="w-4 h-4 text-[#0057b2]" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Modal Overlay for Subtracks */}
      {selectedTrack && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setSelectedTrack(null)}></div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full border-t-4 border-t-[#7ed957] relative z-10 animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedTrack(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6 border-b border-slate-100 pb-4 pr-8">
              <span className="font-mono text-sm text-[#0057b2] font-bold uppercase tracking-widest block mb-2">
                {selectedTrack.id} Subtracks
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                {selectedTrack.name}
              </h2>
            </div>
            
            <ul className="space-y-3">
              {selectedTrack.subtracks.map((sub, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#7ed957] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-base md:text-lg leading-relaxed">
                    {sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}