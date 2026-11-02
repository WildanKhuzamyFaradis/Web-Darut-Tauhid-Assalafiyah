"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Users, 
  ScrollText, 
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  Eye,
  X
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";
import { GalleryItem } from "@/data/mockData";

export default function HomePage() {
  const { data } = useCms();
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const siteData = data.site;
  const leader = data.leadership[0] || {
    name: "Pengasuh Pondok",
    role: "Pengasuh",
    quote: "Menjaga Tradisi Salaf",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  };
  const featuredPosts = data.posts.slice(0, 3);
  const upcomingEvents = data.events.filter((e) => e.isUpcoming).slice(0, 3);
  const previewGallery = data.gallery.slice(0, 4);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#071F17] text-white overflow-hidden border-b-2 border-[#C6A15B]">
        {/* Background Image with Deep Green Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/hero-pondok.svg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051812] via-[#0B2E22]/95 to-[#071F17]/90" />
        <div className="absolute inset-0 pattern-islamic opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-[#C6A15B]/70 text-xs sm:text-sm text-[#DFCA95] font-medium mb-6 shadow-md backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>Pondok Pesantren Salafiyah Ahlussunnah wal Jama'ah</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-title leading-tight mb-6">
              Menjaga Tradisi, <br />
              <span className="text-[#DFCA95]">Menebar Cahaya Ilmu</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
              {siteData.description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2.5 bg-[#14532D] hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-md border border-[#C6A15B] shadow-lg transition duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Mengenal Pesantren</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </Link>
              <Link
                href="/kegiatan"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-md border border-white/20 backdrop-blur-sm transition duration-200 cursor-pointer"
              >
                <span>Jadwal Pengajian & Agenda</span>
                <Calendar className="w-4 h-4 text-[#DFCA95]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 inset-x-0 bg-[#071F17]/90 border-t border-[#C6A15B]/30 backdrop-blur-md hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-4 divide-x divide-emerald-800/60 text-center">
              {siteData.stats.map((stat, idx) => (
                <div key={idx} className="px-4">
                  <div className="text-2xl font-bold text-[#DFCA95] font-serif-title">{stat.value}</div>
                  <div className="text-xs text-emerald-200/80 uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN PENGASUH */}
      <section className="py-16 sm:py-24 bg-[#F8F6EF] border-b border-[#C6A15B]/20 relative">
        <div className="absolute inset-0 pattern-islamic-light opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Foto Pengasuh */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0B2E22] via-[#C6A15B] to-[#14532D] opacity-25 blur-md group-hover:opacity-40 transition-all duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A15B] shadow-2xl bg-white">
                  <div className="w-full h-96 bg-[#0B2E22] overflow-hidden flex items-center justify-center">
                    <img
                      src={leader.imageUrl || "/images/pengasuh.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-b from-[#0B2E22] to-[#071F17] text-white text-center border-t border-[#C6A15B]/40">
                    <h3 className="font-serif-title font-bold text-lg text-[#DFCA95] tracking-wide">{leader.name}</h3>
                    <p className="text-xs text-emerald-200/90 font-medium mt-1">{leader.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sambutan Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E22]/10 border border-[#0B2E22]/20 text-xs font-semibold text-[#0B2E22] uppercase tracking-wider">
                <ScrollText className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Kalam Masyayikh & Pengasuh</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2E22] font-serif-title leading-snug">
                "Menjaga Kemurnian Sanad Keilmuan dan Membina Jiwa yang Bertauhid"
              </h2>
              <div className="w-20 h-1 bg-[#C6A15B] rounded-full"></div>
              
              <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed p-5 bg-white rounded-2xl border border-[#C6A15B]/30 shadow-xs">
                "{leader.quote}"
              </blockquote>

              <p className="text-sm text-gray-600 leading-relaxed">
                Di pondok pesantren ini, setiap santri dididik melalui keteladanan harian para masyayikh. 
                Pendidikan kami memadukan pengajian kitab kuning secara mendalam (sorogan & bandongan) 
                dengan pembiasaan wirid, shalat berjamaah tepat waktu, dan pengabdian sosial.
              </p>

              <div className="pt-2">
                <Link
                  href="/profil"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#0B2E22] group cursor-pointer"
                >
                  <span>Baca Sejarah & Visi Misi Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NILAI & PILAR PESANTREN */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pilar Pendidikan Salafiyah"
            arabic="الأركان الأساسية للتربية الإسلامية"
            subtitle="Prinsip utama yang menjadi fondasi kurikulum dan pembentukan karakter santri Darut Tauhid Assalafiyah"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ScrollText,
                title: "Sanad Keilmuan Mu'tabarah",
                desc: "Kajian kitab-kitab turots bersambung mata rantai sanadnya kepada para ulama salafush shalih hingga Rasulullah SAW.",
              },
              {
                icon: Award,
                title: "Adab dan Akhlaqul Karimah",
                desc: "Memprioritaskan tata krama, adab kepada guru, orang tua, dan sesama sebelum menggali ilmu yang lebih tinggi.",
              },
              {
                icon: BookOpen,
                title: "Tahfidz & Tartil Qur'an",
                desc: "Bimbingan hafalan 30 juz mutqin dengan standar tajwid makharijul huruf yang teliti dan pengawasan huffadz bersanad.",
              },
              {
                icon: Users,
                title: "Kemandirian & Berkhidmah",
                desc: "Melatih santri agar mandiri, memiliki jiwa kepemimpinan umat, dan siap berdakwah dengan santun di tengah masyarakat.",
              },
            ].map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8F6EF] p-6 rounded-2xl border border-[#C6A15B]/40 card-elevation-subtle card-elevation-hover group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#C6A15B]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125"></div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2E22] to-[#14532D] text-[#DFCA95] border border-[#C6A15B]/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2E22] font-serif-title mb-2">
                    {pilar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROGRAM PENDIDIKAN */}
      <section className="py-16 sm:py-24 bg-[#0B2E22] text-white relative">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            title="Program Pendidikan & Pengkajian"
            arabic="البرامج التعليمية والتربوية"
            subtitle="Pilihan jenjang pembelajaran yang dirancang komprehensif bagi pembinaan akal dan spiritual santri"
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#071F17] rounded-xl overflow-hidden border border-[#C6A15B]/40 hover:border-[#C6A15B] transition shadow-lg flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs text-[#DFCA95] font-medium mb-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-950 border border-[#C6A15B]/40">
                      {prog.level}
                    </span>
                    {prog.arabicName && (
                      <span className="font-serif text-sm opacity-90">{prog.arabicName}</span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-white mt-3 mb-3">
                    {prog.name}
                  </h3>
                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6">
                    {prog.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prog.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-200/90">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-[#051812] border-t border-emerald-900 flex justify-between items-center">
                  <Link
                    href={`/pendidikan#${prog.slug}`}
                    className="text-xs sm:text-sm font-semibold text-[#DFCA95] hover:text-white flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Pelajari Kurikulum Lengkap</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Konsultasi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pendidikan"
              className="inline-flex items-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white text-sm font-medium px-6 py-3 rounded-md border border-[#C6A15B] shadow transition cursor-pointer"
            >
              <span>Lihat Rincian Seluruh Program Pendidikan</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AGENDA & MAJELIS MENDATANG */}
      <section className="py-16 sm:py-24 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Agenda Pengajian & Majelis"
            arabic="جدول الدروس والمجالس القادمة"
            subtitle="Jadwal pengajian rutin kitab turots, majelis shalawat, serta agenda keilmuan yang terbuka untuk jama'ah"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/40 card-elevation-subtle card-elevation-hover flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-[#0B2E22] to-[#14532D] text-[#DFCA95] text-xs font-semibold shadow-xs">
                      {evt.kindLabel}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Terjadwal
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-3 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="space-y-2.5 text-xs text-gray-700 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-[#0B2E22] font-semibold">
                      <Calendar className="w-4 h-4 text-[#C6A15B]" />
                      <span>{evt.startAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C6A15B]" />
                      <span>{evt.timeText}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>{evt.locationText}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-[#F8F6EF] to-white border-t border-[#C6A15B]/20 flex justify-between items-center text-xs">
                  <span className="text-emerald-800 font-semibold">Terbuka Untuk Umum</span>
                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B2E22] hover:text-[#C6A15B] font-bold flex items-center gap-1 cursor-pointer transition"
                  >
                    <span>Konfirmasi Hadir</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#0B2E22] group cursor-pointer"
            >
              <span>Lihat Kalender Seluruh Agenda & Kegiatan</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BERITA & WARTA TERBARU */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Warta & Khazanah
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2E22] font-serif-title mt-1">
                Kabar Pesantren Terkini
              </h2>
            </div>
            <Link
              href="/kegiatan"
              className="mt-4 sm:mt-0 text-sm font-semibold text-[#14532D] hover:text-[#0B2E22] flex items-center gap-1 cursor-pointer"
            >
              <span>Semua Berita & Artikel</span>
              <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/30 card-elevation-subtle card-elevation-hover flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden bg-[#0B2E22]">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-3 left-3 bg-[#0B2E22]/90 backdrop-blur-md text-[#DFCA95] text-xs font-semibold px-3 py-1 rounded-lg border border-[#C6A15B]/40 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-500 mb-2.5 flex items-center gap-2">
                      <span className="font-medium text-emerald-800">{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B2E22] font-serif-title group-hover:text-emerald-700 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={post.kind === "news" ? `/kegiatan#${post.slug}` : `/media#${post.slug}`}
                    className="text-xs sm:text-sm font-semibold text-[#14532D] group-hover:text-[#0B2E22] flex items-center gap-1.5 pt-4 border-t border-gray-100 cursor-pointer transition"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOKUMENTASI & GALERI SANTRI */}
      <section className="py-16 sm:py-20 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Dokumentasi & Khidmat Santri"
            arabic="معرض الصور والأنشطة اليومية"
            subtitle="Potret kehidupan harian santri dalam menuntut ilmu, beribadah, dan beraktivitas di lingkungan pondok"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-2xl overflow-hidden h-52 sm:h-64 shadow-md border border-[#C6A15B]/40 cursor-pointer card-elevation-subtle card-elevation-hover"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E22] via-[#0B2E22]/30 to-transparent opacity-80 group-hover:opacity-95 transition" />
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white">
                  <span className="text-[10px] sm:text-xs text-[#DFCA95] font-semibold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold font-serif-title line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow">
                  <Eye className="w-3.5 h-3.5 text-[#DFCA95]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-sm font-semibold px-6 py-3.5 rounded-xl border border-[#C6A15B] shadow-md transition cursor-pointer"
            >
              <span>Buka Galeri Foto Lengkap</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Homepage Photo */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-gradient-to-b from-[#0B2E22] to-[#071F17] rounded-2xl overflow-hidden max-w-3xl w-full border-2 border-[#C6A15B] shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 px-6 bg-[#071F17] border-b border-[#C6A15B]/30 flex justify-between items-center text-white">
              <span className="text-xs font-bold text-[#DFCA95] uppercase tracking-wider">
                Dokumentasi Pesantren • {activeImage.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-xl bg-white/10 text-emerald-200 hover:text-white hover:bg-white/20 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[60vh] bg-[#051812] flex items-center justify-center p-3">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[55vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-5 sm:p-6 text-white border-t border-[#C6A15B]/20">
              <div className="text-xs text-[#DFCA95] font-semibold mb-1">
                {activeImage.date}
              </div>
              <h3 className="text-lg font-bold font-serif-title mb-1 text-white">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 8. CALL TO ACTION & KONTAK LANGSUNG */}
      <section className="py-16 sm:py-20 bg-[#0B2E22] text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-900 border border-[#C6A15B] flex items-center justify-center mx-auto mb-6 text-[#C6A15B]">
            <PhoneCall className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-title mb-4">
            Ingin Bersilaturahim atau Mendaftarkan Putra-Putri Anda?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sekretariat {siteData.name} siap memberikan penjelasan lengkap mengenai kurikulum, syarat pendaftaran, dan tata tertib asrama santri.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#14532D] hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-md border border-[#C6A15B] shadow-lg transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#C6A15B]" />
              <span>Hubungi Pengurus via WhatsApp</span>
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-md border border-white/20 transition cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#DFCA95]" />
              <span>Petunjuk Arah & Alamat</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
