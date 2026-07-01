"use client";
import { DollarSign, Truck, MessageCircle } from "lucide-react";
import { Container } from "./Container";

const benefits = [
  {
    icon: DollarSign,
    title: "Precios mayoristas",
    description:
      "Trabajamos para que tu negocio tenga el mejor margen. Calidad sin pagar de más.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description:
      "Llegamos a donde estés. Coordinamos el envío para que recibas todo en tiempo y forma.",
  },
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    description:
      "Te asesoramos para que elijas los productos justos para tu rubro. Como si fuéramos parte de tu equipo.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((b) => (
            <div key={b.title}>
              <div className="w-fit bg-[var(--color-primary)] rounded-full p-3 mb-5">
                <div className="border-4 border border-white border-dashed rounded-full p-2 transition-all duration-300">
                  <b.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl md:text-2xl font-light text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {b.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
