// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import lucode from "lucode-starlight";

export default defineConfig({
  site: "https://ionjpgDev.github.io",
  base: "/TransportadoraColqueMachicado",

  integrations: [
    starlight({
      plugins: [
        lucode({
          navLinks: [
            {
              label: "INICIO",
              link: "/",
            },
            {
              label: "DOCUMENTACIÓN",
              link: "proyecto-analisis/01-aspectos-generales",
            },
            {
              label: "EMPRESA",
              link: "empresa/sobre-nosotros",
            },
          ],
        }),
      ],

      components: {
        SocialIcons: "./src/components/CustomSocialIcons.astro",
      },

      title: "TRANSPORTADORA COLQUE MACHICADO S.R.L.",

      defaultLocale: "es",

      logo: {
        dark: "./src/assets/logo-light.svg",
        light: "./src/assets/logo-dark.svg",
      },

      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },

      sidebar: [
        {
          label: "La Empresa",
          items: [
            {
              label: "Misión, Visión e Identidad",
              slug: "empresa/identidad-mision",
            },
            {
              label: "Alcance y Organización",
              slug: "empresa/alcance-organizacion",
            },
            {
              label: "Sobre Nosotros",
              slug: "empresa/sobre-nosotros",
            },
          ],
        },

        {
          label: "Expediente Técnico",
          items: [
            {
              label: "1. Aspectos Generales",
              slug: "proyecto-analisis/01-aspectos-generales",
            },
            {
              label: "2. Marco Metodológico",
              slug: "proyecto-analisis/02-marco-metodologico",
            },
            {
              label: "3. Marco Teórico",
              slug: "proyecto-analisis/03-marco-teorico",
            },
            {
              label: "4. Análisis Estructurado",
              slug: "proyecto-analisis/04-analisis-estructurado",
            },
            {
              label: "5. Análisis OO",
              slug: "proyecto-analisis/05-analisis-oo",
            },
            {
              label: "6. Bibliografía",
              slug: "proyecto-analisis/06-bibliografia",
            },
            {
              label: "7. Anexos",
              slug: "proyecto-analisis/07-anexos",
            },
            {
              label: "8. Conclusiones",
              slug: "proyecto-analisis/08-conclusiones",
            },
          ],
        },

        {
          label: "Multimedia",
          items: [
            {
              label: "Demostraciones",
              slug: "multimedia/demos",
            },
            {
              label: "Video de Defensa",
              slug: "multimedia/video-defensa",
            },
          ],
        },
      ],

      customCss: ["./src/styles/global.css"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});