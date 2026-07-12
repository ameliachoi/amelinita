export const prerender = false;

import type { APIRoute } from "astro";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: string; pdfSlug?: string; pdfTitle?: string; source?: string };

  try {
    body = await request.json();
  } catch {
    return json({ error: "Solicitud inválida." }, 400);
  }

  const email = body.email?.trim() ?? "";
  if (!EMAIL_REGEX.test(email)) {
    return json({ error: "Escribe un correo electrónico válido." }, 400);
  }

  const apiKey = import.meta.env.BEEHIIV_API_KEY;
  const publicationId = import.meta.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    // Beehiiv todavía no está configurado (faltan BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID
    // en las variables de entorno). Ver README para instrucciones.
    return json(
      { error: "El registro de correo aún no está activado en este sitio. Inténtalo más tarde." },
      503
    );
  }

  const beehiivRes = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "amelinita-web",
        utm_medium: body.pdfSlug ? "pdf-lead-magnet" : "newsletter-form",
        utm_campaign: body.pdfSlug ?? body.source ?? "newsletter",
        custom_fields: body.pdfTitle
          ? [{ name: "pdf_solicitado", value: body.pdfTitle }]
          : undefined,
      }),
    }
  );

  if (!beehiivRes.ok) {
    return json({ error: "No pudimos registrar tu correo. Inténtalo de nuevo." }, 502);
  }

  return json({ ok: true }, 200);
};

function json(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
