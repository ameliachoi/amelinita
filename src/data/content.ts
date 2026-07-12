import type { Lang } from "../i18n/translations";

export type Platform = "tiktok" | "youtube" | "instagram" | "spotify";

interface ContentItemText {
  title: string;
  description: string;
  tag: string;
}

export interface ContentResource {
  platform: Platform;
  // TODO: reemplazar por la URL real del post/video/episodio antes de publicar.
  embedUrl: string;
  // TODO: id real (YouTube video id / Spotify episode id). Sin esto el embed no carga.
  embedId?: string;
  es: ContentItemText;
  ko: ContentItemText;
}

// Contenido de ejemplo (placeholder). Reemplazar con posts reales de @ameliachoi00 antes de publicar.
export const contentItems: ContentResource[] = [
  {
    platform: "tiktok",
    embedUrl: "https://www.tiktok.com/@ameliachoi00/video/REEMPLAZAR_ID",
    es: {
      title: "Cómo se saluda en coreano (con acento de Seúl)",
      description: "Un video corto para aprender a saludar como una persona local.",
      tag: "Pronunciación",
    },
    ko: {
      title: "서울 억양으로 한국어 인사하기",
      description: "현지인처럼 인사하는 법을 배우는 짧은 영상이에요.",
      tag: "발음",
    },
  },
  {
    platform: "youtube",
    embedUrl: "https://www.youtube.com/watch?v=REEMPLAZAR_ID",
    embedId: "REEMPLAZAR_ID",
    es: {
      title: "Hola Coreano — Episodio 1",
      description: "Primer episodio del podcast de exposición diaria al coreano.",
      tag: "Podcast",
    },
    ko: {
      title: "Hola Coreano — 1화",
      description: "매일 한국어에 노출되는 팟캐스트의 첫 번째 에피소드예요.",
      tag: "팟캐스트",
    },
  },
  {
    platform: "instagram",
    embedUrl: "https://www.instagram.com/p/REEMPLAZAR_ID/",
    es: {
      title: "3 errores comunes de hispanohablantes al hablar coreano",
      description: "Los errores más frecuentes que veo entre mis seguidores hispanohablantes.",
      tag: "Reel",
    },
    ko: {
      title: "스페인어권 학습자가 자주 하는 한국어 실수 3가지",
      description: "제 팔로워들에게서 가장 자주 보이는 실수들을 모았어요.",
      tag: "릴스",
    },
  },
  {
    platform: "spotify",
    embedUrl: "https://open.spotify.com/episode/REEMPLAZAR_ID",
    embedId: "REEMPLAZAR_ID",
    es: {
      title: "Hola Coreano — Episodio 1 (audio)",
      description: "La versión en podcast de audio, para escuchar mientras haces otras cosas.",
      tag: "Podcast",
    },
    ko: {
      title: "Hola Coreano — 1화 (오디오)",
      description: "다른 일을 하면서 들을 수 있는 오디오 팟캐스트 버전이에요.",
      tag: "팟캐스트",
    },
  },
];

export function contentText(item: ContentResource, lang: Lang): ContentItemText {
  return item[lang];
}
