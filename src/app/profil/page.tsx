"use client";

import { BookOpen, Shield, Heart, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";

export default function ProfilPage() {
  const { data } = useCms();
  const siteData = data.site;
  const leadership = data.leadership;

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Mengenal Pesantren
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Profil & Sejarah Pesantren
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Perjalanan dakwah, nilai dasar salafiyah, dan komitmen dalam mencetak generasi ulama warasatul anbiya'
          </p>
        </div>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                Napak Tilas Pendirian
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2E22] font-serif-title">
                Sejarah Singkat {siteData.name}
              </h2>
              <div className="w-16 h-1 bg-[#C6A15B] rounded-full"></div>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Didirikan pada tahun {siteData.establishedYear} M, {siteData.name} bermula dari majelis pengajian kitab kuning sederhana yang diasuh untuk para santri dan pemuda sekitar.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Seiring berjalannya waktu dan dorongan kepercayaan dari para ulama sepuh serta masyarakat, pesantren berkembang menjadi pusat kaderisasi keilmuan Islam yang mengintegrasikan penguasaan kitab turots, hafalan Al-Qur'an 30 juz, serta penanaman adab kesantrian yang kokoh.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Nama <strong>"Darut Tauhid"</strong> melambangkan rumah peneguhan keimanan yang murni kepada Allah SWT, sedangkan <strong>"Assalafiyah"</strong> menegaskan kepatuhan teguh pada manhaj salafush shalih dalam akidah, fiqih madzhab, dan tasawuf akhlaqi.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-2xl bg-[#0B2E22] card-elevation-subtle">
                <img
                  src="/images/kompleks-pesantren.svg"
                  alt="Kompleks Pesantren Darut Tauhid Assalafiyah"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-[#071F17] via-[#0B2E22] to-[#071F17] text-[#DFCA95] text-xs font-medium text-center border-t border-[#C6A15B]/40">
                  Dokumentasi Kompleks Asrama dan Masjid Jami' Pesantren
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 sm:py-20 bg-[#F8F6EF] border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Visi & Misi Pesantren"
            arabic="الرؤية والرسالة"
            subtitle="Pedoman strategis dalam mengemban amanah pembinaan umat dan pelestarian khazanah Islam"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white p-8 rounded-xl border border-[#C6A15B]/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E22] font-serif-title mb-4">
                  Visi Pesantren
                </h3>
                <p className="text-gray-700 leading-relaxed text-base italic border-l-4 border-[#C6A15B] pl-4 py-2">
                  "Menjadi lembaga pendidikan Islam salafiyah rujukan yang unggul dalam melahirkan santri mutafaqqih fiddin, berbudi pekerti luhur, dan berpegang teguh pada manhaj Ahlussunnah wal Jama'ah."
                </p>
              </div>
              <div className="mt-6 text-xs text-emerald-800 font-medium">
                Berlandaskan Kitabullah, Sunnah Rasulullah, dan Ijma' Ulama Salaf.
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-xl border border-[#C6A15B]/40 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E22] font-serif-title mb-4">
                Misi Pesantren
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-700">
                {[
                  "Menyelenggarakan pengajaran kitab-kitab kuning turots secara istiqamah dan berjenjang.",
                  "Membimbing santri dalam menghafal Al-Qur'anul Karim dengan kaidah tajwid dan pemahaman maknawi.",
                  "Menanamkan akhlaqul karimah, ketawadhuan, dan adab thalabul ilmi dalam kehidupan asrama harian.",
                  "Melatih kemandirian, kepemimpinan organisasi, serta kecakapan dakwah yang santun dan mencerahkan.",
                  "Memperkuat jalinan ukhuwah islamiyah dan pengabdian sosial kemasyarakatan."
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5" />
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dewan Pengasuh & Masyayikh */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Masyayikh & Pimpinan Pesantren"
            arabic="المشايخ والأساتذة"
            subtitle="Para guru mulia yang membimbing dan menuntun perjalanan rohani serta keilmuan seluruh santri"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((staff) => (
              <div
                key={staff.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/40 card-elevation-subtle card-elevation-hover transition text-center group"
              >
                <div className="h-72 overflow-hidden bg-[#0B2E22] flex items-center justify-center relative">
                  <img
                    src={staff.imageUrl || "/images/pengasuh.svg"}
                    alt={staff.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40"></div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-[#F8F6EF]">
                  <h3 className="font-serif-title font-bold text-lg text-[#0B2E22] group-hover:text-emerald-800 transition">
                    {staff.name}
                  </h3>
                  <p className="text-xs text-[#C6A15B] font-bold tracking-wide uppercase mt-1.5">
                    {staff.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas & Sarana Prasarana */}
      <section className="py-16 sm:py-20 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Sarana & Fasilitas Pendukung"
            subtitle="Lingkungan asrama dan sarana ibadah yang representatif guna menunjang kekhusyukan belajar santri"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Masjid Jami' Pesantren",
                desc: "Pusat shalat fardhu berjamaah 5 waktu, wirid dzikir, qiyamul lail, serta pengajian akbar mingguan.",
              },
              {
                title: "Gedung Madrasah & Kelas Sorogan",
                desc: "Ruang-ruang halaqah belajar yang tenang, nyaman, dan terfasilitasi papan tulis serta meja halaqah.",
              },
              {
                title: "Asrama Santri Putra & Putri Terpisah",
                desc: "Kompleks kobong/asrama dengan sanitasi bersih, sirkulasi udara sehat, dan pengawasan musyrif 24 jam.",
              },
              {
                title: "Perpustakaan Kitab Turots",
                desc: "Koleksi ratusan jilid kitab kuning rujukan lintas madzhab dan ilmu alat (nahwu, sharaf, balaghah, mantiq).",
              },
              {
                title: "Dapur Umum & Koperasi Santri",
                desc: "Penyediaan konsumsi harian bergizi dan pemenuhan kebutuhan primer santri secara mandiri.",
              },
              {
                title: "Pos Kesehatan Pesantren (Poskestren)",
                desc: "Layanan pertolongan pertama dan pemeriksaan kesehatan santri secara berkala.",
              },
            ].map((fas, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-[#C6A15B]/30 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#14532D] text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h4 className="text-base font-bold text-[#0B2E22] font-serif-title mb-2">
                  {fas.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {fas.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
