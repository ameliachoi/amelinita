import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Entradas del blog: un archivo .md por entrada en src/content/blog/.
// El nombre del archivo es el slug de la URL (/blog/<slug>/).
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string(),
    // true = no se publica (útil para borradores).
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
