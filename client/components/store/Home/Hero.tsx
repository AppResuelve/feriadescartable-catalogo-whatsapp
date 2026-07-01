"use client";
import Link from "next/link";
import { Container } from "./Container";

import { WaveDivider } from "./WaveDivider";

export function Hero() {
  return (
    <section className="relative pt-18 md:pb-24 min-h-[95vh] md:min-h-screen md:flex md:flex-col">
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/home/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Container className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:h-full">
          <div className="text-left">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] mb-6">
              Desde 2006
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Todo lo que necesitás para tu negocio y tus eventos.
            </h1>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--color-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
            >
              Ver productos
            </Link>
          </div>
          <div className="hidden md:block" />
        </div>
      </Container>
      <WaveDivider fillColor="var(--color-background)" />
    </section>
  );
}
