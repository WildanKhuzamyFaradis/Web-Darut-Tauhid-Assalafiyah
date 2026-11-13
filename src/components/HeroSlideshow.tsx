"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Foto ilustrasi sementara. Ganti src, alt, dan kredit saat foto asli tersedia.
const slides = [
  { src: "/images/hero/mengaji.webp", alt: "Foto ilustrasi jamaah membaca Al-Qur'an di Masjid Sheikh Zayed Solo", position: "64% center", photographer: "Naufal Fawwaz Assalam", source: "https://unsplash.com/photos/ouLZd1BrQbk" },
  { src: "/images/hero/alquran.webp", alt: "Foto ilustrasi mushaf Al-Qur'an terbuka", position: "center", photographer: "MATAQ Darul Ulum", source: "https://unsplash.com/photos/JSTOqD9_llo" },
  { src: "/images/hero/masjid.webp", alt: "Foto ilustrasi arsitektur Masjid Al-Akbar Surabaya", position: "center bottom", photographer: "Zaskia Auryn", source: "https://unsplash.com/photos/N4609bTRLgs" },
  { src: "/images/hero/jamaah.webp", alt: "Foto ilustrasi jamaah di Masjid Istiqlal Jakarta", position: "62% center", photographer: "Alim", source: "https://unsplash.com/photos/r0HlondEF0A" },
];

export default function HeroSlideshow({ description }: { description: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const rotating = !paused && !reducedMotion && !hidden;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [rotating, active]);

  function move(step: number) {
    setPaused(true);
    setActive((index) => (index + step + slides.length) % slides.length);
  }

  return (
    <section
      className="hero-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Gambar kehidupan pesantren"
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest("[data-playback]")) setPaused(true);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart !== null) {
          const distance = touchStart - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 60) move(distance > 0 ? 1 : -1);
        }
        setTouchStart(null);
      }}
    >
      <div className="hero-slideshow__images" aria-live={rotating ? "off" : "polite"} aria-atomic="true">
        {slides.map((slide, index) => (
          <div key={slide.src} className={`hero-slideshow__slide${index === active ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} dari ${slides.length}`} aria-hidden={index !== active}>
            <picture>
              <source media="(max-width: 640px)" srcSet={slide.src.replace(".webp", "-mobile.webp")} />
              <img src={slide.src} alt={slide.alt} width={1920} height={1080} fetchPriority={index === 0 ? "high" : "auto"} loading={index === 0 ? "eager" : "lazy"} style={{ objectPosition: slide.position }} draggable={false} />
            </picture>
          </div>
        ))}
      </div>
      <div className="hero-slideshow__shade" aria-hidden="true" />

      <div className="hero-slideshow__content">
        <h1>Menjaga Tradisi,<br /><span>Menebar Cahaya Ilmu.</span></h1>
        <p>{description}</p>
        <div className="hero-slideshow__actions">
          <Link href="/profil" className="hero-slideshow__primary">Mengenal Pesantren <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="/kegiatan" className="hero-slideshow__secondary"><CalendarDays size={18} aria-hidden="true" /> Jadwal Pengajian & Agenda</Link>
        </div>
      </div>

      <button type="button" className="hero-slideshow__arrow hero-slideshow__arrow--prev" aria-label="Gambar sebelumnya" onClick={() => move(-1)}><ChevronLeft size={22} aria-hidden="true" /></button>
      <button type="button" className="hero-slideshow__arrow hero-slideshow__arrow--next" aria-label="Gambar berikutnya" onClick={() => move(1)}><ChevronRight size={22} aria-hidden="true" /></button>

      <div className="hero-slideshow__footer">
        <div className="hero-slideshow__controls">
          <span className="hero-slideshow__count" aria-hidden="true">{String(active + 1).padStart(2, "0")} <span>/ 04</span></span>
          <div className="hero-slideshow__dots" role="group" aria-label="Pilih gambar">
            {slides.map((slide, index) => (
              <button key={slide.src} type="button" className="hero-slideshow__dot" aria-label={`Tampilkan gambar ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => { setPaused(true); setActive(index); }}><span /></button>
            ))}
          </div>
          <button type="button" data-playback className="hero-slideshow__play" aria-label={paused || reducedMotion ? "Putar slideshow" : "Jeda slideshow"} onClick={() => { if (paused || reducedMotion) { setReducedMotion(false); setPaused(false); } else setPaused(true); }}>
            {paused || reducedMotion ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
          </button>
        </div>
        <a className="hero-slideshow__credit" href={slides[active].source} target="_blank" rel="noopener noreferrer">Foto ilustrasi · {slides[active].photographer} / Unsplash</a>
      </div>
    </section>
  );
}
