// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ionjpgDev.github.io',
  base: '/TransportadoraColqueMachicado',
  integrations: [
    starlight({
      plugins: [
        lucode({
          navLinks: [
            { label: 'INICIO', link: '/' },
            { label: 'DOCS', link: '/' },
            { label: 'CONTACTO', link: '/contacto' },
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
          label: "Guides",
          items: [
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
