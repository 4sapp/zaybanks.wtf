# zaybanks.wtf

Portfolio y blog de **Juan Sebastian**, graphics programmer de Colombia. Hecho con [Astro](https://astro.build) y Tailwind CSS.
Sitio 100 % estático: sin servidor ni base de datos.

![Inicio](./.github/img/screenshot.png)

## Desarrollo

Requiere [Bun](https://bun.sh) (o Node ≥ 22 con npm).

```bash
bun install
bun run dev        # http://localhost:4321
```

| Comando           | Qué hace                                 |
| ----------------- | ---------------------------------------- |
| `bun run dev`     | Servidor de desarrollo con recarga       |
| `bun run build`   | Genera el sitio estático en `dist/`      |
| `bun run preview` | Sirve `dist/` para revisarlo             |
| `bun run check`   | Comprobación de tipos                    |

## Contenido

- **Proyectos:** edita `src/data/projects.ts`.
- **Posts del blog:** crea un archivo `.md` en `src/content/blog/` (copia `_plantilla.md`). El nombre del archivo es la URL: `mi-post.md` → `/blog/mi-post`. Con `draft: true` no se publica.
- **Aviso legal:** `src/content/legal.md`.
- **Dominio:** `site` en `astro.config.mjs` y `public/CNAME`.

## Deploy

Cada push a `main` se publica en GitHub Pages con `.github/workflows/deploy.yml`.
Una sola vez: en el repo, **Settings → Pages → Source: GitHub Actions**, y en tu proveedor de dominio apunta `zaybanks.wtf` a GitHub Pages
(registros `A` a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).

## Licencia

[GNU GPL v3.0](./LICENSE). Este sitio partió del proyecto *preciado.eu* (GPL-3.0); se conserva su aviso de licencia como exige la GPL.
