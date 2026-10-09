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
  /**
   * Si cierra con onda. Solo donde la foto llega al borde inferior de la
   * sección: en `split` el borde de abajo es color de página, y una onda del
   * mismo color sería invisible.
   */
  divisorOnda: boolean;
}

export const VARIANTES_HERO: Record<VarianteHero, ConfigVariante> = {
  completo: { tono: 'claro', alineacion: 'centro', headerTransparente: true, divisorOnda: true },
  marco: { tono: 'claro', alineacion: 'centro', headerTransparente: true, divisorOnda: false },
  split: { tono: 'oscuro', alineacion: 'izquierda', headerTransparente: false, divisorOnda: false },
  bloque: { tono: 'claro', alineacion: 'izquierda', headerTransparente: true, divisorOnda: false },
};
