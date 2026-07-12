import type { Lang } from "../i18n/translations";

interface PdfContent {
  title: string;
  description: string;
  longDescription: string;
  tag: string;
}

export interface PdfResource {
  slug: string;
  // TODO: reemplazar por la URL real del archivo (hosting propio, Beehiiv, etc.) antes de publicar.
  fileUrl: string;
  es: PdfContent;
  ko: PdfContent;
}

// Contenido de ejemplo (placeholder). Reemplazar con los PDFs reales antes de publicar.
export const pdfs: PdfResource[] = [
  {
    slug: "guia-hangul-en-1-dia",
    fileUrl: "/downloads/guia-hangul-en-1-dia.pdf",
    es: {
      title: "Guía del Hangul en 1 día",
      description: "Aprende a leer y escribir el alfabeto coreano paso a paso, con ejemplos en español.",
      longDescription:
        "Una guía visual pensada para hispanohablantes que nunca han visto el alfabeto coreano. Vas a aprender las 24 letras del hangul, cómo se combinan en sílabas y a practicar con ejemplos de palabras reales, todo explicado en español y sin tecnicismos.",
      tag: "Principiante",
    },
    ko: {
      title: "하루 만에 배우는 한글",
      description: "한글을 처음 보는 스페인어권 학습자를 위한 단계별 가이드예요.",
      longDescription:
        "한글을 한 번도 본 적 없는 스페인어권 학습자를 위한 비주얼 가이드예요. 자음과 모음 24자를 배우고, 음절이 만들어지는 원리를 익히고, 실제 단어로 연습할 수 있어요. 스페인어로 쉽게 설명돼 있어요.",
      tag: "입문",
    },
  },
  {
    slug: "50-frases-para-viajar-a-corea",
    fileUrl: "/downloads/50-frases-para-viajar-a-corea.pdf",
    es: {
      title: "50 frases esenciales para viajar a Corea",
      description: "Frases prácticas con pronunciación explicada para hispanohablantes.",
      longDescription:
        "50 frases que realmente vas a usar si viajas a Corea: en el aeropuerto, en restaurantes, pidiendo ayuda o socializando. Cada frase incluye la pronunciación explicada de forma sencilla, pensada para quienes hablan español.",
      tag: "Vocabulario",
    },
    ko: {
      title: "한국 여행 필수 표현 50가지",
      description: "스페인어권 여행자를 위한 실전 표현과 발음 설명.",
      longDescription:
        "공항, 식당, 길 찾기, 인사 등 한국 여행에서 실제로 쓰게 될 표현 50가지예요. 스페인어 화자가 이해하기 쉽게 발음까지 함께 설명했어요.",
      tag: "어휘",
    },
  },
  {
    slug: "vocabulario-hola-coreano-1-10",
    fileUrl: "/downloads/vocabulario-hola-coreano-1-10.pdf",
    es: {
      title: "Vocabulario de Hola Coreano — Episodios 1 a 10",
      description: "Lista de palabras y expresiones usadas en los primeros episodios del podcast.",
      longDescription:
        "El vocabulario completo de los primeros 10 episodios de mi podcast Hola Coreano, organizado por episodio para que puedas repasar mientras escuchas o después de cada capítulo.",
      tag: "Podcast",
    },
    ko: {
      title: "Hola Coreano 어휘집 — 1~10화",
      description: "팟캐스트 첫 10개 에피소드에 나온 단어와 표현 모음.",
      longDescription:
        "제 팟캐스트 'Hola Coreano' 첫 10개 에피소드에 나온 어휘를 회차별로 정리했어요. 청취 중이나 청취 후 복습용으로 활용하기 좋아요.",
      tag: "팟캐스트",
    },
  },
  {
    slug: "gramatica-particulas-eun-neun-i-ga",
    fileUrl: "/downloads/gramatica-particulas-eun-neun-i-ga.pdf",
    es: {
      title: "Gramática básica: partículas 은/는 y 이/가",
      description: "Explicación clara de dos de las partículas más confusas para hispanohablantes.",
      longDescription:
        "Estas dos partículas confunden a casi todos los hispanohablantes que aprenden coreano, porque no existe un equivalente directo en español. Esta guía las explica con ejemplos comparativos y ejercicios cortos para que por fin dejen de ser un misterio.",
      tag: "Gramática",
    },
    ko: {
      title: "기초 문법: 은/는 그리고 이/가",
      description: "스페인어권 학습자가 가장 헷갈려하는 조사 두 가지를 정리했어요.",
      longDescription:
        "스페인어에는 정확히 대응하는 표현이 없어서, 이 두 조사는 스페인어권 학습자들이 특히 어려워해요. 비교 예문과 짧은 연습문제로 확실하게 정리해드려요.",
      tag: "문법",
    },
  },
];

export function pdfContent(pdf: PdfResource, lang: Lang): PdfContent {
  return pdf[lang];
}
