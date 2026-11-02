"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { useCms } from "@/lib/CmsContext";

export default function KontakPage() {
  const { data } = useCms();
  const siteData = data.site;

  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("Informasi Pendaftaran Santri (PSB)");
  const [pesan, setPesan] = useState("");

  const handleKirimWA = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = siteData.whatsapp.replace(/[^0-9]/g, "");
    const encodedPesan = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nSaya: ${nama}\nKeperluan: ${kategori}\nPesan:\n${pesan}\n\nMohon informasi lebih lanjut dari pihak ${siteData.name}. Terima kasih.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${encodedPesan}`, "_blank");
  };

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Silaturahim & Layanan
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Hubungi & Kunjungi Pesantren
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Alamat sekretariat, jam kunjungan wali santri, dan layanan konsultasi pendaftaran via WhatsApp
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  Pusat Informasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2E22] font-serif-title mt-1 mb-4">
                  Sekretariat Pondok
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kami siap melayani kebutuhan informasi seputar program santri, jadwal sambangan, dan perizinan silaturahim tamu.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F6EF] border border-[#C6A15B]/30">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2E22]">Alamat Lengkap</h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-snug">
                      {siteData.address}, {siteData.city}
                    </p>
                    <span className="text-[11px] text-gray-500 block mt-1">
                      Kompleks Asrama & Masjid Jami'
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F6EF] border border-[#C6A15B]/30">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2E22]">Layanan WhatsApp Resmi</h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      {siteData.whatsapp}
                    </p>
                    <a
                      href={siteData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#14532D] font-semibold mt-1 hover:underline cursor-pointer"
                    >
                      Buka Chat Langsung →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F6EF] border border-[#C6A15B]/30">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2E22]">Jam Operasional Kantor</h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-snug">
                      Pagi: 08.00 - 11.30 WIB <br />
                      Siang/Sore: 13.30 - 16.30 WIB
                    </p>
                    <span className="text-[11px] text-emerald-800 font-medium block mt-1">
                      (Tutup pada waktu shalat fardhu berjamaah)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F6EF] border border-[#C6A15B]/30">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2E22]">Surat Elektronik (Email)</h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 break-all">
                      {siteData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#C6A15B]/40 shadow-lg">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Formulir Konsultasi & Pertanyaan
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Isi pesan Anda di bawah ini untuk tersambung otomatis ke layanan WhatsApp sekretariat pesantren.
                  </p>
                </div>

                <form onSubmit={handleKirimWA} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap Anda / Wali Santri *
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: H. Abdullah Maksum"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Keperluan / Topik Informasi *
                    </label>
                    <select
                      value={kategori}
                      onChange={(e) => setKategori(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent bg-white"
                    >
                      <option>Informasi Pendaftaran Santri (PSB)</option>
                      <option>Jadwal Pengajian & Majelis Ta'lim</option>
                      <option>Sambangan & Kunjungan Wali Santri</option>
                      <option>Silaturahim Tamu & Kelembagaan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Isi Pesan / Pertanyaan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda tanyakan..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg border border-[#C6A15B] shadow transition duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#C6A15B]" />
                      <span>Kirim Pesan ke WhatsApp Sekretariat</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-gray-500 justify-center pt-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pesan akan diformat otomatis dan diteruskan langsung ke WhatsApp petugas</span>
                  </div>
                </form>
              </div>

              {/* Map Container preview */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow bg-gray-100">
                <div className="p-4 bg-[#0B2E22] text-white flex justify-between items-center text-xs">
                  <span className="font-semibold">Lokasi Geografis Pesantren</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DFCA95] hover:underline cursor-pointer"
                  >
                    Buka di Google Maps ↗
                  </a>
                </div>
                <div className="h-64 bg-emerald-950/20 flex flex-col items-center justify-center p-6 text-center text-gray-600">
                  <MapPin className="w-10 h-10 text-[#14532D] mb-2" />
                  <p className="text-sm font-semibold text-gray-800">
                    {siteData.name}
                  </p>
                  <p className="text-xs text-gray-500 max-w-sm mt-1">
                    {siteData.address}, {siteData.city}
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-[#14532D] text-white text-xs font-medium rounded shadow hover:bg-emerald-800 transition cursor-pointer"
                  >
                    Navigasi Rute Perjalanan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
