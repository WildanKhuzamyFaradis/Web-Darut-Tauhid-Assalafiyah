"use client";

import { useState } from "react";
import { Bell, AlertCircle, FileText, CheckCircle2, Phone, Calendar, X, Sparkles, ChevronRight, Info } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";
import { AnnouncementItem } from "@/data/mockData";

export default function InformasiPage() {
  const { data } = useCms();
  const siteData = data.site;
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);

  const pinned = data.announcements.find((a) => a.isPinned) || data.announcements[0];
  const otherAnnouncements = data.announcements.filter((a) => a.id !== pinned?.id);

  const psbSteps = [
    {
      step: "01",
      title: "Pendaftaran Awal & Pengisian Formulir",
      desc: "Wali santri mengisi formulir pendaftaran baik secara daring melalui sekretariat WhatsApp atau hadir langsung di kantor pesantren.",
    },
    {
      step: "02",
      title: "Penyerahan Berkas Administrasi",
      desc: "Menyerahkan fotokopi KK, Akta Kelahiran, Ijazah terakhir, pas foto, serta surat pernyataan kesediaan mematuhi tata tertib asrama.",
    },
    {
      step: "03",
      title: "Tes Penjajakan & Wawancara",
      desc: "Calon santri mengikuti tes membaca Al-Qur'an (makharijul huruf & tajwid dasar) dan wawancara komitmen bersama orang tua/wali santri.",
    },
    {
      step: "04",
      title: "Pengumuman & Registrasi Ulang",
      desc: "Calon santri yang dinyatakan diterima melakukan daftar ulang, pengukuran seragam, serta penempatan kamar kobong asrama.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Pusat Informasi Resmi
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Informasi & Pengumuman Pesantren
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Maklumat resmi kepesantrenan, pengumuman berkala, dan prosedur penerimaan santri baru
          </p>
        </div>
      </section>

      {/* Pinned Announcement / PSB Highlight */}
      <section className="py-12 sm:py-16 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pinned && (
            <div className="bg-white rounded-2xl border-2 border-[#C6A15B] p-6 sm:p-10 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C6A15B] text-[#0B2E22] text-xs font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Pengumuman Utama (Prioritas)</span>
              </div>

              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold mb-2">
                  <Calendar className="w-4 h-4 text-[#C6A15B]" />
                  <span>Diterbitkan: {pinned.date}</span>
                  <span>•</span>
                  <span>Kategori: {pinned.category}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2E22] font-serif-title mb-4">
                  {pinned.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  {pinned.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedAnnouncement(pinned)}
                    className="inline-flex items-center gap-2 bg-[#0B2E22] hover:bg-[#14532D] text-[#DFCA95] text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-[#C6A15B] shadow-md transition cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-[#C6A15B]" />
                    <span>Lihat Rincian & Maklumat Lengkap</span>
                  </button>

                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-[#C6A15B]/40 shadow transition cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#C6A15B]" />
                    <span>Hubungi Panitia Penerimaan Santri</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Alur Penerimaan Santri Baru */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Alur Penerimaan Santri Baru (PSB)"
            arabic="إجراءات قبول الطلاب الجدد"
            subtitle="Tahapan pendaftaran calon santri putra dan putri untuk jenjang Madrasah Diniyah dan Tahfidz"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {psbSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F6EF] p-6 rounded-2xl border border-[#C6A15B]/40 card-elevation-subtle card-elevation-hover relative flex flex-col justify-between group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C6A15B]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125"></div>
                <div>
                  <div className="text-3xl font-bold font-serif-title text-[#C6A15B] mb-3 group-hover:scale-105 transition-transform origin-left">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0B2E22] font-serif-title mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 text-[11px] text-emerald-800 font-semibold flex items-center justify-between">
                  <span>Tahap {idx + 1}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px]">Terbimbing</span>
                </div>
              </div>
            ))}
          </div>

          {/* Persyaratan Tambahan Box */}
          <div className="mt-12 bg-white rounded-2xl border border-[#C6A15B]/30 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#0B2E22] font-serif-title mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C6A15B]" />
              Persyaratan Administratif Berkas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
              {[
                "Fotokopi Kartu Keluarga (KK) & KTP kedua orang tua (3 lembar)",
                "Fotokopi Akta Kelahiran calon santri (3 lembar)",
                "Pas foto resmi santri berkemeja putih / berbusana muslim (ukuran 3x4: 4 lembar)",
                "Surat keterangan sehat dari dokter/puskesmas setempat",
                "Mengisi formulir komitmen mentaati tata tertib pondok pesantren",
                "Menyelesaikan administrasi infaq pendaftaran dan iuran awal",
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maklumat & Pengumuman Lainnya */}
      <section className="py-16 sm:py-20 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2E22] font-serif-title flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#C6A15B]" />
              <span>Arsip Maklumat & Tata Tertib Pesantren</span>
            </h2>
            <span className="text-xs text-gray-500">
              Klik pada salah satu maklumat untuk melihat detail informasi lengkap
            </span>
          </div>

          <div className="space-y-4">
            {otherAnnouncements.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAnnouncement(item)}
                className="bg-white p-6 rounded-2xl border border-gray-200 card-elevation-subtle card-elevation-hover flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                    <span className="font-medium text-emerald-800">{item.date}</span>
                    <span>•</span>
                    <span className="text-[#0B2E22] bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200/60">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2E22] font-serif-title group-hover:text-emerald-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAnnouncement(item);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2E22] bg-[#F8F6EF] group-hover:bg-[#0B2E22] group-hover:text-[#DFCA95] px-4 py-2 rounded-xl border border-[#C6A15B]/50 transition cursor-pointer"
                  >
                    <span>Baca Detail</span>
                    <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL DETAIL INFORMASI / MAKLUMAT */}
      {selectedAnnouncement && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border-2 border-[#C6A15B] relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#071F17] via-[#0B2E22] to-[#14532D] text-white flex justify-between items-start gap-4 border-b border-[#C6A15B]/50">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#C6A15B]/20 text-[#DFCA95] border border-[#C6A15B]/40 uppercase tracking-wider">
                    {selectedAnnouncement.category}
                  </span>
                  <span className="text-xs text-emerald-200">
                    {selectedAnnouncement.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-title leading-snug text-white">
                  {selectedAnnouncement.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition cursor-pointer shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-gray-700 leading-relaxed text-sm">
              <div className="p-4 bg-[#F8F6EF] rounded-xl border border-[#C6A15B]/40 text-gray-800 font-medium shadow-xs">
                {selectedAnnouncement.summary}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2E22]">
                  Ketentuan & Penjelasan Resmi:
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Maklumat ini diterbitkan langsung oleh Pengurus Pusat Pondok Pesantren Darut Tauhid Assalafiyah guna menjadi pedoman tertib bagi segenap santri mukim, asatidz, wali santri, maupun masyarakat umum.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                    <span>Diharapkan mematuhi waktu dan ketentuan jam kunjungan atau administrasi yang telah ditetapkan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                    <span>Segala bentuk perubahan jadwal susulan akan diumumkan secara berkala melalui saluran resmi sekretariat.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                    <span>Untuk pertanyaan khusus atau verifikasi data santri, silakan menghubungi layanan konfirmasi via WhatsApp.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-gray-500">
                Pondok Pesantren Darut Tauhid Assalafiyah
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#14532D] hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl border border-[#C6A15B]/50 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Hubungi Sekretariat</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedAnnouncement(null)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
