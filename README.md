# amelinita

Sitio web de recursos gratuitos de coreano para hispanohablantes (amelinita / @ameliachoi00).

Construido con [Astro](https://astro.build) + Tailwind CSS, optimizado para SEO y rendimiento.

## Estructura

- `/` — Home (storytelling)
- `/sobre-mi/` — Sobre Amelia / amelinita
- `/recursos-pdf/` — PDFs gratuitos
- `/videos/` — Videos (TikTok/YouTube)
- `/contacto/` — Contacto

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Instala dependencias                         |
| `npm run dev`       | Servidor local en `localhost:4321`           |
| `npm run build`     | Build de producción en `./dist/`             |
| `npm run preview`   | Previsualiza el build de producción          |

## Captura de correo (Beehiiv)

El formulario de newsletter y el modal de descarga de PDFs (`/api/subscribe`) están conectados a
Beehiiv, pero necesitan dos variables de entorno para funcionar:

1. Crea una publicación en [Beehiiv](https://www.beehiiv.com) (plan gratis, hasta 2 500 suscriptores).
2. Copia `.env.example` a `.env` y completa:
   - `BEEHIIV_PUBLICATION_ID` — Settings → Publication → Publication ID (empieza con `pub_`)
   - `BEEHIIV_API_KEY` — Settings → Integrations → API → Create API Key
3. En Vercel, agrega las mismas variables en Project Settings → Environment Variables antes de desplegar.

Sin estas variables, los formularios muestran un error claro en vez de fallar en silencio (probado).

Para que Beehiiv envíe el PDF automáticamente al suscribirse desde `/recursos-pdf/[slug]/`, crea una
**Automation** en Beehiiv con trigger "New Subscriber" filtrando por `utm_campaign` = el slug del PDF,
y adjunta el archivo o el link de descarga en el email automático.

## Pendiente antes de publicar

Ver `.claude/plans/tidy-sprouting-avalanche.md` para la lista completa. Resumen:

- Reemplazar contenido placeholder de `src/data/pdfs.ts` y `src/data/videos.ts` con recursos reales
- Subir los PDFs reales a `public/downloads/` (o a Beehiiv) y actualizar `fileUrl` en `src/data/pdfs.ts`
- Conectar dominio real y actualizar `site` en `astro.config.mjs` + `public/robots.txt`
- Solicitar Google AdSense (una vez el sitio esté en vivo) y reemplazar los `<AdSlot />` por el código real
- Configurar `BEEHIIV_PUBLICATION_ID` / `BEEHIIV_API_KEY` (ver arriba)
- Conectar un backend de formularios para la página de contacto
- Exportar `public/og-image.svg` a PNG/JPG real
