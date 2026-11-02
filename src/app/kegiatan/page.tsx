"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Filter, Phone, Sparkles, BookOpen, Layers } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";

export default function KegiatanPage() {
  const { data } = useCms();
  const [filter, setFilter] = useState<"all" | "agenda" | "berita">("all");

  const newsItems = data.posts.filter((p) => p.kind === "news");
  const siteData = data.site;

  const showAgenda = filter === "all" || filter === "agenda";
  const showNews = filter === "all" || filter === "berita";

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Aktivitas & Majelis
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Kegiatan Pesantren & Agenda
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Jadwal pengajian rutin kitab turots, majelis shalawat bersama, serta rekam jejak kegiatan santri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prominent Filter Controls */}
          <div className="bg-[#F8F6EF] p-4 sm:p-5 rounded-2xl border border-[#C6A15B]/30 mb-12 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0B2E22] text-[#C6A15B] flex items-center justify-center">
                  <Filter className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">Filter Tampilan Konten</h3>
                  <p className="text-xs text-gray-500">Pilih kategori untuk menyaring daftar kegiatan</p>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    filter === "all"
                      ? "bg-[#0B2E22] text-[#DFCA95] shadow-md border-2 border-[#C6A15B] scale-102"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Semua ({data.events.length + newsItems.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilter("agenda")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    filter === "agenda"
                      ? "bg-[#0B2E22] text-[#DFCA95] shadow-md border-2 border-[#C6A15B] scale-102"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Agenda Majelis ({data.events.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilter("berita")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    filter === "berita"
                      ? "bg-[#0B2E22] text-[#DFCA95] shadow-md border-2 border-[#C6A15B] scale-102"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Kabar Santri ({newsItems.length})</span>
                </button>
              </div>
            </div>
          </div>

          {/* Agenda Section */}
          {showAgenda && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#C6A15B]"></div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-[#0B2E22]">
                  Agenda Majelis & Pengajian Mendatang
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  {data.events.length} Jadwal
                </span>
              </div>

              {data.events.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-xl text-gray-500 text-sm">
                  Belum ada agenda kegiatan yang dijadwalkan.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.events.map((evt) => (
                    <div
                      key={evt.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <span className="px-2.5 py-1 rounded bg-[#0B2E22] text-[#DFCA95] text-xs font-semibold">
                            {evt.kindLabel}
                          </span>
                          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                            Rutin Terjadwal
                          </span>
                        </div>

                        <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-3 leading-snug">
                          {evt.title}
                        </h3>

                        <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                          {evt.description}
                        </p>

                        <div className="space-y-2.5 text-xs text-gray-700 border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-2 font-medium text-[#0B2E22]">
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

                      <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs">
                        <span className="text-gray-500">Gratis / Terbuka</span>
                        <a
                          href={siteData.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-[#14532D] hover:text-[#0B2E22] cursor-pointer"
                        >
                          <Phone className="w-3 h-3 text-[#C6A15B]" />
                          <span>Tanya Panitia</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Kabar Kegiatan Santri */}
          {showNews && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#14532D]"></div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-[#0B2E22]">
                  Laporan Kegiatan Santri Terkini
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  {newsItems.length} Warta
                </span>
              </div>

              {newsItems.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-xl text-gray-500 text-sm">
                  Belum ada warta kegiatan santri.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {newsItems.map((post) => (
                    <article
                      key={post.id}
                      id={post.slug}
                      className="bg-[#F8F6EF] rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 scroll-mt-24 group"
                    >
                      <div className="sm:w-52 h-48 sm:h-auto shrink-0 bg-gray-200 overflow-hidden">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] text-gray-500 mb-1">
                            {post.publishedAt} • {post.category}
                          </div>
                          <h3 className="text-base font-bold text-[#0B2E22] font-serif-title mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-gray-200/60 mt-3 flex justify-between items-center text-xs">
                          <span className="text-emerald-800 font-medium">
                            {post.author}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
