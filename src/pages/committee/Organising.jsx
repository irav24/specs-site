import React from 'react';

export default function Organising() {
  const committeeData = [
    {
      role: "Chief Patron",
      members: [
        { name: "Prof. Dilip Kumar Baidya", affiliation: "Director, NIT Silchar", image: "/director.JPG" }
      ]
    },
    {
      role: "Patrons",
      members: [
        { name: "Asha Rani M. A", affiliation: "Chair, IEEE Silchar Subsection", image: "/asha.jpg" },
        { name: "Biswendu Chatterjee", affiliation: "Chair, IEEE SPS Kolkata Section", image: null },
        { name: "Debangshu Dey", affiliation: "Chair, IEEE Kolkata Section", image: "/dey.png" },
      ]
    },
    {
      role: "Honorary Chairs",
      members: [
        
        { name: "Subhas C. Mukhopadhyay", affiliation: "Macquarie University", image: null },
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
      role: "Organizing Chairs",
      members: [
        { name: "Biswarup Ganguly", affiliation: "NIT Silchar", image: "/ganguly.jpg" },
        { name: "Prasanta Roy", affiliation: "NIT Silchar", image: "/prasanta.jpg" }
      ]
    },
    {
      role: "Organizing Secretary",
      members: [
        { name: "Sunil Kumar Mishra", affiliation: "NIT Silchar", image: "/skm.jpg" },
        { name: "Susanta Ray", affiliation: "IEEE Kolkata Section", image: null },
        { name: "Tapan Pradhan", affiliation: "NIT Silchar", image: "/tapan.jpg" },
      ]
    },
    {
      role: "Technical Program Chairs",
      members: [
        { name: "N B Dev Choudhury", affiliation: "NIT Silchar", image: "/nbdc.jpg" },
        
      ]
    },
    {
      role: "Publication Chairs",
      members: [
        { name: "Avadh Pati", affiliation: "NIT Silchar", image: "/avadh.jpg" },
        { name: "Partha Kayal", affiliation: "NIT Silchar", image: "/partha.jpg" },
        { name: "Megavath Diwakar Naik", affiliation: "NIT Silchar", image: "/megavath.jpg" },
        { name: "Subhajit Maur", affiliation: "RMGEC Purulia", image: null },
        
      ]
    },
    
    
    {
      role: "Finance Chair",
      members: [
        { name: "Biswajit Sahoo", affiliation: "NIT Silchar", image: "/sahoo.jpg" }
      ]
    },
    {
      role: "Special Sessions/Tutorial Chairs",
      members: [
      { name: "Debayan Sarkar", affiliation: "NIT Silchar", image: "/debayan.JPG" },
     { name: "Vivekanandan S.", affiliation: "NIT Silchar", image: "/vivekanandan.jpg" }


      ] 
    },
    
    {
      role: "Women in Engineering Chairs",
      members: [
        { name: "Anwesha Khasnobish", affiliation: "TCS Research, Kolkata, India", image: null },
        { name: "Nabanita Adhikary", affiliation: "NIT Silchar", image: "/nabanita.jpg" },
       
      ]
    },
    {
      role: "Industry Interaction Chairs",
      members: [
        { name: "Amritesh Kumar", affiliation: "NIT Silchar", image: "/amritesh.JPG" },
        { name: "Monalisa Pal", affiliation: "Mathworks India Pvt. Ltd", image: null },
        { name: "Sanjay Kar Chowdhury", affiliation: "CESC Pvt Ltd, Kolkata", image: null },
      ]
    },
    
    {
      role: "Website Chairs",
      members: [
                { name: "Ashish Paramane", affiliation: "NIT Silchar", image: "/ashish.jpg" },
                { name: "Partha Pakray", affiliation: "NIT Silchar", image: "/parthapak.png" }


      ] 
    },
    
    {
      role: "Publicity Chairs",
      members: [
        { name: "Sreenu Sreekumar", affiliation: "NIT Silchar", image: "/sreenu.png" },
                { name: "Sreejith S", affiliation: "NIT Silchar", image: "./sreejith.jfif" },
                                { name: "Subrata Biswas", affiliation: "IEEE SPS Kolkata Chapter", image: null }

      ] 
    },
    {
      role: "Industry Interaction Chair",
      members: [
        { name: "Biswajit Chakraborty", affiliation: "Megger India Pvt. Ltd", image: null },
                { name: "Chayan Bhattacharjee", affiliation: "NIT Silchar", image: "/chayan.jpg" },
                                { name: "Amritesh Kumar", affiliation: "NIT Silchar", image: "/amritesh.JPG" },
                                                                { name: "Monalisa Pal", affiliation: "Mathworks India Pvt. Ltd.", image: null },
                                                              { name: "Ranjay Hazra", affiliation: "NIT Silchar", image: "/ranjay.jpg" }



      ] 
    },
     {
      role: "Website Chairs",
      members: [
                { name: "Ashish Paramane", affiliation: "NIT Silchar", image: "/ashish.jpg" },
                { name: "Partha Pakray", affiliation: "NIT Silchar", image: "/parthapak.png" },
                                { name: "Swapna Mansani", affiliation: "NIT Silchar", image: null },

                


      ] 
    },
    {
      role: "Student Activity Chairs",
      members: [
        { name: "Ambrish Devanshu", affiliation: "NIT Silchar", image: "/ambrish.jpeg" },
      ] 
    },
    
    {
      role: "Hospitality Chairs",
      members: [] 
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Organising Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            The leadership and operational body for the 2027 IEEE International Conference on Signal, Power & Computing Systems.
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-24">
          {committeeData.map((group, index) => (
            <div key={index} className="text-center">
              
              <h2 className="inline-block font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-b-2 border-slate-200 pb-2">
                {group.role}
              </h2>

              <div className="flex flex-wrap justify-center items-stretch gap-8">
                {group.members.length > 0 ? (
                  group.members.map((member, memberIdx) => (
                    <div key={memberIdx} className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#0057b2]/30 transition-all max-w-[280px] w-full group">
                      
                      {/* Image / Initial Placeholder */}
                      {member.image ? (
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-slate-50 shadow-inner group-hover:border-[#7ed957]/30 transition-colors">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-slate-100 border-4 border-slate-50 shadow-inner mb-5 flex items-center justify-center group-hover:bg-[#0057b2]/5 transition-colors">
                           <span className="text-[#0057b2] font-serif font-bold text-4xl opacity-40">
                              {member.name.charAt(0)}
                           </span>
                        </div>
                      )}

                      {/* Member Details */}
                      <div className="text-center mt-auto">
                        <h3 className="font-serif text-lg text-[#0057b2] font-bold leading-snug mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-600 font-medium leading-snug">
                          {member.affiliation}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  /* "To be updated" Placeholder for empty arrays */
                  <div className="w-full flex justify-center -mt-4">
                    <span className="px-6 py-2 bg-slate-100 text-slate-500 font-medium rounded-full text-sm uppercase tracking-widest border border-slate-200 shadow-sm">
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