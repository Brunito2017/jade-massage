import { SITE } from '../data/site';

/**
 * Negocio local. `address` es obligatorio para el rich result, pero no se
 * publica la calle hasta resolver la verificación con el arrendatario.
 * Mientras tanto se declara la comuna como área de servicio.
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
