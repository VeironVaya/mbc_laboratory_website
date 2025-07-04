import React from 'react';
import picvei from '../assets/pictures/picvei.jpeg';

export default function Developer() {
  return (
    <div className="flex items-center flex-col justify-center py-16 px-4 lg:px-0">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our Developers
        </h2>
      </div>
      

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0">
          <img
            src={picvei}
            alt="Veiron Vaya Yarief"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
          />
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-2">Veiron Vaya Yarief</h1>
          <h2 className="text-lg text-gray-600 mb-4">
            Mahasiswa S1 Informatika Universitas Telkom yang berkecimpung dalam pengembangan web dan aplikasi. Passionate tentang teknologi, open-source, dan cyber security.
          </h2>

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/VeironVaya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.45-2.7 5.42-5.28 5.71.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/veiron-vaya-yarief-5867872a3/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.451 20.451h-3.554v-5.561c0-1.327-.025-3.037-1.85-3.037-1.853 0-2.136 1.446-2.136 2.941v5.657H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.269 2.372 4.269 5.457v6.284zM5.337 7.433c-1.144 0-2.072-.928-2.072-2.072 0-1.144.928-2.072 2.072-2.072 1.144 0 2.072.928 2.072 2.072 0 1.144-.928 2.072-2.072 2.072zM7.118 20.451H3.556V9h3.562v11.451z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/veiron.co.id?igsh=Y2Vsc2l1cHhyZWht" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
