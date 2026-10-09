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
} as const;

export const CATEGORIAS = {
  masoterapia: 'Masoterapia',
  estetica: 'Estética',
} as const;

export function whatsappLink(mensaje?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
