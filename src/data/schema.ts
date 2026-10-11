import { SITE } from '../data/site';

/**
 * Negocio local. La dirección sale de `SITE.direccion`, que refleja el Google
 * Business Profile: el `address` es obligatorio para el rich result de negocio
 * local y para que Google asocie el sitio a una ubicación física.
 */
export function negocioLocal() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'DaySpa'],
    '@id': `${SITE.url}/#negocio`,
    name: SITE.nombre,
    description: SITE.descripcion,
    url: SITE.url,
    telephone: SITE.telefonoLink,
    image: `${SITE.url}/og-default.jpg`,
    priceRange: '$$',
    currenciesAccepted: 'CLP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.direccion.calle,
      addressLocality: SITE.direccion.comuna,
      addressRegion: SITE.direccion.region,
      postalCode: SITE.direccion.codigoPostal,
      addressCountry: SITE.direccion.pais,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitud,
      longitude: SITE.geo.longitud,
    },
    areaServed: {
      '@type': 'City',
      name: SITE.comuna,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: SITE.region,
      },
    },
    sameAs: [SITE.instagram],
  };
}

export function servicioSchema(opts: {
  nombre: string;
  descripcion: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nombre,
    description: opts.descripcion,
    url: `${SITE.url}/servicios/${opts.slug}/`,
    serviceType: opts.nombre,
    provider: { '@id': `${SITE.url}/#negocio` },
    areaServed: {
      '@type': 'City',
      name: SITE.comuna,
    },
  };
}

export function breadcrumbSchema(items: { nombre: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nombre,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function faqSchema(faq: { pregunta: string; respuesta: string }[]) {
  if (faq.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.respuesta,
      },
    })),
  };
}
