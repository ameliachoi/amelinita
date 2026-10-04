import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/translations";

export type BlogPost = CollectionEntry<"blog">;

// Entradas publicadas (sin borradores), de la más reciente a la más antigua.
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatPostDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "ko" ? "ko-KR" : "es-419", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Minutos de lectura aproximados (~200 palabras por minuto).
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? "").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
