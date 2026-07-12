export type Lang = "es" | "ko";

export const languages: Record<Lang, string> = {
  es: "Español",
  ko: "한국어",
};

export const ui = {
  es: {
    "nav.sobreMi": "Sobre mí",
    "nav.pdf": "Recursos PDF",
    "nav.contenido": "Contenido",
    "nav.contacto": "Contacto",

    "footer.tagline":
      "Recursos gratuitos de coreano para hispanohablantes, creados con cariño por una coreana que también está aprendiendo español 💜.",
    "footer.explore": "Explora",
    "footer.follow": "Sígueme",
    "footer.rights": "Todos los derechos reservados.",

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

    "newsletter.title": "Recibe nuevos recursos en tu correo 💌",
    "newsletter.description": "Únete y te aviso cuando publique nuevos PDFs y videos para aprender coreano.",
    "newsletter.submit": "Suscribirme ✨",
    "newsletter.success": "¡Listo! Revisa tu correo para confirmar 💜.",

    "content.play": "Reproducir",
    "content.openIn": "Abrir en",

    "contact.nameLabel": "Nombre",
    "contact.namePlaceholder": "Tu nombre",
    "contact.messageLabel": "Mensaje",
    "contact.messagePlaceholder": "Cuéntame en qué puedo ayudarte...",
    "contact.submit": "Enviar mensaje 💌",
    "contact.submitting": "Enviando...",
    "contact.success": "¡Mensaje enviado! Te responderé pronto.",
    "contact.fillAll": "Completa todos los campos con un correo válido.",

    "lang.switchTo": "한국어로 보기",
  },
  ko: {
    "nav.sobreMi": "소개",
    "nav.pdf": "PDF 자료",
    "nav.contenido": "콘텐츠",
    "nav.contacto": "문의하기",

    "footer.tagline": "스페인어를 공부하는 한국인이 정성껏 만든, 스페인어권을 위한 무료 한국어 학습 자료 💜.",
    "footer.explore": "메뉴",
    "footer.follow": "팔로우하기",
    "footer.rights": "All rights reserved.",

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

    "newsletter.title": "새 자료를 이메일로 받아보세요 💌",
    "newsletter.description": "구독하시면 새 PDF와 영상이 올라올 때 알려드려요.",
    "newsletter.submit": "구독하기 ✨",
    "newsletter.success": "완료! 이메일을 확인해주세요 💜.",

    "content.play": "재생하기",
    "content.openIn": "에서 보기:",

    "contact.nameLabel": "이름",
    "contact.namePlaceholder": "이름을 입력해주세요",
    "contact.messageLabel": "메시지",
    "contact.messagePlaceholder": "어떤 걸 도와드릴까요?",
    "contact.submit": "메시지 보내기 💌",
    "contact.submitting": "전송 중...",
    "contact.success": "메시지가 전송됐어요! 곧 답장드릴게요.",
    "contact.fillAll": "올바른 이메일과 함께 모든 항목을 입력해주세요.",

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
