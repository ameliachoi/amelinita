export type Lang = "es" | "ko";

export const languages: Record<Lang, string> = {
  es: "Español",
  ko: "한국어",
};

export const ui = {
  es: {
    "nav.sobreMi": "Sobre mí",
    "nav.pdf": "PDF gratis",
    "nav.recursos": "Recursos",
    "nav.blog": "Blog",
    "nav.reto": "Suelta la Lengua",

    "footer.tagline":
      "Recursos gratuitos y programas guiados de coreano para hispanohablantes, creados con cariño por una coreana que también está aprendiendo español 💜.",
    "footer.explore": "Explora",
    "footer.follow": "Sígueme",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",

    "badge.free": "Gratis",

    "ad.postIntro": "Anuncio · después de la introducción",
    "ad.midContent": "Anuncio · en medio del contenido",
    "ad.preFooter": "Anuncio · antes del pie de página",
    "ad.minimal": "Anuncio",
    "ad.reserved": "espacio reservado para Google AdSense",

    "modal.title": "Descarga tu PDF",
    "modal.description": "Déjanos tu correo y te enviamos el acceso a",
    "modal.emailLabel": "Correo electrónico",
    "modal.emailPlaceholder": "tucorreo@ejemplo.com",
    "modal.cancel": "Cancelar",
    "modal.submit": "Enviar y descargar",
    "modal.submitting": "Enviando...",
    "modal.privacy": "Solo usamos tu correo para enviarte este recurso y avisarte de material nuevo. Sin spam.",
    "modal.invalidEmail": "Escribe un correo electrónico válido.",
    "modal.genericError": "No pudimos registrar tu correo. Inténtalo de nuevo.",
    "modal.networkError": "Hubo un problema de conexión. Inténtalo de nuevo.",
    "modal.openButton": "Descargar PDF gratis 💜",

    "content.viewOn": "Ver en",

    "lang.switchTo": "한국어로 보기",
  },
  ko: {
    "nav.sobreMi": "소개",
    "nav.pdf": "무료 PDF",
    "nav.recursos": "자료",
    "nav.blog": "블로그",
    "nav.reto": "Suelta la Lengua",

    "footer.tagline": "스페인어를 공부하는 한국인이 정성껏 만든, 스페인어권을 위한 무료 자료와 가이드 프로그램 💜.",
    "footer.explore": "메뉴",
    "footer.follow": "팔로우하기",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "개인정보처리방침",

    "badge.free": "무료",

    "ad.postIntro": "광고 · 소개 다음",
    "ad.midContent": "광고 · 콘텐츠 중간",
    "ad.preFooter": "광고 · 푸터 앞",
    "ad.minimal": "광고",
    "ad.reserved": "Google AdSense 예정 영역",

    "modal.title": "PDF 다운로드",
    "modal.description": "이메일을 남겨주시면 아래 자료를 보내드려요:",
    "modal.emailLabel": "이메일 주소",
    "modal.emailPlaceholder": "you@example.com",
    "modal.cancel": "취소",
    "modal.submit": "제출하고 다운로드",
    "modal.submitting": "전송 중...",
    "modal.privacy": "이 이메일은 자료 발송과 새 콘텐츠 안내용으로만 사용돼요. 스팸 없음.",
    "modal.invalidEmail": "올바른 이메일 주소를 입력해주세요.",
    "modal.genericError": "등록에 실패했어요. 다시 시도해주세요.",
    "modal.networkError": "연결에 문제가 있어요. 다시 시도해주세요.",
    "modal.openButton": "PDF 무료 다운로드 💜",

    "content.viewOn": "에서 보기",

    "lang.switchTo": "Ver en español",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}

// Convierte una ruta actual (p.ej. "/recursos-pdf/" o "/ko/recursos-pdf/")
// a la misma ruta en el otro idioma.
export function getAlternateLangPath(pathname: string, currentLang: Lang): string {
  if (currentLang === "es") {
    return `/ko${pathname}`;
  }
  return pathname.replace(/^\/ko/, "") || "/";
}
