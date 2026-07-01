'use client'
import Link from 'next/link'
import { Container } from './Container'

export function CTASection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-light text-[var(--color-text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            ¿Listo para tu próximo evento?
          </h2>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: 'var(--color-primary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            Ver productos
          </Link>
        </div>
      </Container>
    </section>
  )
}
