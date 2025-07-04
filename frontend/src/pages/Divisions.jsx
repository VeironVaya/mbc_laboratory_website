import React from 'react';

const divisions = [
  {
    id: 'cyber',
    title: 'Cyber Security',
    description:
      'Divisi Cyber Security fokus pada penelitian dan pengembangan teknik pertahanan siber, penetrasi sistem, serta forensik digital untuk menjaga integritas, kerahasiaan, dan ketersediaan data. Dengan prospek karir yang meliputi: Cybersecurity Analyst, Digital Forensic,SOC Analyst,Penetration Tester dan Security Engineer',
  },
  {
    id: 'gametech',
    title: 'Game Tech',
    description:
      'Divisi Game Tech menggabungkan multimedia dan interaksi pengguna, menghadirkan prototipe game edukatif serta simulasi real‑time dengan engine terkini. Dengan prospek karir yang meliputi: Animator(2D/3D), Game Designer,Artist(2D/3D),Audio Designer,Game Programmer',
  },
  {
    id: 'gis',
    title: 'Geographic Information System',
    description:
      'Divisi GIS mengembangkan sistem pemetaan dan analisis spasial, mendukung visualisasi data geolokasi untuk smart city dan pengambilan keputusan berbasis lokasi. Dengan prospek karir: Spasial Analyst,Penata Tata Ruangan Kota,Surveyor,GIS Specialist,Webgis Developer (Startup)',
  },
  {
    id: 'bigdata',
    title: 'Big Data',
    description:
      'Divisi Big Data, kami merancang pipeline analitik untuk volume data besar, meliputi arsitektur data lake, pemodelan machine learning, dan dashboard visualisasi. Dengan prospek karir: Machine Learning Engineer, Data Scientist, Data Analyst, Data Engineer',
  },
];

export default function Divisions() {
  return (
    <div className="px-4 py-12 lg:px-0 space-y-12">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Divisions
      </h2>

      <div className="space-y-8">
        {divisions.map(({ id, title, description }, idx) => (
          <section
            key={id}
            className={`
              bg-gray-50
              rounded-2xl
              p-6 md:p-8
              shadow-sm
              hover:shadow-md
              transition-shadow duration-200
            `}
          >
           <center> 
            <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
            </center>
          </section>
        ))}
      </div>
    </div>
  );
}
