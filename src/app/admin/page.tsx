"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  GraduationCap,
  Bell,
  Image as ImageIcon,
  Settings,
  ArrowLeft,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  CheckCircle,
  ExternalLink,
  Users,
  Eye,
  Check,
  Sparkles
} from "lucide-react";
import { useCms } from "@/lib/CmsContext";
import { Post, EventItem, ProgramItem, AnnouncementItem, GalleryItem } from "@/data/mockData";

type AdminTab = "dashboard" | "site" | "posts" | "events" | "programs" | "announcements" | "gallery";

export default function AdminPage() {
  const {
    data,
    updateSite,
    addPost,
    updatePost,
    deletePost,
    addEvent,
    updateEvent,
    deleteEvent,
    addProgram,
    updateProgram,
    deleteProgram,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    resetData,
  } = useCms();

  const [activeTab, setActiveTab] = useState<AdminTab>("posts");
  const [notification, setNotification] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // State for forms
  const [siteForm, setSiteForm] = useState(data.site);

  // Post form modal
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [postForm, setPostForm] = useState<Omit<Post, "id">>({
    title: "",
    slug: "",
    kind: "news",
    excerpt: "",
    body: "",
    cover: "/images/kitab-turots.svg",
    category: "Kegiatan Pesantren",
    author: "Sekretariat Pondok",
    publishedAt: "30 Oktober 2026",
    isFeatured: false,
  });

  // Event form modal
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState<Omit<EventItem, "id">>({
    title: "",
    slug: "",
    kind: "kajian",
    kindLabel: "Pengajian Rutin",
    description: "",
    startAt: "Setiap Kamis Malam",
    timeText: "19.45 WIB - Selesai",
    locationText: "Masjid Jami' Darut Tauhid",
    poster: "/images/kitab-turots.svg",
    isUpcoming: true,
  });

  // Program form modal
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [editingProgramId, setEditingProgramId] = useState<string | null>(null);
  const [programForm, setProgramForm] = useState<Omit<ProgramItem, "id">>({
    name: "",
    slug: "",
    arabicName: "",
    level: "Tingkat Ula",
    summary: "",
    description: "",
    features: ["Kurikulum kitab salaf", "Sorogan & Bandongan"],
    image: "/images/kitab-turots.svg",
  });

  // Announcement modal
  const [isAnnModalOpen, setIsAnnModalOpen] = useState(false);
  const [editingAnnId, setEditingAnnId] = useState<string | null>(null);
  const [annForm, setAnnForm] = useState<Omit<AnnouncementItem, "id">>({
    title: "",
    slug: "",
    summary: "",
    date: "30 Oktober 2026",
    isPinned: false,
    category: "Pengumuman",
  });

  // Gallery modal
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null);
  const [galleryForm, setGalleryForm] = useState<Omit<GalleryItem, "id">>({
    title: "",
    category: "kegiatan",
    imageUrl: "/images/santri-belajar.svg",
    date: "Oktober 2026",
    caption: "",
  });

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-800 flex flex-col font-sans">
      {/* Top Navbar Header */}
      <header className="bg-gradient-to-r from-[#071F17] via-[#0B2E22] to-[#14532D] text-white border-b-2 border-[#C6A15B] px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full border-2 border-[#C6A15B] p-0.5 flex items-center justify-center bg-emerald-950/80 shadow-inner shrink-0">
            <Image
              src="/images/logo-pondok.png"
              alt="Logo Pondok Pesantren"
              width={42}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold font-serif-title leading-tight text-white tracking-wide">
                Panel CMS Pengurus Pesantren
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C6A15B]/20 text-[#DFCA95] border border-[#C6A15B]/40">
                Live Editor
              </span>
            </div>
            <p className="text-xs text-emerald-200/80">
              {data.site.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (confirm("Kembalikan seluruh data dan gambar ke format bawaan (default)?")) {
                resetData();
                setSiteForm(data.site);
                showNotice("Data berhasil direset ke pengaturan awal!");
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-100 bg-[#071F17] hover:bg-emerald-950 border border-emerald-700/60 rounded-xl cursor-pointer transition shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Reset Data Demo</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#C6A15B] hover:bg-[#DFCA95] text-[#071F17] rounded-xl border border-white/20 shadow-md cursor-pointer transition transform hover:-translate-y-0.5"
          >
            <span>Buka Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-[#0B2E22] border-2 border-[#C6A15B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all duration-300">
          <CheckCircle className="w-5 h-5 text-[#C6A15B]" />
          <span className="text-xs sm:text-sm font-semibold">{notification}</span>
        </div>
      )}

      {/* Main Admin Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-white border-r border-slate-200/80 p-5 space-y-2 shrink-0 shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 flex items-center justify-between">
            <span>Menu Pengelolaan</span>
            <Sparkles className="w-3 h-3 text-[#C6A15B]" />
          </div>

          {[
            { id: "dashboard", label: "Ringkasan", icon: LayoutDashboard },
            { id: "site", label: "Identitas Situs", icon: Settings },
            { id: "posts", label: "Berita & Artikel", count: data.posts.length, icon: FileText },
            { id: "events", label: "Agenda & Majelis", count: data.events.length, icon: Calendar },
            { id: "programs", label: "Program Belajar", count: data.programs.length, icon: GraduationCap },
            { id: "announcements", label: "Pengumuman", count: data.announcements.length, icon: Bell },
            { id: "gallery", label: "Galeri Dokumentasi", count: data.gallery.length, icon: ImageIcon },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as AdminTab)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0B2E22] text-[#DFCA95] shadow-md border border-[#C6A15B]/60"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#C6A15B]" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-emerald-950 text-[#DFCA95]" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Body */}
        <main className="flex-1 p-6 sm:p-10 max-w-6xl">
          {/* TAB: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-900 to-[#0B2E22] text-white p-7 rounded-2xl border border-[#C6A15B]/40 shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold font-serif-title text-[#DFCA95] mb-2">
                    Selamat Datang di Panel Pengurus Pesantren
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
                    Semua perubahan yang Anda lakukan di panel ini akan langsung terupdate ke website publik secara <strong>instan dan permanen</strong>.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Warta & Artikel</span>
                  <div className="text-3xl font-bold text-[#0B2E22] mt-1 font-serif-title">{data.posts.length}</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Agenda Majelis</span>
                  <div className="text-3xl font-bold text-[#0B2E22] mt-1 font-serif-title">{data.events.length}</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Program Pendidikan</span>
                  <div className="text-3xl font-bold text-[#0B2E22] mt-1 font-serif-title">{data.programs.length}</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Foto Galeri</span>
                  <div className="text-3xl font-bold text-[#0B2E22] mt-1 font-serif-title">{data.gallery.length}</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Pintasan Cepat:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("posts");
                      setIsPostModalOpen(true);
                      setEditingPostId(null);
                    }}
                    className="px-4 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-[#C6A15B]" />
                    <span>Tulis Warta Baru</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("events");
                      setIsEventModalOpen(true);
                      setEditingEventId(null);
                    }}
                    className="px-4 py-2.5 bg-[#14532D] hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-[#C6A15B]" />
                    <span>Jadwalkan Majelis</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("gallery");
                      setIsGalleryModalOpen(true);
                      setEditingGalleryId(null);
                    }}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-emerald-800" />
                    <span>Unggah Foto Galeri</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SITE SETTINGS */}
          {activeTab === "site" && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                  Pengaturan Identitas & Kontak Pesantren
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Ubah nama lembaga, nomor WhatsApp resmi, alamat kantor, dan deskripsi profil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Nama Lembaga
                  </label>
                  <input
                    type="text"
                    value={siteForm.name}
                    onChange={(e) => setSiteForm({ ...siteForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Tagline Pesantren
                  </label>
                  <input
                    type="text"
                    value={siteForm.tagline}
                    onChange={(e) => setSiteForm({ ...siteForm, tagline: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Deskripsi Ringkas (Tampil di Hero & Footer)
                  </label>
                  <textarea
                    rows={3}
                    value={siteForm.description}
                    onChange={(e) => setSiteForm({ ...siteForm, description: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Nomor WhatsApp Resmi
                  </label>
                  <input
                    type="text"
                    value={siteForm.whatsapp}
                    onChange={(e) => {
                      const val = e.target.value;
                      const clean = val.replace(/[^0-9]/g, "");
                      setSiteForm({
                        ...siteForm,
                        whatsapp: val,
                        whatsappUrl: `https://wa.me/${clean}?text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh`,
                      });
                    }}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Email Sekretariat
                  </label>
                  <input
                    type="email"
                    value={siteForm.email}
                    onChange={(e) => setSiteForm({ ...siteForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Alamat Lengkap
                  </label>
                  <input
                    type="text"
                    value={siteForm.address}
                    onChange={(e) => setSiteForm({ ...siteForm, address: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Kota / Wilayah
                  </label>
                  <input
                    type="text"
                    value={siteForm.city}
                    onChange={(e) => setSiteForm({ ...siteForm, city: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#14532D] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    updateSite(siteForm);
                    showNotice("Pengaturan identitas pesantren berhasil disimpan!");
                  }}
                  className="px-6 py-2.5 bg-[#14532D] hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition"
                >
                  <Save className="w-4 h-4 text-[#C6A15B]" />
                  <span>Simpan Perubahan Identitas</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB: POSTS */}
          {activeTab === "posts" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Daftar Warta & Artikel
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kelola warta kegiatan santri dan risalah dakwah salafiyah.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingPostId(null);
                    setPostForm({
                      title: "",
                      slug: "",
                      kind: "news",
                      excerpt: "",
                      body: "",
                      cover: "/images/kitab-turots.svg",
                      category: "Kegiatan Pesantren",
                      author: "Sekretariat Pondok",
                      publishedAt: "30 Oktober 2026",
                      isFeatured: false,
                    });
                    setIsPostModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-md cursor-pointer transition transform hover:-translate-y-0.5 border border-[#C6A15B]/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Berita / Artikel</span>
                </button>
              </div>

              <div className="space-y-3.5">
                {data.posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-inner">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              post.kind === "news"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {post.kind === "news" ? "WARTA" : "ARTIKEL"}
                          </span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-500 font-medium">{post.publishedAt}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingPostId(post.id);
                          setPostForm({
                            title: post.title,
                            slug: post.slug,
                            kind: post.kind,
                            excerpt: post.excerpt,
                            body: post.body,
                            cover: post.cover,
                            category: post.category,
                            author: post.author,
                            publishedAt: post.publishedAt,
                            isFeatured: post.isFeatured,
                          });
                          setIsPostModalOpen(true);
                        }}
                        className="p-2.5 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition cursor-pointer border border-transparent hover:border-emerald-200"
                        title="Edit Konten"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Hapus warta "${post.title}"?`)) {
                            deletePost(post.id);
                            showNotice("Warta berhasil dihapus!");
                          }
                        }}
                        className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer border border-transparent hover:border-red-200"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: EVENTS */}
          {activeTab === "events" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Jadwal Agenda & Majelis
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kelola pengajian rutin, majelis shalawat, dan kegiatan santri.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingEventId(null);
                    setEventForm({
                      title: "",
                      slug: "",
                      kind: "kajian",
                      kindLabel: "Pengajian Rutin",
                      description: "",
                      startAt: "Setiap Kamis Malam",
                      timeText: "19.45 WIB - Selesai",
                      locationText: "Masjid Jami' Darut Tauhid",
                      poster: "/images/kitab-turots.svg",
                      isUpcoming: true,
                    });
                    setIsEventModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-md cursor-pointer transition transform hover:-translate-y-0.5 border border-[#C6A15B]/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Agenda Majelis</span>
                </button>
              </div>

              <div className="space-y-3.5">
                {data.events.map((evt) => (
                  <div
                    key={evt.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                          {evt.kindLabel}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-semibold text-emerald-700">{evt.startAt} ({evt.timeText})</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Lokasi: {evt.locationText}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingEventId(evt.id);
                          setEventForm({
                            title: evt.title,
                            slug: evt.slug,
                            kind: evt.kind,
                            kindLabel: evt.kindLabel,
                            description: evt.description,
                            startAt: evt.startAt,
                            timeText: evt.timeText,
                            locationText: evt.locationText,
                            poster: evt.poster,
                            isUpcoming: evt.isUpcoming,
                          });
                          setIsEventModalOpen(true);
                        }}
                        className="p-2.5 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition cursor-pointer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Hapus agenda "${evt.title}"?`)) {
                            deleteEvent(evt.id);
                            showNotice("Agenda berhasil dihapus!");
                          }
                        }}
                        className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PROGRAMS */}
          {activeTab === "programs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Program Pendidikan Pesantren
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kelola jenjang Madrasah Diniyah, Tahfidz, dan program santri lainnya.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingProgramId(null);
                    setProgramForm({
                      name: "",
                      slug: "",
                      arabicName: "",
                      level: "Jenjang Santri",
                      summary: "",
                      description: "",
                      features: ["Sorogan & Bandongan", "Kajian Bahtsul Masa'il"],
                      image: "/images/kitab-turots.svg",
                    });
                    setIsProgramModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-md cursor-pointer transition transform hover:-translate-y-0.5 border border-[#C6A15B]/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Program Baru</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.programs.map((prog) => (
                  <div key={prog.id} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                          {prog.level}
                        </span>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingProgramId(prog.id);
                              setProgramForm({
                                name: prog.name,
                                slug: prog.slug,
                                arabicName: prog.arabicName || "",
                                level: prog.level,
                                summary: prog.summary,
                                description: prog.description,
                                features: prog.features,
                                image: prog.image,
                              });
                              setIsProgramModalOpen(true);
                            }}
                            className="p-2 text-slate-500 hover:text-emerald-700 rounded-lg cursor-pointer"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Hapus program "${prog.name}"?`)) {
                                deleteProgram(prog.id);
                                showNotice("Program berhasil dihapus!");
                              }
                            }}
                            className="p-2 text-slate-400 hover:text-red-600 rounded-lg cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{prog.name}</h3>
                      {prog.arabicName && <p className="text-xs text-[#C6A15B] font-serif font-bold mt-0.5">{prog.arabicName}</p>}
                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">{prog.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ANNOUNCEMENTS */}
          {activeTab === "announcements" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Pengumuman & Maklumat
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kelola pengumuman PSB, jadwal sambangan, dan edaran wali santri.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingAnnId(null);
                    setAnnForm({
                      title: "",
                      slug: "",
                      summary: "",
                      date: "30 Oktober 2026",
                      isPinned: false,
                      category: "Pengumuman",
                    });
                    setIsAnnModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-md cursor-pointer transition transform hover:-translate-y-0.5 border border-[#C6A15B]/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Pengumuman</span>
                </button>
              </div>

              <div className="space-y-3.5">
                {data.announcements.map((ann) => (
                  <div key={ann.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {ann.isPinned && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">
                            Prioritas / Pinned
                          </span>
                        )}
                        <span className="text-xs text-slate-500">{ann.date} • {ann.category}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{ann.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1">{ann.summary}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingAnnId(ann.id);
                          setAnnForm({
                            title: ann.title,
                            slug: ann.slug,
                            summary: ann.summary,
                            date: ann.date,
                            isPinned: ann.isPinned,
                            category: ann.category,
                          });
                          setIsAnnModalOpen(true);
                        }}
                        className="p-2.5 text-slate-600 hover:text-emerald-700 rounded-xl cursor-pointer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Hapus pengumuman "${ann.title}"?`)) {
                            deleteAnnouncement(ann.id);
                            showNotice("Pengumuman berhasil dihapus!");
                          }
                        }}
                        className="p-2.5 text-slate-400 hover:text-red-600 rounded-xl cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold font-serif-title text-[#0B2E22]">
                    Galeri Dokumentasi Foto
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Foto yang dimasukkan di sini akan otomatis tampil dan bisa difilter di halaman Media.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingGalleryId(null);
                    setGalleryForm({
                      title: "",
                      category: "kegiatan",
                      imageUrl: "/images/santri-belajar.svg",
                      date: "Oktober 2026",
                      caption: "",
                    });
                    setIsGalleryModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2E22] hover:bg-emerald-950 text-[#DFCA95] text-xs font-bold rounded-xl shadow-md cursor-pointer transition transform hover:-translate-y-0.5 border border-[#C6A15B]/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Foto Galeri</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.gallery.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <div className="h-44 bg-slate-100 overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-2 line-clamp-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.caption}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingGalleryId(item.id);
                          setGalleryForm({
                            title: item.title,
                            category: item.category,
                            imageUrl: item.imageUrl,
                            date: item.date,
                            caption: item.caption,
                          });
                          setIsGalleryModalOpen(true);
                        }}
                        className="p-2 text-slate-500 hover:text-emerald-700 rounded-lg cursor-pointer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Hapus foto "${item.title}"?`)) {
                            deleteGalleryItem(item.id);
                            showNotice("Foto berhasil dihapus!");
                          }
                        }}
                        className="p-2 text-slate-400 hover:text-red-600 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: POST (BERITA/ARTIKEL) */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-4">
              {editingPostId ? "Edit Berita / Artikel" : "Tambah Berita / Artikel Baru"}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const slug = postForm.slug || postForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (editingPostId) {
                  updatePost(editingPostId, { ...postForm, slug });
                  showNotice("Warta berhasil diperbarui!");
                } else {
                  addPost({ ...postForm, slug });
                  showNotice("Warta baru berhasil ditambahkan!");
                }
                setIsPostModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Judul *</label>
                <input
                  type="text"
                  required
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  placeholder="Contoh: Khidmat Peringatan Maulid Nabi SAW"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Jenis Konten</label>
                  <select
                    value={postForm.kind}
                    onChange={(e) => setPostForm({ ...postForm, kind: e.target.value as "news" | "article" })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm bg-white outline-none focus:ring-2 focus:ring-[#14532D]"
                  >
                    <option value="news">Kabar Warta Santri</option>
                    <option value="article">Artikel Dakwah Salaf</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Kategori</label>
                  <input
                    type="text"
                    value={postForm.category}
                    onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Pilihan Gambar Sampul</label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[
                    { label: "Kitab Turots", path: "/images/kitab-turots.svg" },
                    { label: "Majelis Shalawat", path: "/images/majelis-shalawat.svg" },
                    { label: "Santri Belajar", path: "/images/santri-belajar.svg" },
                  ].map((preset) => (
                    <button
                      key={preset.path}
                      type="button"
                      onClick={() => setPostForm({ ...postForm, cover: preset.path })}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                        postForm.cover === preset.path ? "border-[#14532D] bg-emerald-50 text-emerald-900 font-bold" : "border-slate-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={postForm.cover}
                  onChange={(e) => setPostForm({ ...postForm, cover: e.target.value })}
                  placeholder="/images/kitab-turots.svg atau URL gambar"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Ringkasan Singkat (Excerpt) *</label>
                <textarea
                  required
                  rows={2}
                  value={postForm.excerpt}
                  onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Isi Lengkap Artikel/Berita *</label>
                <textarea
                  required
                  rows={4}
                  value={postForm.body}
                  onChange={(e) => setPostForm({ ...postForm, body: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#14532D] text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer shadow-md"
                >
                  Simpan & Publikasikan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EVENT (AGENDA MAJELIS) */}
      {isEventModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-4">
              {editingEventId ? "Edit Agenda Majelis" : "Tambah Agenda Baru"}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const slug = eventForm.slug || eventForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (editingEventId) {
                  updateEvent(editingEventId, { ...eventForm, slug });
                  showNotice("Agenda berhasil diperbarui!");
                } else {
                  addEvent({ ...eventForm, slug });
                  showNotice("Agenda baru berhasil ditambahkan!");
                }
                setIsEventModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nama Agenda / Kajian *</label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="Contoh: Majelis Ratib & Kajian Kitab Ihya"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Jenis Majelis</label>
                  <input
                    type="text"
                    value={eventForm.kindLabel}
                    onChange={(e) => setEventForm({ ...eventForm, kindLabel: e.target.value })}
                    placeholder="Pengajian Rutin / Majelis Shalawat"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Waktu Hari</label>
                  <input
                    type="text"
                    value={eventForm.startAt}
                    onChange={(e) => setEventForm({ ...eventForm, startAt: e.target.value })}
                    placeholder="Setiap Kamis Malam"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Jam Pelaksanaan</label>
                  <input
                    type="text"
                    value={eventForm.timeText}
                    onChange={(e) => setEventForm({ ...eventForm, timeText: e.target.value })}
                    placeholder="19.45 WIB - Selesai"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Tempat / Lokasi</label>
                  <input
                    type="text"
                    value={eventForm.locationText}
                    onChange={(e) => setEventForm({ ...eventForm, locationText: e.target.value })}
                    placeholder="Masjid Jami' Darut Tauhid"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Deskripsi Kegiatan</label>
                <textarea
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#14532D] text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer shadow-md"
                >
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: GALLERY */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-4">
              {editingGalleryId ? "Edit Foto Dokumentasi" : "Tambah Foto Dokumentasi"}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingGalleryId) {
                  updateGalleryItem(editingGalleryId, galleryForm);
                  showNotice("Foto berhasil diperbarui!");
                } else {
                  addGalleryItem(galleryForm);
                  showNotice("Foto baru berhasil ditambahkan!");
                }
                setIsGalleryModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Judul / Nama Foto *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  placeholder="Contoh: Suasana Sorogan Kitab Kuning"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Kategori Filter *</label>
                  <select
                    value={galleryForm.category}
                    onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value as any })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm bg-white outline-none focus:ring-2 focus:ring-[#14532D]"
                  >
                    <option value="kegiatan">Kegiatan</option>
                    <option value="fasilitas">Fasilitas</option>
                    <option value="santri">Santri</option>
                    <option value="majelis">Majelis</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Bulan/Tahun</label>
                  <input
                    type="text"
                    value={galleryForm.date}
                    onChange={(e) => setGalleryForm({ ...galleryForm, date: e.target.value })}
                    placeholder="Oktober 2026"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Gambar / Ilustrasi</label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[
                    { label: "Sorogan Kitab", path: "/images/kitab-turots.svg" },
                    { label: "Masjid Jami'", path: "/images/kompleks-pesantren.svg" },
                    { label: "Santri", path: "/images/santri-belajar.svg" },
                  ].map((preset) => (
                    <button
                      key={preset.path}
                      type="button"
                      onClick={() => setGalleryForm({ ...galleryForm, imageUrl: preset.path })}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                        galleryForm.imageUrl === preset.path ? "border-[#14532D] bg-emerald-50 text-emerald-900 font-bold" : "border-slate-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  required
                  value={galleryForm.imageUrl}
                  onChange={(e) => setGalleryForm({ ...galleryForm, imageUrl: e.target.value })}
                  placeholder="/images/kitab-turots.svg"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Keterangan / Caption Foto</label>
                <textarea
                  rows={2}
                  value={galleryForm.caption}
                  onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  placeholder="Deskripsi ringkas aktivitas santri pada foto ini..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#14532D] text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer shadow-md"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: PROGRAM */}
      {isProgramModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-4">
              {editingProgramId ? "Edit Program Pendidikan" : "Tambah Program Baru"}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const slug = programForm.slug || programForm.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (editingProgramId) {
                  updateProgram(editingProgramId, { ...programForm, slug });
                  showNotice("Program berhasil diperbarui!");
                } else {
                  addProgram({ ...programForm, slug });
                  showNotice("Program baru berhasil ditambahkan!");
                }
                setIsProgramModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nama Program *</label>
                <input
                  type="text"
                  required
                  value={programForm.name}
                  onChange={(e) => setProgramForm({ ...programForm, name: e.target.value })}
                  placeholder="Madrasah Diniyah Salafiyah"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nama Arab (Opsional)</label>
                  <input
                    type="text"
                    value={programForm.arabicName}
                    onChange={(e) => setProgramForm({ ...programForm, arabicName: e.target.value })}
                    placeholder="المدرسة الدينية"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Jenjang/Tingkat</label>
                  <input
                    type="text"
                    value={programForm.level}
                    onChange={(e) => setProgramForm({ ...programForm, level: e.target.value })}
                    placeholder="Tingkat Ula, Wustho, Ulya"
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Ringkasan Kurikulum *</label>
                <textarea
                  required
                  rows={3}
                  value={programForm.summary}
                  onChange={(e) => setProgramForm({ ...programForm, summary: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsProgramModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#14532D] text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer shadow-md"
                >
                  Simpan Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ANNOUNCEMENT */}
      {isAnnModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold font-serif-title text-[#0B2E22] mb-4">
              {editingAnnId ? "Edit Pengumuman" : "Tambah Pengumuman"}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const slug = annForm.slug || annForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (editingAnnId) {
                  updateAnnouncement(editingAnnId, { ...annForm, slug });
                  showNotice("Pengumuman berhasil diperbarui!");
                } else {
                  addAnnouncement({ ...annForm, slug });
                  showNotice("Pengumuman berhasil ditambahkan!");
                }
                setIsAnnModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Judul Pengumuman *</label>
                <input
                  type="text"
                  required
                  value={annForm.title}
                  onChange={(e) => setAnnForm({ ...annForm, title: e.target.value })}
                  placeholder="Informasi Pendaftaran Santri Baru (PSB)"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Kategori</label>
                  <input
                    type="text"
                    value={annForm.category}
                    onChange={(e) => setAnnForm({ ...annForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Tanggal</label>
                  <input
                    type="text"
                    value={annForm.date}
                    onChange={(e) => setAnnForm({ ...annForm, date: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pinnedCheck"
                  checked={annForm.isPinned}
                  onChange={(e) => setAnnForm({ ...annForm, isPinned: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 rounded"
                />
                <label htmlFor="pinnedCheck" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Jadikan Pengumuman Prioritas Utama (Pinned di atas)
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Rincian Pengumuman *</label>
                <textarea
                  required
                  rows={4}
                  value={annForm.summary}
                  onChange={(e) => setAnnForm({ ...annForm, summary: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#14532D]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsAnnModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#14532D] text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer shadow-md"
                >
                  Simpan Pengumuman
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
