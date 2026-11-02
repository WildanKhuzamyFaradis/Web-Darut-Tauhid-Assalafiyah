"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, MapPin, Phone, Mail, Clock, ShieldCheck, HeartHandshake, Settings } from "lucide-react";
import { useCms } from "@/lib/CmsContext";

export default function Footer() {
  const { data } = useCms();
  const siteData = data.site;

  return (
    <footer className="bg-[#0B2E22] text-emerald-100/90 border-t-2 border-[#C6A15B] relative overflow-hidden">
      {/* Background subtle ornament */}
      <div className="absolute inset-0 opacity-5 pointer-events-none pattern-islamic"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-[#C6A15B] p-0.5 flex items-center justify-center bg-emerald-950 shrink-0">
                <Image
                  src="/images/logo-pondok.png"
                  alt="Logo Pondok Pesantren Darut Tauhid Assalafiyah"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-base font-bold text-white font-serif-title">
                  {siteData.name.replace("Pondok Pesantren ", "")}
                </span>
                <span className="block text-xs text-[#DFCA95] tracking-wide">
                  Pondok Pesantren Salaf
                </span>
              </div>
            </div>
            <p className="text-sm text-emerald-200/80 leading-relaxed">
              {siteData.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#DFCA95]">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>Ahlussunnah wal Jama'ah An-Nahdliyyah</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 font-serif-title">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/profil" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Profil & Sejarah Pesantren
                </Link>
              </li>
              <li>
                <Link href="/pendidikan" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Program Madrasah & Tahfidz
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Agenda Pengajian & Majelis
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Dokumentasi & Galeri Foto
                </Link>
              </li>
              <li>
                <Link href="/informasi" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Informasi Santri Baru (PSB)
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#DFCA95] transition flex items-center gap-1.5 cursor-pointer">
                  <span className="text-emerald-500">›</span> Alamat & Jam Kunjungan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Visit Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 font-serif-title">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              Sekretariat & Lokasi
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-snug">{siteData.address}, {siteData.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href={siteData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFCA95] transition underline decoration-[#C6A15B]/50 cursor-pointer"
                >
                  {siteData.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span className="text-xs break-all">{siteData.email}</span>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="text-xs text-emerald-200/70">
                  Layanan Kantor: 08.00 - 16.30 WIB (Setiap Hari Kecuali Waktu Shalat)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Pondok Values & Invitation */}
          <div className="bg-[#071F17] p-5 rounded-lg border border-emerald-900/80">
            <h3 className="text-white font-semibold text-base mb-2 font-serif-title flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#C6A15B]" />
              Silaturahim & Donasi
            </h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed mb-4">
              Pondok Pesantren menyambut terbuka silaturahim kaum muslimin serta wali santri untuk mempererat ukhuwah dan menimba berkah keilmuan.
            </p>
            <div className="space-y-2">
              <a
                href={siteData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#14532D] hover:bg-emerald-700 text-white text-xs font-medium py-2.5 px-3 rounded border border-[#C6A15B]/40 transition cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Konfirmasi Silaturahim</span>
              </a>
              <Link
                href="/admin"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-[#DFCA95] hover:text-white py-1.5 opacity-80 hover:opacity-100 transition cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Admin CMS Pengurus</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-900/80 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-300/60 gap-4">
          <p>© 2026 {siteData.name}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#C6A15B]">{siteData.tagline}</span>
            <span>•</span>
            <Link href="/kontak" className="hover:text-white transition cursor-pointer">
              Peta Lokasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
