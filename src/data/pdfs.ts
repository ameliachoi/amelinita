import type { Lang } from "../i18n/translations";

interface PdfContent {
  title: string;
  description: string;
  longDescription?: string;
  tag: string;
}

export interface PdfResource {
  slug: string;
  // URL del archivo, usada solo por la página de detalle (/recursos-pdf/[slug]/) para
  // recursos con email-gate. No se usa si el recurso tiene "comingSoon" o "directUrl".
  fileUrl: string;
  // Si está presente, el botón "Ver y descargar" enlaza directo aquí (ej. Google Drive),
  // sin pasar por el modal de email ni por la página de detalle.
  directUrl?: string;
  // Recurso todavía no disponible: se muestra como tarjeta "Próximamente", sin enlace.
  comingSoon?: boolean;
  es: PdfContent;
  ko: PdfContent;
}

export const pdfs: PdfResource[] = [
  {
    slug: "hola-coreano-vocabulario-1-15",
    fileUrl: "",
    directUrl: "https://drive.google.com/drive/folders/1U_-r-z1mlVpFVZvz2GO_3pisQSS3SDBx",
    es: {
      title: "Vocabulario de Hola Coreano — Episodios 1 a 15",
      description: "Lista de palabras y expresiones usadas en los primeros 15 episodios del podcast.",
      tag: "Podcast",
    },
    ko: {
      title: "Hola Coreano 어휘집 — 1~15화",
      description: "팟캐스트 첫 15개 에피소드에 나온 단어와 표현 모음.",
      tag: "팟캐스트",
    },
  },
  {
    slug: "guia-hangul-en-1-dia",
    fileUrl: "",
    comingSoon: true,
    es: {
      title: "Guía del Hangul en 1 día",
      description: "Aprende a leer y escribir el alfabeto coreano paso a paso, con ejemplos en español.",
      tag: "Principiante",
    },
    ko: {
      title: "하루 만에 배우는 한글",
      description: "한글을 처음 보는 스페인어권 학습자를 위한 단계별 가이드예요.",
      tag: "입문",
    },
  },
  {
    slug: "50-frases-para-viajar-a-corea",
    fileUrl: "",
    comingSoon: true,
    es: {
      title: "50 frases esenciales para viajar a Corea",
      description: "Frases prácticas con pronunciación explicada para hispanohablantes.",
      tag: "Vocabulario",
    },
    ko: {
      title: "한국 여행 필수 표현 50가지",
      description: "스페인어권 여행자를 위한 실전 표현과 발음 설명.",
      tag: "어휘",
    },
  },
  {
    slug: "gramatica-particulas-eun-neun-i-ga",
    fileUrl: "",
    comingSoon: true,
    es: {
      title: "Gramática básica: partículas 은/는 y 이/가",
      description: "Explicación clara de dos de las partículas más confusas para hispanohablantes.",
      tag: "Gramática",
    },
    ko: {
      title: "기초 문법: 은/는 그리고 이/가",
      description: "스페인어권 학습자가 가장 헷갈려하는 조사 두 가지를 정리했어요.",
      tag: "문법",
    },
  },
  {
    slug: "vocabulario-nuevo-proximamente",
    fileUrl: "",
    comingSoon: true,
    es: {
      title: "Nuevo vocabulario, muy pronto 📖",
      description: "Estoy preparando más listas de vocabulario. ¡Vuelve pronto!",
      tag: "Vocabulario",
    },
    ko: {
      title: "새 어휘 자료, 곧 공개돼요 📖",
      description: "새로운 어휘 자료를 준비하고 있어요. 곧 만나요!",
      tag: "어휘",
    },
  },
  {
    slug: "pronunciacion-proximamente",
    fileUrl: "",
    comingSoon: true,
    es: {
      title: "Guía de pronunciación, muy pronto 🗣️",
      description: "Estoy preparando una guía de pronunciación para hispanohablantes. ¡Vuelve pronto!",
      tag: "Pronunciación",
    },
    ko: {
      title: "발음 가이드, 곧 공개돼요 🗣️",
      description: "스페인어권 학습자를 위한 발음 가이드를 준비하고 있어요. 곧 만나요!",
      tag: "발음",
    },
  },
];

export function pdfContent(pdf: PdfResource, lang: Lang): PdfContent {
  return pdf[lang];
}
