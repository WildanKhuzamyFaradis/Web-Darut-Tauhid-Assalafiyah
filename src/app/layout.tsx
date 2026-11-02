import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pondok Pesantren Darut Tauhid Assalafiyah | Menjaga Tradisi, Menebar Cahaya Ilmu",
  description:
    "Situs resmi Pondok Pesantren Darut Tauhid Assalafiyah. Lembaga pendidikan Islam berhaluan Ahlussunnah wal Jama'ah dengan pendalaman kitab turots, tahfidzul qur'an, dan pembinaan akhlaqul karimah.",
  keywords: [
    "Pondok Pesantren",
    "Darut Tauhid Assalafiyah",
    "Pesantren Salaf",
    "Kitab Kuning",
    "Tahfidz Quran",
    "Madrasah Diniyah",
    "Kajian Islam",
  ],
  icons: {
    icon: "/images/logo-pondok.png",
    shortcut: "/images/logo-pondok.png",
    apple: "/images/logo-pondok.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${lora.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-[#C6A15B]/30 selection:text-[#0B2E22]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
