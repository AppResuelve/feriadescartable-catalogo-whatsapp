// @ts-nocheck
'use client'

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { DM_Sans } from "next/font/google"
import { usePathname, useRouter } from "next/navigation"
import { AuthProvider, useAuth } from "@/components/admin/context/AuthContext"
import { AlertProvider } from "@/components/admin/ui/AlertContext"
import { UnsavedChangesProvider } from "@/context/UnsavedChangesContext"
import { siteData } from "@/data/siteData"
import { Spinner } from "@/components/admin/ui/Spinner"
import { Skeleton } from "@/components/admin/ui/Skeleton"

import Sidebar from "@/components/admin/Sidebar"
import RestoreStorePage from "@/components/admin/RestoreStorePage"

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-admin',
  display: 'swap',
})

const PAGE_TITLES = {
  '/dashboard': 'Dashboard',
  '/dashboard/products': 'Productos',
  '/dashboard/categories': 'Categorías',
  '/dashboard/tags': 'Etiquetas',
  '/dashboard/discounts': 'Descuentos',
  '/dashboard/media': 'Galería',
  '/dashboard/settings': 'Configuración',
  '/dashboard/store': 'Tienda',
  '/dashboard/attributes': 'Atributos',
  '/dashboard/change-requests': 'Solicitar cambio',
} as Record<string, string>

function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isPublic = pathname.startsWith('/login')
    || pathname.startsWith('/activate')
    || pathname.startsWith('/forgot')
    || pathname.startsWith('/reset')

  useEffect(() => {
    if (!loading && !user && !isPublic) {
      router.push('/login')
    }
  }, [loading, user, isPublic, router])

  useEffect(() => { setSidebarOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const businessName = siteData?.business?.name || 'Admin'
    const pageTitle = PAGE_TITLES[pathname]
      || Object.entries(PAGE_TITLES).find(([key]) => pathname.startsWith(key))?.[1]
      || 'Admin'
    document.title = `${pageTitle} — ${businessName}`
  }, [pathname])

  if (loading) return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Skeleton className="w-64 h-screen rounded-none hidden lg:block" />
      <div className="flex-1 flex items-center justify-center">
        <Spinner />
      </div>
    </div>
  )

  if (!user && !isPublic) return null

  if (isPublic) return <>{children}</>

  if (user?.role !== 'super_admin' && user?.billing_status === 'suspended') {
    return <RestoreStorePage businessName={user?.business_name} />
  }

  const pastDue = user?.role !== 'super_admin' && user?.billing_status === 'past_due'

  const pageTitle = PAGE_TITLES[pathname]
    || Object.entries(PAGE_TITLES).find(([key]) => pathname.startsWith(key))?.[1]
    || ''

  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile topbar — visible cuando se scrollea */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center gap-3 px-4 py-3
          bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800
          transition-transform duration-300
          ${scrolled ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-zinc-200 truncate">{pageTitle}</span>
      </header>

      {/* Mobile hamburger — visible solo cuando NO se scrollea */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`lg:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-zinc-900 border border-zinc-800
          text-zinc-400 hover:text-zinc-200 transition-all duration-300
          ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Abrir menú"
      >
        <Menu className="w-5 h-5" />
      </button>

      <main className="ml-0 lg:ml-64 p-2 pt-16 lg:p-6 lg:pt-6 min-h-screen">
        {pastDue && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
            Tu suscripción está vencida. Regularizá el pago para evitar la suspensión de tu tienda.
          </div>
        )}
        {children}
      </main>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`admin-root ${dmSans.variable}`}>
      <AlertProvider>
        <UnsavedChangesProvider>
          <AuthProvider>
            <AdminShell>{children}</AdminShell>
          </AuthProvider>
        </UnsavedChangesProvider>
      </AlertProvider>
    </div>
  )
}
