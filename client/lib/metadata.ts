const BASE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://feriadescartable.com.ar'

export const baseMetadata = {
  title: {
    default: 'Feria Descartable',
    template: `%s — Feria Descartable`,
  },
  description: 'Productos hechos a mano con dedicación',
  icons: [{ url: '/logotipo.png' }],
  openGraph: {
    siteName: 'Feria Descartable',
    images: [`${BASE_URL}/og-image.jpg`],
  },
}

export function productMetadata(product: any) {
  const desc = product?.description?.substring(0, 155)
  return {
    title: product?.name,
    description: desc,
    alternates: { canonical: `${BASE_URL}/productos/${product?.slug}` },
    openGraph: {
      title: product?.name,
      description: desc,
      images: product?.images?.[0] ? [product.images[0]] : undefined,
      url: `${BASE_URL}/productos/${product?.slug}`,
    },
  }
}

export function serviceMetadata(service: any) {
  const desc = service?.description?.substring(0, 155)
  return {
    title: service?.name,
    description: desc,
    alternates: { canonical: `${BASE_URL}/servicios/${service?.slug}` },
    openGraph: {
      title: service?.name,
      images: service?.images?.[0] ? [service.images[0]] : undefined,
      url: `${BASE_URL}/servicios/${service?.slug}`,
    },
  }
}
