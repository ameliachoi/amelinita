# amelinita

Sitio web de recursos gratuitos de coreano para hispanohablantes (amelinita / @ameliachoi00).

Construido con [Astro](https://astro.build) + Tailwind CSS, optimizado para SEO y rendimiento.

## Estructura

- `/` — Home (storytelling)
- `/sobre-mi/` — Sobre Amelia / amelinita
- `/recursos-pdf/` — PDFs gratuitos
- `/contenido/` — TikTok, YouTube, Instagram, Spotify (enlaces directos, sin embeds)
- Cada página también existe en `/ko/...` (versión en coreano)

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Instala dependencias                         |
| `npm run dev`       | Servidor local en `localhost:4321`           |
| `npm run build`     | Build de producción en `./dist/`             |
| `npm run preview`   | Previsualiza el build de producción          |

## Captura de correo (Kit)

El formulario de newsletter y el modal de descarga de PDFs (`/api/subscribe`) están conectados a
Kit (antes ConvertKit), pero necesitan dos variables de entorno para funcionar:

1. Crea una cuenta en [Kit](https://kit.com) y un formulario (Grow → Landing Pages & Forms →
   Create Form).
2. Copia `.env.example` a `.env` y completa:
   - `KIT_API_KEY` — Settings → Developer → API Keys (usa la "API Key" pública, no el "API Secret")
   - `KIT_FORM_ID` — abre el formulario que creaste; el ID aparece en la URL del editor
3. En Vercel, agrega las mismas variables en Project Settings → Environment Variables antes de desplegar.

Sin estas variables, los formularios muestran un error claro en vez de fallar en silencio (probado).

Cada suscripción llega a Kit con el campo personalizado `pdf_solicitado` (si vino de un PDF). Para
que Kit envíe el PDF automáticamente, crea una **Automation** en Kit con trigger "Subscribes to
form" (el formulario de arriba) y adjunta el archivo o el link de descarga en el email automático;
si quieres un PDF distinto por recurso, agrega una condición sobre el campo `pdf_solicitado`.

## Pendiente antes de publicar

Ver `.claude/plans/tidy-sprouting-avalanche.md` para la lista completa. Resumen:

- Reemplazar contenido placeholder de `src/data/pdfs.ts` y `src/data/content.ts` con recursos reales
  (en `content.ts`, reemplazar los `REEMPLAZAR_ID` por las URLs reales de cada post)
- Subir los PDFs reales a `public/downloads/` (o a Kit) y actualizar `fileUrl` en `src/data/pdfs.ts`
- Conectar dominio real y actualizar `site` en `astro.config.mjs` + `public/robots.txt`
- Solicitar Google AdSense (una vez el sitio esté en vivo) y reemplazar los `<AdSlot />` por el código real
- Configurar `KIT_API_KEY` / `KIT_FORM_ID` (ver arriba)
- Exportar `public/og-image.svg` a PNG/JPG real
