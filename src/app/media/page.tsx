"use client";

import { useState } from "react";
import { Image as ImageIcon, X, ChevronRight, ChevronLeft, Eye, Calendar, User, BookOpen } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useCms } from "@/lib/CmsContext";
import { GalleryItem, Post } from "@/data/mockData";

export default function MediaPage() {
  const { data } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [activeArticle, setActiveArticle] = useState<Post | null>(null);

  const categories = [
    { key: "all", label: "Semua Foto" },
    { key: "kegiatan", label: "Kegiatan" },
    { key: "fasilitas", label: "Fasilitas" },
    { key: "santri", label: "Santri" },
    { key: "majelis", label: "Majelis" },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? data.gallery
      : data.gallery.filter((item) => item.category === selectedCategory);

  const articles = data.posts.filter((p) => p.kind === "article");

  return (
    <div className="bg-white">
      {/* Subpage Banner Header */}
      <section className="bg-[#0B2E22] text-white py-14 border-b-2 border-[#C6A15B] relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DFCA95] block mb-2">
            Dokumentasi & Khazanah
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Galeri Foto & Artikel Dakwah
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/80">
            Kumpulan dokumentasi visual aktivitas santri serta risalah keilmuan dan nasehat salafiyah
          </p>
        </div>
      </section>

      {/* Galeri Foto Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-4 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-[#0B2E22] font-serif-title">
                Galeri Dokumentasi Pesantren
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Klik pada kategori untuk menyaring foto, atau klik foto untuk memperbesar
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const count = cat.key === "all" 
                  ? data.gallery.length 
                  : data.gallery.filter((g) => g.category === cat.key).length;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer select-none ${
                      isSelected
                        ? "bg-[#0B2E22] text-[#DFCA95] font-bold shadow-xs border border-[#C6A15B]/50"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-transparent"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Grid */}
          {filteredGallery.length === 0 ? (
            <div className="p-12 text-center bg-gray-50 rounded-xl text-gray-500 text-sm">
              Tidak ada dokumentasi foto untuk kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer bg-gray-100 border border-[#C6A15B]/30"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E22] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition" />
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <span className="text-[10px] text-[#DFCA95] font-bold uppercase tracking-wider block">
                      {item.category} • {item.date}
                    </span>
                    <h3 className="text-sm font-bold font-serif-title leading-snug mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artikel Dakwah Section */}
      <section className="py-16 sm:py-20 bg-[#F8F6EF] border-t border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Artikel & Risalah Dakwah Salaf"
            arabic="المقالات والرسائل العلمية"
            subtitle="Kajian tematik fiqih, tasawuf, dan akhlak thalabul ilmi yang ditulis oleh Dewan Asatidz"
          />

          {articles.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl text-gray-500 text-sm">
              Belum ada artikel dakwah yang diterbitkan.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((art) => (
                <div
                  key={art.id}
                  id={art.slug}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between scroll-mt-24"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                        {art.category}
                      </span>
                      <span>{art.publishedAt}</span>
                      <span>•</span>
                      <span>{art.author}</span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-title text-[#0B2E22] mb-3 leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {art.excerpt}
                    </p>

                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C6A15B]/30 text-xs text-gray-700 leading-relaxed italic">
                      "{art.body.slice(0, 240)}..."
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(art)}
                      className="text-xs sm:text-sm font-semibold text-[#14532D] hover:text-[#0B2E22] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Buka & Baca Risalah Penuh</span>
                      <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal for Photo */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-gradient-to-b from-[#0B2E22] to-[#071F17] rounded-2xl overflow-hidden max-w-4xl w-full border-2 border-[#C6A15B] shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 px-6 bg-[#071F17] border-b border-[#C6A15B]/30 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B]"></span>
                <span className="text-xs font-bold text-[#DFCA95] uppercase tracking-wider">
                  Detail Dokumentasi Foto • {activeImage.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-xl bg-white/10 text-emerald-200 hover:text-white hover:bg-white/20 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative max-h-[65vh] bg-[#051812] flex items-center justify-center overflow-hidden p-2 sm:p-4">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() => {
                  const currentIndex = filteredGallery.findIndex((g) => g.id === activeImage.id);
                  const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
                  setActiveImage(filteredGallery[prevIndex]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C6A15B] hover:text-[#0B2E22] transition cursor-pointer shadow-md"
                title="Foto Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const currentIndex = filteredGallery.findIndex((g) => g.id === activeImage.id);
                  const nextIndex = (currentIndex + 1) % filteredGallery.length;
                  setActiveImage(filteredGallery[nextIndex]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C6A15B] hover:text-[#0B2E22] transition cursor-pointer shadow-md"
                title="Foto Selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-5 sm:p-6 text-white bg-gradient-to-t from-[#071F17] to-[#0B2E22] border-t border-[#C6A15B]/20">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-200 mb-1.5">
                <span className="font-medium text-[#DFCA95]">Dokumentasi: {activeImage.date}</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-mono">
                  {filteredGallery.findIndex((g) => g.id === activeImage.id) + 1} dari {filteredGallery.length} Foto
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-title mb-2 text-white">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-3xl">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Article Detail Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#C6A15B]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#0B2E22] text-white flex justify-between items-start">
              <div>
                <span className="text-xs text-[#DFCA95] font-semibold uppercase">
                  {activeArticle.category} • {activeArticle.publishedAt}
                </span>
                <h3 className="text-xl font-bold font-serif-title mt-1">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-emerald-200 mt-1">
                  Penulis: {activeArticle.author}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-700 leading-relaxed">
              <p className="font-medium text-gray-900 border border-[#C6A15B]/30 p-3 rounded-lg bg-[#F8F6EF]">
                {activeArticle.excerpt}
              </p>
              <div className="whitespace-pre-line text-sm leading-relaxed text-gray-800">
                {activeArticle.body}
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 text-right">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-[#0B2E22] text-white text-xs font-semibold rounded hover:bg-emerald-950 transition cursor-pointer"
              >
                Tutup Pembacaan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
