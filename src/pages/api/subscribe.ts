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

  const apiKey = import.meta.env.KIT_API_KEY;
  const formId = import.meta.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    // Kit todavía no está configurado (faltan KIT_API_KEY / KIT_FORM_ID en las
    // variables de entorno). Ver README para instrucciones.
    return json(
      { error: "El registro de correo aún no está activado en este sitio. Inténtalo más tarde." },
      503
    );
  }

  const kitRes = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      fields: body.pdfTitle ? { pdf_solicitado: body.pdfTitle } : undefined,
    }),
  });

  if (!kitRes.ok) {
    // TODO(debug): quitar "debug" de la respuesta una vez confirmado que Kit funciona.
    const debug = await kitRes.text().catch(() => "");
    return json({ error: "No pudimos registrar tu correo. Inténtalo de nuevo.", debug, status: kitRes.status }, 502);
  }

  return json({ ok: true }, 200);
};

function json(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
