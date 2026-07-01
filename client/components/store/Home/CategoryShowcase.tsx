"use client";
import Link from "next/link";
import { Container } from "./Container";

const categories = [
  {
    name: "Descartables",
    href: "/productos?categoria=descartables",
    image: "/home/descartables.png",
    description:
      "Vasos, platos, cubiertos y todo lo descartable para tu evento.",
  },
  {
    name: "Frascos",
    href: "/productos?categoria=frascos",
    image: "/home/frascos.png",
    description: "Frascos de vidrio para conservas, decoración y regalos.",
  },
  {
    name: "Moldes",
    href: "/productos?categoria=moldes",
    image: "/home/moldes.jpg",
    description: "Moldes para repostería y manualidades. Calidad profesional.",
  },
  {
    name: "Packaging",
    href: "/productos?categoria=cajas",
    image: "/home/cajas.jpg",
    description: "Cajas, bolsas y envoltorios para presentar tu producto.",
  },
];

export function CategoryShowcase() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="flex flex-col gap-24 md:gap-32">
          {categories.map((cat, i) => {
            const alt = i % 2 === 1;
            return (
              <div
                key={cat.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={alt ? "md:order-2" : ""}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-[280px] md:h-[500px] rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3
                    className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-md">
                    {cat.description}
                  </p>
                  <Link
                    href={cat.href}
                    className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors flex items-center gap-1.5"
                  >
                    Ver {cat.name.toLowerCase()}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
