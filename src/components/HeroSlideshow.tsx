"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Ganti src dan alt di sini saat foto asli pondok sudah tersedia.
const slides = [
  { src: "/images/kompleks-pesantren.svg", alt: "Ilustrasi kompleks asrama dan masjid pesantren" },
  { src: "/images/santri-belajar.svg", alt: "Ilustrasi kegiatan belajar santri" },
  { src: "/images/tahfidz-quran.svg", alt: "Ilustrasi program tahfidz Al-Qur'an" },
  { src: "/images/majelis-shalawat.svg", alt: "Ilustrasi majelis shalawat santri" },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [hidden, setHidden] = useState(false);

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

  const rotating = !paused && !hovered && !focused && !reducedMotion && !hidden;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [rotating, active]);

  function move(step: number) {
    setPaused(true);
    setActive((index) => (index + step + slides.length) % slides.length);
  }

  return (
    <div
      className="hero-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Gambar kehidupan pesantren"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="hero-slideshow__images" aria-live={rotating ? "off" : "polite"} aria-atomic="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-slideshow__slide${index === active ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} dari ${slides.length}`}
            aria-hidden={index !== active}
          >
            {/* Native img preserves the project's existing local SVG artwork. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} width={800} height={600} fetchPriority={index === 0 ? "high" : "auto"} draggable={false} />
          </div>
        ))}
      </div>
      <div className="hero-slideshow__controls">
        <button type="button" className="hero-slideshow__button" aria-label="Gambar sebelumnya" onClick={() => move(-1)}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <div className="hero-slideshow__dots" role="group" aria-label="Pilih gambar">
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" className="hero-slideshow__dot" aria-label={`Tampilkan gambar ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => { setPaused(true); setActive(index); }}>
              <span />
            </button>
          ))}
        </div>
        <span className="hero-slideshow__count" aria-hidden="true">{active + 1} / {slides.length}</span>
        <button type="button" className="hero-slideshow__button" aria-label={paused || reducedMotion ? "Putar slideshow" : "Jeda slideshow"} onClick={() => { if (paused || reducedMotion) { setReducedMotion(false); setPaused(false); } else setPaused(true); }}>
          {paused || reducedMotion ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
        <button type="button" className="hero-slideshow__button" aria-label="Gambar berikutnya" onClick={() => move(1)}>
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
