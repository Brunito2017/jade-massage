/**
 * Variantes de composición del hero.
 *
 * Vive acá y no dentro del componente porque el layout también necesita saber
 * cómo se comporta cada una (por ejemplo, si el header va transparente encima).
 */
export type VarianteHero = 'completo' | 'marco' | 'split' | 'bloque';

interface ConfigVariante {
  /** `claro` = texto sobre la foto; `oscuro` = texto sobre fondo de página. */
  tono: 'claro' | 'oscuro';
  alineacion: 'centro' | 'izquierda';
  /** Si el header flota encima (la imagen llega al borde superior de la pantalla). */
  headerTransparente: boolean;
}

export const VARIANTES_HERO: Record<VarianteHero, ConfigVariante> = {
  completo: { tono: 'claro', alineacion: 'centro', headerTransparente: true },
  marco: { tono: 'claro', alineacion: 'centro', headerTransparente: true },
  split: { tono: 'oscuro', alineacion: 'izquierda', headerTransparente: false },
  bloque: { tono: 'claro', alineacion: 'izquierda', headerTransparente: true },
};
