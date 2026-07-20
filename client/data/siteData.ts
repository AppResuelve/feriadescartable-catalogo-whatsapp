export const siteData = {
  navbar: {
    logoOnly: false,
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Productos', href: '/productos' },
      { label: 'Carrito', href: '/carrito', showCartCount: true },
      { label: 'Contacto', href: '/contacto' },
    ],
    ctaText: 'Ver carrito',
  },

  footer: {
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '/' },
          { label: 'Productos', href: '/productos' },
          { label: 'Carrito', href: '/carrito' },
          { label: 'Contacto', href: '/contacto' },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: 'feriadescartable-cart',
    showDeliveryModal: false,
  },
}

export const content = {
  home: {
    hero: {
      badge: 'Desde 2006',
      title: 'Todo lo que necesitás para tu negocio',
      highlightedText: 'y tus eventos',
      subtitle:
        'Descartables, frascos, moldes y packaging. Acompañamos emprendedores desde el inicio.',
      primaryButtonText: 'Ver productos',
      primaryButtonLink: '/productos',
      secondaryButtonText: 'Contactar',
      secondaryButtonLink: '/contacto',
    },
    featuredTitle: 'Colección',
    featuredSubtitle: 'Productos destacados',
    categoriesTitle: 'Categorías',
    categoriesSubtitle: 'Explorá por tipo de producto',
    cta: {
      title: '¿Necesitás ayuda con tu pedido?',
      subtitle: 'Te asesoramos para que elijas los productos ideales para tu negocio o evento.',
      buttonText: 'Consultar por WhatsApp',
      buttonLink: '/contacto',
    },
  },

  products: {
    badge: 'Catálogo',
    title: 'Nuestros productos',
    subtitle: 'Todo para tu negocio y tus eventos',
    noResults: 'No hay productos que coincidan con tu búsqueda.',
    clearFilters: 'Limpiar filtros',
  },

  productDetail: {
    backTo: 'Volver al catálogo',
    categoryLabel: 'Categoría',
    tagsLabel: 'Etiquetas',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    viewCart: 'Ver carrito',
    relatedTitle: 'También te puede interesar',
  },

  cart: {
    title: 'Tu pedido',
    emptyTitle: 'Tu carrito está vacío',
    emptyMessage: 'Agregá productos para armar tu pedido.',
    browseProducts: 'Ver productos',
    itemCount: '{count} producto(s)',
    subtotal: 'Subtotal',
    total: 'Total',
    requestQuote: 'Encargar por WhatsApp',
    removeItem: 'Eliminar',
    clearCart: 'Vaciar carrito',
    continueShopping: 'Seguir eligiendo',
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    subtitle:
      '¿Tenés alguna pregunta o querés hacer un pedido? Escribinos y te respondemos a la brevedad.',
    infoTitle: 'Encontranos',
  },

  notFound: {
    title: '404',
    subtitle: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscás no existe o fue movida.',
    buttonText: 'Volver al inicio',
    buttonLink: '/',
  },

  services: {
    badge: 'Servicios',
    title: 'Nuestros servicios',
    subtitle: 'Lo que ofrecemos',
    noResults: 'No hay servicios disponibles en este momento.',
  },

  serviceDetail: {
    backTo: 'Volver a servicios',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    requestWhatsApp: 'Pedir por WhatsApp',
    duration: 'Duración estimada',
  },
}
