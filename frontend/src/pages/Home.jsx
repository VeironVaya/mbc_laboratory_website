import React from 'react';
import { Users, Building2, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 px-4 py-12 lg:px-0">
      <section className="bg-gray-50   rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-xl md:text-5xl font-extrabold text-center">
          <span className="text-red-600">#WeAttack</span>WeProtect
        </h1>
        <p className="mt-4 text-gray-700 text-center leading-relaxed">
          Laboratorium Aplikasi Multimedia, Big Data dan Keamanan Siber yang berlokasi di Fakultas Teknik Elektro Universitas Telkom dan beroperasi di bawah Kelompok Keahlian Jaringan, Sibernetika dan Manajemen Rekayasa (NCM), merupakan fasilitas penelitian khusus dengan fokus multi-segi.
        </p>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Visi</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Mengembangkan seluruh potensi sumber daya kelompok keahlian terus menerus secara berkelanjutan dalam bidang jaringan dan multimedia dalam mendukung terbentuknya Fakultas berstandar internasional, berdaya saing tinggi dan mampu berperan aktif untuk pembangunan dan ketahanan nasional melalui proses pendidikan, penelitian dan pengabdian masyarakat.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Misi</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              text: 'Mendukung proses pendidikan dengan menyediakan materi perkuliahan, serta evaluasi dan merancang kurikulum.'
            },
            {
              icon: Building2,
              text: 'Ikut berperan aktif dalam kegiatan pengabdian masyarakat baik di dalam maupun luar negeri.'
            },
            {
              icon: Database,
              text: 'Melakukan riset dan mempublikasikan hasilnya pada berbagai jurnal dan seminar bereputasi baik di dalam dan luar negeri.'
            }
          ].map(({ icon: Icon, text }, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="bg-red-50 rounded-full p-4 mb-4">
                <Icon className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
