"use client";
import Link from "next/link";
import { Container } from "./Container";
import { ImageIcon } from "lucide-react";

const categories = [
  {
    name: "Gastronomía",
    href: "/productos?categoria=gastronomia",
    image: "/home/descartables.png",
    description:
      "Vasos, platos, cubiertos y todo lo descartable para tu evento.",
  },
  {
    name: "Vidrio",
    href: "/productos?categoria=vidrio",
    image: "/home/frascos.png",
    description: "Frascos de vidrio para conservas, decoración y regalos.",
  },
  {
    name: "Cotillón",
    href: "/productos?categoria=cotillon",
    image: "/home/cotillon.jpeg",
    description: "Artículos de cotillón para fiestas y celebraciones.",
  },
  {
    name: "Repostería",
    href: "/productos?categoria=reposteria",
    image: "/home/reposteria.jpeg",
    description: "Herramientas y insumos para repostería profesional.",
  },
  {
    name: "Velas",
    href: "/productos?categoria=velas",
    image: "/home/velas.jpeg",
    description: "Velas decorativas para ambientar cualquier espacio.",
  },
  {
    name: "Cajas",
    href: "/productos?categoria=cajas",
    image: "/home/cajas.jpg",
    description: "Cajas, bolsas y envoltorios para presentar tu producto.",
  },
  {
    name: "Bolsas",
    href: "/productos?categoria=bolsas",
    image: null,
    description: "Bolsas para packaging y presentación de productos.",
  },
];

export function CategoryShowcase() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="p-3 rounded-xl flex flex-col"
              style={{
                background: "linear-gradient(to top, white, transparent)",
              }}
            >
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-[280px] md:h-[400px] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-[280px] md:h-[400px] rounded-lg bg-[var(--color-surface)] flex flex-col items-center justify-center gap-3">
                  <ImageIcon className="w-12 h-12 text-[var(--color-text-muted)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">Próximamente</span>
                </div>
              )}
              <h3
                className="text-2xl md:text-3xl font-light text-[var(--color-text-primary)] mt-4 mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cat.name}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-md">
                {cat.description}
              </p>
              <div className="flex justify-end mt-auto">
                <Link
                  href={cat.href}
                  className="p-3 rounded-full border-2 border-transparent hover:border-[var(--color-primary)] transition-all text-sm font-medium text-[var(--color-primary)]"
                >
                  Ver {cat.name.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
