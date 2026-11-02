"use client";

import { BookOpen, CheckCircle, Clock, ShieldCheck, Sparkles, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";

export default function PendidikanPage() {
  const { data } = useCms();
  const siteData = data.site;

  const dailySchedule = [
    { time: "03.30 - 04.30", activity: "Qiyamul Lail, Wirid Sahar, & Persiapan Shalat Subuh" },
    { time: "04.30 - 05.30", activity: "Shalat Subuh Berjamaah & Wirid Rutin Ba'da Subuh" },
    { time: "05.30 - 06.45", activity: "Setoran Hafalan Al-Qur'an / Sorogan Kitab Alat" },
    { time: "06.45 - 07.30", activity: "Mandi Pagi, Sarapan Bersama, & Piket Kebersihan Asrama" },
    { time: "07.30 - 11.45", activity: "Kegiatan Belajar Madrasah Diniyah Salafiyah (KBM)" },
    { time: "11.45 - 12.30", activity: "Shalat Dzuhur Berjamaah & Qailullah (Istirahat Siang)" },
    { time: "13.30 - 15.00", activity: "Muroja'ah Hafalan / Musyawarah Bahtsul Masa'il" },
    { time: "15.00 - 16.00", activity: "Shalat Ashar Berjamaah & Pengajian Bandongan Kitab Hadits" },
    { time: "16.00 - 17.15", activity: "Olahraga Santri, Mandi Sore, & Persiapan Maghrib" },
    { time: "17.45 - 19.30", activity: "Shalat Maghrib Berjamaah, Dzikir Ratib, & Pengajian Wetonan Kitab Fiqih" },
    { time: "19.30 - 20.30", activity: "Shalat Isya Berjamaah & Makan Malam Bersama" },
    { time: "20.30 - 22.00", activity: "Muthala'ah Mandiri, Lalaran Nadzom Nahwu-Sharaf, & Takror" },
    { time: "22.00 - 03.30", activity: "Istirahat Malam di Kamar Asrama Masing-masing" },
  ];

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Kurikulum & Tarbiyah
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Program Pendidikan & Pengkajian
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Penyelenggaraan pendidikan salafiyah berjenjang yang memadukan kedalaman ilmu turots, hafalan Al-Qur'an, dan penempaan akhlak
          </p>
        </div>
      </section>

      {/* Program Rincian */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {data.programs.map((prog, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8F6EF] p-8 sm:p-10 rounded-2xl border border-[#C6A15B]/40 shadow-sm"
              >
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#0B2E22] text-[#DFCA95] text-xs font-semibold">
                      {prog.level}
                    </span>
                    {prog.arabicName && (
                      <span className="text-sm font-serif text-emerald-900 font-bold">
                        {prog.arabicName}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2E22] font-serif-title">
                    {prog.name}
                  </h2>
                  <div className="w-16 h-1 bg-[#C6A15B] rounded-full"></div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {prog.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-[#0B2E22] uppercase tracking-wider mb-2">
                      Fokus & Karakteristik Utama:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={siteData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-md border border-[#C6A15B]/50 transition cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-[#C6A15B]" />
                      <span>Konsultasi Syarat Masuk Program</span>
                    </a>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="rounded-xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-md">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Jadwal Harian Santri (Daily Routine) */}
      <section className="py-16 sm:py-24 bg-[#0B2E22] text-white relative">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            title="Jadwal Disiplin Harian Santri"
            arabic="الجدول اليومي لأنشطة الطلاب"
            subtitle="Ritme kehidupan yang teratur sejak dini hari hingga malam membentuk istiqamah beribadah dan belajar"
            dark={true}
          />

          <div className="bg-[#071F17] rounded-2xl border border-[#C6A15B]/40 overflow-hidden shadow-xl">
            <div className="divide-y divide-emerald-900/60">
              {dailySchedule.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-emerald-900/20 transition"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#DFCA95] w-36">
                      {item.time} WIB
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100 flex-1 pl-7 sm:pl-0">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kitab-Kitab Mu'tabarah yang Dikaji */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Rujukan Kitab Turots Standar"
            subtitle="Di antara kitab-kitab induk karya ulama terpercaya yang diajarkan di Madrasah Diniyah"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { bidang: "Nahwu & Sharaf", kitab: ["Jurumiyyah", "Al-Amtsilah At-Tashrifiyyah", "Al-Imrithi", "Alfiyyah Ibnu Malik"] },
              { bidang: "Fiqih Madzhab Syafi'i", kitab: ["Safinatun Naja", "Fathul Qorib Al-Mujib", "Fathul Mu'in", "Minhajut Tholibin"] },
              { bidang: "Ushul Fiqih & Qowaid", kitab: ["Al-Waraqat", "Al-Luma' Imam Asy-Syirazi", "Qawaidul Fiqhiyyah"] },
              { bidang: "Hadits & Mustholah", kitab: ["Al-Arba'in An-Nawawiyyah", "Riyadhus Shalihin", "Bulughul Maram", "Shahih Bukhari"] },
              { bidang: "Tauhid & Akidah", kitab: ["Aqidatul Awwam", "Tijand Darori", "Kifayatul Awam", "Jauharatut Tauhid"] },
              { bidang: "Tasawuf & Akhlak", kitab: ["Al-Akhlaq Lil Banin", "Ta'limul Muta'allim", "Bidayatul Hidayah", "Ihya Ulumiddin"] },
              { bidang: "Tajwid & Al-Qur'an", kitab: ["Tuhfatul Athfal", "Al-Muqaddimah Al-Jazariyyah", "At-Tibyan fi Adabi Hamalatil Quran"] },
              { bidang: "Tafsir Al-Qur'an", kitab: ["Tafsir Jalalain", "Tafsir Ibnu Katsir", "Tafsir Al-Munir"] },
            ].map((col, idx) => (
              <div key={idx} className="bg-[#F8F6EF] p-5 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider block mb-3">
                  {col.bidang}
                </span>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {col.kitab.map((k, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-[#C6A15B] font-bold">•</span>
                      <span>Kitab {k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
