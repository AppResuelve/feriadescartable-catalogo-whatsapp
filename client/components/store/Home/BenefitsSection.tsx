'use client'
import { Container } from './Container'

const benefits = [
  {
    title: 'Precios mayoristas',
    description: 'Trabajamos para que tu negocio tenga el mejor margen. Calidad sin pagar de más.',
  },
  {
    title: 'Envíos a todo el país',
    description: 'Llegamos a donde estés. Coordinamos el envío para que recibas todo en tiempo y forma.',
  },
  {
    title: 'Atención personalizada',
    description: 'Te asesoramos para que elijas los productos justos para tu rubro. Como si fuéramos parte de tu equipo.',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3
                className="text-xl md:text-2xl font-light text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
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
  )
}
