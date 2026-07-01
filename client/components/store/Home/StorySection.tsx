"use client";
import { Container } from "./Container";
import { TextHighlight } from "@/components/ui/TextHighlight";

export function StorySection() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{ boxShadow: "0 8px 10px 0px rgba(0,0,0,0.26)" }}
    >
      {/* Trama de madera — 100% opacity */}
      <div
        className="absolute inset-0 pointer-events-none bg-trama-full"
        style={{
          boxShadow:
            "inset 0 12px 0 var(--color-brown-dark), inset 0 -12px 0 var(--color-brown-dark)",
        }}
      />
      {/* Luz cálida — spotlight superior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,180,80,0.75) 0%, rgba(255,140,40,0.40) 10%, transparent 40%)",
        }}
      />
      <Container className="relative">
        {/* Enredadera — absolute al Container (max-w-7xl) */}
        <div className="absolute -left-90 md:left-0 top-1/2 -translate-y-1/2 h-[125%] md:h-[150%] pointer-events-none z-0">
          <img
            src="/trama-de-enredadera.png"
            alt=""
            aria-hidden="true"
            className="h-full w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="relative min-h-[420px] md:min-h-[500px] flex items-center">
            <div className="px-6 py-8 md:px-10 md:py-12">
              <TextHighlight>
                <span
                  className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white mb-4"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                >
                  Nuestra historia
                </span>
              </TextHighlight>
              <h2
                className="text-3xl md:text-4xl font-light text-white mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                }}
              >
                Desde 2006 acompañando a emprendedores.
              </h2>
              <div className="space-y-4 font-medium  text-white leading-relaxed">
                <p>
                  <TextHighlight>
                    Feria Descartable nació con una misión clara: ser el aliado
                    de quienes empiezan y de quienes ya crecieron. Más de 15
                    años acercando los mejores insumos a microemprendedores,
                    comercios y familias.
                  </TextHighlight>
                </p>
                <p>
                  <TextHighlight>
                    Cada producto que ofrecemos fue elegido pensando en la
                    calidad, el precio y la confianza. Porque cuando tu negocio
                    crece, nosotros también.
                  </TextHighlight>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/home/taller2.jpg"
              alt="Taller de Feria Descartable"
              className="w-full h-[350px] md:h-[500px] rounded-lg object-cover border-4 border-[var(--color-brown-dark)] shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
