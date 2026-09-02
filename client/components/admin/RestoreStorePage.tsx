'use client'

import { AlertTriangle } from 'lucide-react'

const APPRESUELVE_WHATSAPP = '5493834971799'

export default function RestoreStorePage({ businessName }: { businessName?: string }) {
  const text = `Hola App Resuelve, quiero restaurar mi tienda. Adjunto el comprobante de pago.${businessName ? ` (Nombre: ${businessName})` : ''}`
  const url = `https://wa.me/${APPRESUELVE_WHATSAPP}?text=${encodeURIComponent(text)}`

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-zinc-100 mb-3">Tienda suspendida</h1>
        <p className="text-zinc-400 mb-8">
          Para restaurar tu tienda debés realizar el pago y compartir el comprobante.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors"
        >
          Compartir comprobante
        </a>
      </div>
    </div>
  )
}
