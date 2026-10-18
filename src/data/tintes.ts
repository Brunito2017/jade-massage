/**
 * Tintes de marca para los servicios.
 *
 * La galería de la home y el carrusel "También disponible" comparten esta
 * paleta a propósito: el color es lo único que identifica visualmente a un
 * servicio mientras no haya fotos propias, y que ambas superficies usen el
 * mismo repertorio es lo que las hace leer como una sola familia.
 *
 * El orden sigue al de la lista que las consume: se pasa por índice y no por
 * nombre para que agregar un servicio en el JSON no deje la paleta descolgada.
 */
export const TINTES = ['#8a6b52', '#6f7a63', '#a8788a'] as const;

/** Paleta por defecto cuando la lista crece más allá de la tabla. */
const TINTE_BASE = '#7a6552';

export function tinte(i: number): string {
  return TINTES[i % TINTES.length] ?? TINTE_BASE;
}
