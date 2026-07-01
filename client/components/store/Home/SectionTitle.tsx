type SectionTitleProps = {
  badge?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ badge, title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center py-16 md:py-20 ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
