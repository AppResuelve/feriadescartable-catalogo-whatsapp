// @ts-nocheck
"use client";
import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";
import { useStore } from "@/context/StoreContext";

/* ── Íconos de redes ── */
const socialIcons = {
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  tiktok: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
};

/* ── Título de columna ── */
function FooterColTitle({ children }) {
  return (
    <h4
      className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
      style={{ color: "var(--color-primary)" }}
    >
      {children}
    </h4>
  );
}

/* ── Item de contacto ── */
function ContactItem({ icon: Icon, href, children }) {
  const inner = (
    <>
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
        style={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
        }}
      >
        <Icon className="w-3.5 h-3.5" />
      </span>
      <span
        className="text-sm leading-snug"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="flex items-start gap-3 transition-colors group"
        onMouseEnter={(e) =>
          (e.currentTarget.querySelector("span:last-child").style.color =
            "var(--color-primary)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.querySelector("span:last-child").style.color =
            "var(--color-text-secondary)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.querySelector("span:last-child").style.color =
            "var(--color-text-secondary)")
        }
      >
        {inner}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{inner}</div>;
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER — Feria Descartable
   Datos dinámicos desde useStore
══════════════════════════════════════════════════════════════════════ */
export function Footer({ waveFromColor }) {
  const { store, categories } = useStore();
  const currentYear = new Date().getFullYear();
  const whatsappNumber = (store?.whatsapp_number || "").replace(/\D/g, "");

  /* Horarios formateados */
  const DAY_NAMES = {
    mon: "Lunes",
    tue: "Martes",
    wed: "Miércoles",
    thu: "Jueves",
    fri: "Viernes",
    sat: "Sábado",
    sun: "Domingo",
  };
  const DAY_ORDER = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 };
  const schedules = Array.isArray(store?.business_hours)
    ? store.business_hours
    : [];
  const formattedSchedules = schedules
    .map((block) => {
      if (!block.days?.length || !block.timeRanges?.length) return null;
      const sorted = [...block.days].sort(
        (a, b) => DAY_ORDER[a] - DAY_ORDER[b],
      );
      const daysLabel =
        sorted.length > 2
          ? `${DAY_NAMES[sorted[0]].slice(0, 3)} a ${DAY_NAMES[sorted[sorted.length - 1]].slice(0, 3)}`
          : sorted.map((d) => DAY_NAMES[d]).join(" y ");
      const timesLabel = block.timeRanges
        .map((r) => `${r.open} - ${r.close}`)
        .join(" / ");
      return { days: daysLabel, times: timesLabel };
    })
    .filter(Boolean);

  const hasSocials =
    store?.instagram || store?.facebook || store?.tiktok || store?.youtube;

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-secondary-light)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* ── Contenedor 1: Logo + Nombre + Desc + Mapa ── */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div>
                <p
                  className="font-semibold text-2xl md:text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {store?.business_name || "Feria Descartable"}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {store?.description || ""}
                </p>
              </div>
              {store?.address && (
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <iframe
                    title={`Mapa de ${store?.business_name || "Feria Descartable"}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    className="min-h-[150px] lg:min-h-[200px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Contenedor 2: Navegación + Categorías + Contacto ── */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Navegación */}
              {siteData.footer.columns.map((column, index) => (
                <div key={index}>
                  <FooterColTitle>{column.title}</FooterColTitle>
                  <ul className="space-y-2.5">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm transition-colors duration-200"
                          style={{ color: "var(--color-text-secondary)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-text-primary)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-text-secondary)")
                          }
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Categorías */}
              <div>
                <FooterColTitle>Categorías</FooterColTitle>
                {categories.length > 0 ? (
                  <ul className="space-y-2.5">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/productos?cat=${encodeURIComponent(cat.name)}`}
                          className="text-sm transition-colors duration-200"
                          style={{ color: "var(--color-text-secondary)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-text-primary)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-text-secondary)")
                          }
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Cargando...
                  </p>
                )}
              </div>

              {/* Contacto + Horarios + Redes */}
              <div className="space-y-8">
                <div>
                  <FooterColTitle>Contacto</FooterColTitle>
                  <ul className="space-y-3">
                    {whatsappNumber && (
                      <li>
                        <ContactItem
                          icon={MessageCircle}
                          href={`https://wa.me/${whatsappNumber}`}
                        >
                          WhatsApp
                        </ContactItem>
                      </li>
                    )}
                    {store?.address && (
                      <li>
                        <ContactItem icon={MapPin}>{store.address}</ContactItem>
                      </li>
                    )}
                    {store?.email && (
                      <li>
                        <ContactItem icon={Mail} href={`mailto:${store.email}`}>
                          {store.email}
                        </ContactItem>
                      </li>
                    )}
                  </ul>
                  {hasSocials && (
                    <div className="flex gap-2 flex-wrap mt-4">
                      {["instagram", "facebook", "tiktok", "youtube"].map(
                        (net) =>
                          store?.[net] ? (
                            <a
                              key={net}
                              href={store[net]}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={net}
                              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                              style={{
                                backgroundColor: "var(--color-border)",
                                color: "var(--color-text-muted)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--color-primary)";
                                e.currentTarget.style.color = "#ffffff";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--color-border)";
                                e.currentTarget.style.color =
                                  "var(--color-text-muted)";
                              }}
                            >
                              {socialIcons[net]}
                            </a>
                          ) : null,
                      )}
                    </div>
                  )}
                </div>

                {formattedSchedules.length > 0 && (
                  <div>
                    <FooterColTitle>Horarios</FooterColTitle>
                    <ul className="space-y-2">
                      {formattedSchedules.map((s, i) => (
                        <li key={i}>
                          <span
                            className="text-xs font-medium block"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {s.days}
                          </span>
                          <span
                            className="text-xs"
                            style={{
                              color: "var(--color-primary)",
                              opacity: 0.8,
                            }}
                          >
                            {s.times}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Separador + copyright ── */}
        <div className="mb-6">
          <div
            className="h-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />
        </div>

        <p
          className="text-xs text-center"
          style={{ color: "var(--color-text-muted)" }}
        >
          © {currentYear} {store?.business_name || "Feria Descartable"}. Todos
          los derechos reservados.
        </p>
      </div>

      {/* ── Logo decorativo al fondo ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-30">
        {store?.logo_url ? (
          <img
            src={store.logo_url}
            alt=""
            className="h-[100px] w-auto object-contain"
          />
        ) : (
          <img
            src="/logotipo.png"
            alt=""
            className="h-[300px] w-auto object-contain"
          />
        )}
      </div>
    </footer>
  );
}
