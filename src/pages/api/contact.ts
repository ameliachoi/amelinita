export const prerender = false;

import type { APIRoute } from "astro";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return json({ error: "Solicitud inválida." }, 400);
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !message || !EMAIL_REGEX.test(email)) {
    return json({ error: "Completa todos los campos con un correo válido." }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // Falta configurar Resend (RESEND_API_KEY / CONTACT_TO_EMAIL). Ver README.
    return json(
      { error: "El formulario de contacto aún no está activado en este sitio. Escríbeme por TikTok mientras tanto." },
      503
    );
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      // TODO: reemplazar por un remitente de tu propio dominio verificado en Resend
      // (ej. "amelinita <contacto@amelinita.com>") una vez tengas el dominio conectado.
      from: "amelinita (formulario web) <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return json({ error: "No pudimos enviar tu mensaje. Inténtalo de nuevo." }, 502);
  }

  return json({ ok: true }, 200);
};

function json(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
