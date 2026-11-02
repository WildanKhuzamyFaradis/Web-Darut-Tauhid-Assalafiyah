"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, BookOpen, ChevronRight, Settings } from "lucide-react";
import { useCms } from "@/lib/CmsContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data } = useCms();
  const siteData = data.site;

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil" },
    { href: "/pendidikan", label: "Pendidikan" },
    { href: "/kegiatan", label: "Kegiatan & Agenda" },
    { href: "/media", label: "Media & Galeri" },
    { href: "/informasi", label: "Informasi" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B2E22] text-white shadow-md border-b border-[#C6A15B]/30">
      {/* Top micro bar for quick announcement & contact */}
      <div className="hidden md:block bg-[#071F17] py-1.5 px-4 text-xs text-emerald-100/80 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#C6A15B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse"></span>
              {siteData.tagline}
            </span>
            <span className="text-emerald-300/40">•</span>
            <span>Berdiri Sejak {siteData.establishedYear} M</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>{siteData.city}</span>
            <a
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFCA95] hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <Phone className="w-3 h-3 text-[#C6A15B]" />
              Layanan Informasi Santri
            </a>
            <span className="text-emerald-500/40">|</span>
            <Link
              href="/admin"
              className="text-emerald-300/80 hover:text-[#DFCA95] transition flex items-center gap-1 cursor-pointer"
              title="Panel Admin Pengurus"
            >
              <Settings className="w-3 h-3 text-[#C6A15B]" />
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border-2 border-[#C6A15B] p-0.5 flex items-center justify-center shadow-md bg-emerald-950/60 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/images/logo-pondok.png"
                alt="Logo Pondok Pesantren Darut Tauhid Assalafiyah"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-white font-serif-title group-hover:text-[#DFCA95] transition-colors leading-tight">
                {siteData.name.replace("Pondok Pesantren ", "")}
              </span>
              <span className="block text-xs text-emerald-200/70 tracking-wider uppercase font-medium">
                Pondok Pesantren Salaf
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-[#C6A15B] bg-emerald-900/60 font-semibold"
                      : "text-emerald-100/90 hover:text-[#DFCA95] hover:bg-emerald-900/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-md border border-[#C6A15B]/50 shadow-sm transition hover:shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C6A15B]" />
              <span>Hubungi Pesantren</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#071F17] border-b border-[#C6A15B]/40 px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition cursor-pointer ${
                  isActive
                    ? "text-[#C6A15B] bg-emerald-900/70 font-semibold"
                    : "text-emerald-100 hover:text-[#DFCA95] hover:bg-emerald-900/40"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#DFCA95] hover:bg-emerald-900/50 rounded-md"
            >
              <Settings className="w-4 h-4 text-[#C6A15B]" />
              <span>Masuk Admin Panel Pengurus</span>
            </Link>
          </div>
          <div className="pt-3">
            <a
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white font-medium py-3 rounded-md border border-[#C6A15B]/60 shadow cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C6A15B]" />
              <span>Hubungi Pengurus via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
