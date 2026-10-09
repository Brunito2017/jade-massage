import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/servicios' }),
  schema: z.object({
    nombre: z.string(),
    titulo: z.string(),
    descripcion: z.string(),
    categoria: z.enum(['masoterapia', 'estetica']),
    slug: z.string(),
    prioridad: z.number().int().min(1).max(7),
    activo: z.boolean(),
    duracion: z.string(),
    paraQuienEs: z.array(z.string()),
    beneficios: z.array(z.string()),
    contraindicaciones: z.array(z.string()),
    faq: z.array(
      z.object({
        pregunta: z.string(),
        respuesta: z.string(),
      })
    ),
  }),
});

export const collections = { servicios };
