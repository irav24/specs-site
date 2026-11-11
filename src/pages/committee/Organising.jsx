import React from 'react';

export default function Organising() {
  const committeeData = [
    {
      role: "Chief Patron",
      members: [
        { name: "Dilip Kumar Baidya", affiliation: "Director, NIT Silchar", image: "/director.JPG" }
      ]
    },
    {
      role: "Patrons",
      members: [
        { name: "Asha Rani M. A", affiliation: "Chair, IEEE Silchar Subsection", image: "/asha.jpg" },
        { name: "Biswendu Chatterjee", affiliation: "Chair, IEEE SPS Kolkata Section", image: "/biswendu.jpeg" },
        { name: "Debangshu Dey", affiliation: "Chair, IEEE Kolkata Section", image: "/debangshu.jpeg" },
      ]
    },
    {
      role: "Honorary General Chair",
      members: [
        { name: "Subhas C. Mukhopadhyay", affiliation: "Macquarie University", image: "/subhas.webp" },
      ]
    },
    {
      role: "General Chairs",
      members: [
        { name: "Dulal Chandra Das", affiliation: "NIT Silchar", image: "/dulal.jpg" },
        { name: "Rajeeb Dey", affiliation: "NIT Silchar", image: "/rajeeb.jpg" },
        { name: "Sovan Dalai", affiliation: "Jadavpur University", image: "/sovan.gif" },
      ]
    },
    {
      role: "Technical Program Chair",
      members: [
        { name: "N B Dev Choudhury", affiliation: "NIT Silchar", image: "/nbdc.jpg" },
      ]
    },
    {
      role: "Program Chairs",
      members: [
        { name: "Arup Kumar Goswami", affiliation: "NIT Silchar", image: "/akg.jpg" },
        { name: "Jyoti Prakash Mishra", affiliation: "NIT Silchar", image: "/jpm.jpg" },
        { name: "Lalit Chandra Saikia", affiliation: "NIT Silchar", image: "/lcs.jpg" },
                { name: "Saurabh Chaudhury", affiliation: "NIT Silchar", image: "/saurabh.jpg" },
                        { name: "Tanmoy Malakar", affiliation: "NIT Silchar", image: "/tanmoy.jpg" },


      ]
    },
    {
      role: "Organizing Chairs",
      members: [
        { name: "Biswarup Ganguly", affiliation: "NIT Silchar", image: "/ganguly.jpg" },
        { name: "Prasanta Roy", affiliation: "NIT Silchar", image: "/prasanta.jpg" }
      ]
    },
    {
      role: "Organizing Secretaries",
      members: [
        { name: "Sunil Kumar Mishra", affiliation: "NIT Silchar", image: "/skm.jpg" },
        { name: "Susanta Ray", affiliation: "IEEE Kolkata Section", image: "/susanta.jpg"},
        { name: "Tapan Pradhan", affiliation: "NIT Silchar", image: "/tapan.jpg" },
      ]
    },
       {
      role: "Finance Chair",
      members: [
        { name: "Biswajit Sahoo", affiliation: "NIT Silchar", image: "/sahoo.jpg" }
      ]
    },
    
    
    {
      role: "Publication Chairs",
      members: [
        { name: "Avadh Pati", affiliation: "NIT Silchar", image: "/avadh.jpg" },

        { name: "Mallikarjuna Balimidi", affiliation: "NIT Silchar", image: "/mallikarjuna.jpg" },
                { name: "Megavath Diwakar Naik", affiliation: "NIT Silchar", image: "/megavath.jpg" },


        { name: "Partha Kayal", affiliation: "NIT Silchar", image: "/partha.jpg" },
        { name: "Subhajit Maur", affiliation: "RMGEC Purulia", image: "/subhajit.jpg" },
      ]
    },
    {
      role: "Women in Engineering Chairs",
      members: [
        { name: "Anwesha Khasnobish", affiliation: "TCS Research, Kolkata, India", image: "/anwesha.jpeg" },
        { name: "Nabanita Adhikary", affiliation: "NIT Silchar", image: "/nabanita.jpg" },
                { name: "Saheli Ray", affiliation: "NIT Silchar", image: "/saheli.jpg" },

      ]
    },
    {
      role: "Industry Interaction Chairs",
      members: [
                { name: "Amritesh Kumar", affiliation: "NIT Silchar", image: "/amritesh.JPG" },

        { name: "Biswajit Chakraborty", affiliation: "Megger India Pvt. Ltd", image: null },
        { name: "Chayan Bhattacharjee", affiliation: "NIT Silchar", image: "/chayan.jpg" },
        { name: "Monalisa Pal", affiliation: "Mathworks India Pvt. Ltd.", image: null },
        { name: "Ranjay Hazra", affiliation: "NIT Silchar", image: "/ranjay.jpg" }
      ] 
    },
 
    {
      role: "Special Sessions/Tutorial Chairs",
      members: [
        { name: "Ambrish Devanshu", affiliation: "NIT Silchar", image: "/ambrish.jpeg" },
        { name: "Debayan Sarkar", affiliation: "NIT Silchar", image: "/debayan.JPG" },
        { name: "Vivekanandan S.", affiliation: "NIT Silchar", image: "/vivekanandan.jpg" }
      ] 
    },
    
    {
      role: "Publicity Chairs",
      members: [
        { name: "Sreejith S", affiliation: "NIT Silchar", image: "/sreejith.jfif" },
                { name: "Sreenu Sreekumar", affiliation: "NIT Silchar", image: "/sreenu.png" },

        { name: "Subrata Biswas", affiliation: "IEEE SPS Kolkata Chapter", image: "/subrata.jpg" }
      ] 
    },
    
    {
      role: "Website Chairs",
      members: [
        { name: "Anupam Biswas", affiliation: "NIT Silchar", image: "/anupam.jpg" },
        { name: "Ashish Paramane", affiliation: "NIT Silchar", image: "/ashish.jpg" },
        { name: "Partha Pakray", affiliation: "NIT Silchar", image: "/parthapak.png" },
        { name: "Swapna Mansani", affiliation: "NIT Silchar", image: "/swapna.png" },
      ] 
    },
    
    
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Organizing Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Committee Sections */}
        <div className="space-y-24">
          {committeeData.map((group, index) => (
            <div key={index} className="text-center">
              
              <h2 className="inline-block font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-12 border-b-2 border-slate-200 pb-3">
                {group.role}
              </h2>

              {/* FLEXBOX LAYOUT for centered wrapping */}
              <div className="flex flex-wrap justify-center gap-8">
                {group.members.length > 0 ? (
                  group.members.map((member, memberIdx) => (
                    <div 
                      key={memberIdx} 
                      /* 
                        Width calculations ensure max 3 items per row on large screens,
                        2 on medium screens, and 1 on mobile, while centering wrapped rows 
                      */
                      className="flex flex-col items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0057b2]/30 transition-all w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px] group"
                    >
                      
                      {/* Image / Initial Placeholder (Enlarged) */}
                      {member.image ? (
                        <div className="w-44 h-44 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-md group-hover:border-[#7ed957]/30 transition-colors">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-44 h-44 rounded-full bg-slate-100 border-4 border-slate-50 shadow-md mb-6 flex items-center justify-center group-hover:bg-[#0057b2]/5 transition-colors">
                           <span className="text-[#0057b2] font-serif font-bold text-6xl opacity-40">
                              {member.name.charAt(0)}
                           </span>
                        </div>
                      )}

                      {/* Member Details */}
                      <div className="text-center mt-auto px-2">
                        <h3 className="font-serif text-xl text-[#0057b2] font-bold leading-snug mb-2">
                          {member.name}
                        </h3>
                        <p className="text-base text-slate-600 font-medium leading-relaxed">
                          {member.affiliation}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  /* "To be updated" Placeholder for empty arrays */
                  <div className="w-full flex justify-center -mt-4">
                    <span className="px-8 py-3 bg-slate-100 text-slate-500 font-bold rounded-full text-sm uppercase tracking-widest border border-slate-200 shadow-sm">
                      To be updated
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}