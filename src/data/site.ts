export const SITE = {
  nombre: 'Jade Belleza y Spa',
  descripcion:
    'Masoterapia clínica y estética integral en La Florida, Santiago. Masaje descontracturante, drenaje linfático, limpieza facial y más.',
  telefono: '+569 74765166',
  telefonoLink: '+56974765166',
  whatsapp: '56974765166',
  instagram: 'https://www.instagram.com/estetica._jade/',
  url: 'https://jadebellezayspa.cl',
  comuna: 'La Florida',
  region: 'Región Metropolitana',
  pais: 'CL',
  idioma: 'es-CL',
  /**
   * Dirección del local, tal como figura en el Google Business Profile.
   * Se copia carácter por carácter desde ahí a propósito: la consistencia NAP
   * entre el sitio y el perfil es un factor de posicionamiento local, y una
   * tilde o un "Local" escrito distinto le resta confianza a Google sobre si
   * son el mismo negocio.
   */
  direccion: {
    calle: 'Walker Martínez 3577, casa F',
    comuna: 'La Florida',
    region: 'Región Metropolitana',
    codigoPostal: '8240000',
    pais: 'CL',
  },
  /**
   * Coordenadas del pin exacto, copiadas del Google Business Profile.
   * Son la fuente autoritativa de la ubicación: no reemplazar por un
   * geocoding de la dirección (Walker Martínez es una avenida larga y el
   * geocoder devuelve el eje de la calle, no el número 3577).
   */
  geo: {
    latitud: -33.52239698986214,
    longitud: -70.55833123558241,
  },
} as const;

/**
 * Enlaces a Google Maps, construidos desde `SITE.geo` y no desde la dirección
 * textual: el geocoder de Maps ubica "Walker Martínez 3577" sobre el eje de la
 * avenida, no en el pin del local.
 *
 * `embed` es la versión sin API key que acepta un iframe. No se usa directo:
 * `MapaUbicacion` la inyecta recién al hacer clic, para no cargar el JS de
 * Google en la carga inicial.
 */
const geoQuery = `${SITE.geo.latitud},${SITE.geo.longitud}`;

export const MAPS = {
  /** Ficha del lugar: la URL que también puede ir en `hasMap` del JSON-LD. */
  ficha: `https://www.google.com/maps/search/?api=1&query=${geoQuery}`,
  /** Ruta desde la ubicación actual del usuario hasta el local. */
  comoLlegar: `https://www.google.com/maps/dir/?api=1&destination=${geoQuery}`,
  embed: `https://maps.google.com/maps?q=${geoQuery}&z=17&output=embed`,
  embedTitulo: `Mapa con la ubicación de ${SITE.nombre}`,
} as const;

export const CATEGORIAS = {
  masoterapia: 'Masoterapia',
  estetica: 'Estética',
} as const;

export function whatsappLink(mensaje?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
