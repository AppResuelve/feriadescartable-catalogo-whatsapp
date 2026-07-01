"use client";
import { Container } from "./Container";

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-secondary-light)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Nuestra historia
            </span>
            <h2
              className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Desde 2006 acompañando a emprendedores.
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Feria Descartable nació con una misión clara: ser el aliado de
                quienes empiezan y de quienes ya crecieron. Más de 15 años
                acercando los mejores insumos a microemprendedores, comercios y
                familias.
              </p>
              <p>
                Cada producto que ofrecemos fue elegido pensando en la calidad,
                el precio y la confianza. Porque cuando tu negocio crece,
                nosotros también.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/home/taller2.jpg"
              alt="Taller de Feria Descartable"
              className="w-full h-[350px] md:h-[500px] rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
