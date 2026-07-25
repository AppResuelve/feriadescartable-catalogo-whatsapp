"use client";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { Container } from "./Container";

export function BannerSection() {
  const { specialCategory } = useStore();

  if (!specialCategory || !specialCategory.specialImage) return null;

  return (
    <section
      className="relative py-12 md:py-20"
      style={{ boxShadow: "0 8px 10px 0px rgba(0,0,0,0.26)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none bg-trama-full"
        style={{
          boxShadow:
            "inset 0 12px 0 var(--color-brown-dark), inset 0 -12px 0 var(--color-brown-dark)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,180,80,0.75) 0%, rgba(255,140,40,0.40) 10%, transparent 40%)",
        }}
      />
      <Container>
        <Link
          href={`/productos?cat=${encodeURIComponent(specialCategory.slug)}`}
          className="block relative overflow-hidden rounded-2xl group"
        >
          <div className="relative h-[250px] md:h-[350px]">
            <img
              src={specialCategory.specialImage}
              alt={specialCategory.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${specialCategory.specialColor || 'rgba(0,0,0,0.5)'}cc, transparent)`,
              }}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12">
              <span
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  backdropFilter: "blur(4px)",
                }}
              >
                Destacado
              </span>
              <h2
                className="text-3xl md:text-4xl font-light text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {specialCategory.name}
              </h2>
              {specialCategory.description && (
                <p className="text-white/80 text-sm md:text-base max-w-md mb-4">
                  {specialCategory.description}
                </p>
              )}
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: "#ffffff",
                  color: specialCategory.specialColor || "var(--color-primary)",
                }}
              >
                Ver productos
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
