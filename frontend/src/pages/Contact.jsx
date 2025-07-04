import React, { useState } from 'react';
import { handleContactSubmit } from '../controllers/contactController';

const informations = [
  { icon: '📍', label: 'Alamat', value: 'Jl. Telekomunikasi No.1, Terusan Buah Batu, Bandung, 40257' },
  { icon: '📞', label: 'Kontak LINE', value: '@sok8073r' },
  { icon: '✉️', label: 'Email', value: 'laboratory.mbc@gmail.com' },
  { icon: '🗺️', label: 'Lokasi', value: 'Google Maps', link: 'https://maps.app.goo.gl/A2HqR9uy4kebKAUY7' }
];

const NAME_SUBJECT_PATTERN = /^[a-zA-Z0-9 .,!?'-]*$/;
const MESSAGE_PATTERN       = /^[^<>$%{}\[\]*]*$/; 

const sanitizeField = (name, value) => {
  if (name === 'nama' || name === 'subjek') {
    return value
      .split('')
      .filter(char => NAME_SUBJECT_PATTERN.test(char))
      .join('');
  }
  if (name === 'pesan') {
    return value
      .split('')
      .filter(char => MESSAGE_PATTERN.test(char))
      .join('');
  }
  return value;
};

export default function Contact() {
  const [form, setForm]     = useState({ nama: '', email: '', subjek: '', pesan: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clean = sanitizeField(name, value);
    setForm(prev => ({ ...prev, [name]: clean }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;  

    handleContactSubmit(
      form,
      setStatus,
      () => setForm({ nama: '', email: '', subjek: '', pesan: '' })
    );
  };

  return (
    <section className="py-16 px-4 lg:px-0 white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="bg-red-50 rounded-xl p-6 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Informasi</h2>
          <p className="text-gray-700">Kami terbuka dengan pesan dan saran dari dunia.</p>
          <ul className="space-y-3">
            {informations.map(info => (
              <li key={info.label} className="flex items-start space-x-3">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <p className="font-semibold">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Sampaikan Pesan Anda!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              name="nama"
              placeholder="Nama"
              value={form.nama}
              onChange={handleChange}
              required
              maxLength={100}
              pattern="[a-zA-Z0-9 .,!?'-]*"
              title="Hanya huruf, angka, spasi, dan . , ! ? ' - yang diperbolehkan."
              className="border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              required
              maxLength={254}
              className="border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              name="subjek"
              placeholder="Subjek"
              value={form.subjek}
              onChange={handleChange}
              maxLength={200}
              pattern="[a-zA-Z0-9 .,!?'-]*"
              title="Hanya huruf, angka, spasi, dan . , ! ? ' - yang diperbolehkan."
              className="border border-gray-300 rounded-md px-4 py-2"
            />

            <textarea
              name="pesan"
              placeholder="Pesan"
              rows="4"
              value={form.pesan}
              onChange={handleChange}
              required
              maxLength={2000}
              pattern="[^<>$%{}\[\]*]*"
              title="Simbol < > $ % { } [ ] * tidak diperbolehkan."
              className="border border-gray-300 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`bg-red-500 text-white font-semibold px-6 py-2 rounded-md transition ${
                status === 'sending'
                  ? 'opacity-50 cursor-not-allowed hover:bg-red-500'
                  : 'hover:bg-red-600'
              }`}
            >
              {status === 'sending' ? 'Mengirim…' : 'Submit'}
            </button>
          </form>

          {status === 'sending' && <p className="mt-2">Mengirim...</p>}
          {status === 'sent'    && <p className="text-green-600 mt-2">Pesan berhasil dikirim!</p>}
          {status === 'error'   && <p className="text-red-600 mt-2">Gagal mengirim pesan.</p>}
        </div>
      </div>
    </section>
  );
}
