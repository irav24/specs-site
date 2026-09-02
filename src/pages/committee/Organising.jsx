import React from 'react';

export default function Organising() {
  const committeeData = [
    {
      role: "Chief Patron",
      members: [
        { name: "Prof. Dilip Kumar Baidya", affiliation: "Director, NIT Silchar", image: "/baidya.png" }
      ]
    },
    {
      role: "Patrons",
      members: [
        { name: "Prof. Debangshu Dey", affiliation: "Chair, IEEE Kolkata Section", image: "/dey.png" },
        { name: "Dr. Asha Rani M. A", affiliation: "Chair, IEEE Silchar Subsection", image: null }
      ]
    },
    {
      role: "Co-Patrons",
      members: [
        { name: "Prof. Nidul Sinha", affiliation: "NIT Silchar", image: null },
        { name: "Prof. B. K. Roy", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Organizing Chairs",
      members: [
        { name: "Dr. Biswarup Ganguly", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Prasanta Roy", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Organizing Secretary",
      members: [
        { name: "Dr. Tapan Pradhan", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Sunil Kumar Mishra", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Technical Program Chairs",
      members: [
        { name: "Prof. N B Dev Choudhury", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Dulal Chandra Das", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Munmun Khanra", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Publication Chairs",
      members: [
        { name: "Dr. R. K. Biswas", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Partha Kayal", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Tridibesh Nag", affiliation: "Vice-Chair, IEEE Kolkata Section", image: null }
      ]
    },
    {
      role: "Industry Interaction and Sponsorship Chairs",
      members: [
        { name: "Prof. N B Dev Choudhury", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Monalisa Pal", affiliation: "Mathworks India Pvt. Ltd", image: null },
        { name: "Dr. Ranjay Hazra", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Diwakar Naik", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Website Chairs",
      members: [
        { name: "Ashish Paramane", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Swapna Mansani", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Partha Pakray", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Publicity Chairs",
      members: [
        { name: "Dr. Biswajit Sahoo", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Sreejith. S", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Women in Engineering Chairs",
      members: [
        { name: "Dr. Nabanita Adhikary", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Saheli Ray", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Anwesha Khasnobish", affiliation: "TCS Research, Kolkata, India", image: null }
      ]
    },
    {
      role: "Student Activity Chairs",
      members: [
        { name: "Dr. Mallikarjuna Balimidi", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Vivekanandan S", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Finance Chair",
      members: [
        { name: "Debayan Sarkar", affiliation: "NIT Silchar", image: null }
      ]
    },
    {
      role: "Special Sessions/Tutorial Chairs",
      members: [
        { name: "Dr. Sreenu Sreekumar", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Ambrish Devanshu", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Anagha Bhattacharya", affiliation: "NIT Mizoram", image: null }
      ]
    },
    {
      role: "Hospitality Chairs",
      members: [
        { name: "Dr. C Bhattacharya", affiliation: "NIT Silchar", image: null },
        { name: "Dr. Avadh Pati", affiliation: "NIT Silchar", image: null }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 border-b border-slate-200 pb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0057b2] mb-4">
            Organising Committee
          </h1>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            The leadership and operational body for the 2027 IEEE International Conference on Signal, Power & Computing Systems.
          </p>
        </div>

        <div className="space-y-24">
          {committeeData.map((group, index) => (
            <div key={index} className="text-center">
              <h2 className="font-serif text-2xl font-bold text-[#0057b2] mb-10">
                {group.role}
              </h2>

              <div className="flex flex-wrap justify-center items-end gap-x-12 md:gap-x-16 gap-y-12">
                {group.members.map((member, memberIdx) => (
                  <div key={memberIdx} className="flex flex-col items-center max-w-[280px]">
                    
                    {/* Render Image or Placeholder */}
                    {member.image ? (
                      <div className="w-36 h-36 rounded-full overflow-hidden mb-5 border border-slate-200 shadow-sm">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-28 h-28 rounded-xl bg-slate-50 border border-slate-200 shadow-sm mb-5 flex items-center justify-center">
                         <span className="text-[#0057b2] font-serif font-bold text-2xl opacity-50">
                            {member.name.charAt(0)}
                         </span>
                      </div>
                    )}

                    <div className="text-center">
                      <p className="font-serif text-[17px] text-slate-900 font-bold leading-snug">
                        {member.name}
                      </p>
                      <p className="text-sm text-slate-600 font-medium mt-1 leading-snug">
                        {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}