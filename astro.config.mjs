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
            { label: 'DOCS', link: 'proyecto-analisis/01-aspectos-generales' },
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
    label: "Expediente Técnico",
    items: [
      {
        label: "1. Aspectos Generales",
        items: [
          { label: "Introducción", slug: "proyecto-analisis/01-aspectos-generales/introduccion" },
          { label: "Antecedentes", slug: "proyecto-analisis/01-aspectos-generales/antecedentes" },
          { label: "Diagnóstico", slug: "proyecto-analisis/01-aspectos-generales/diagnostico" },
          { label: "Planteamiento del Problema", slug: "proyecto-analisis/01-aspectos-generales/planteamiento-problema" },
          { label: "Árbol de Problemas", slug: "proyecto-analisis/01-aspectos-generales/arbol-problemas" },
          { label: "Objetivos", slug: "proyecto-analisis/01-aspectos-generales/objetivos" },
          { label: "Justificación", slug: "proyecto-analisis/01-aspectos-generales/justificacion" },
          { label: "Alcance", slug: "proyecto-analisis/01-aspectos-generales/alcance" },
          { label: "Planificación (Gantt)", slug: "proyecto-analisis/01-aspectos-generales/planificacion-gantt" },
        ],
      },
      {
        label: "2. Marco Metodológico",
        items: [
          { label: "Enfoque de Investigación", slug: "proyecto-analisis/02-marco-metodologico/enfoque-investigacion" },
          { label: "Tipo de Investigación", slug: "proyecto-analisis/02-marco-metodologico/tipo-investigacion" },
          { label: "Técnicas de Recolección", slug: "proyecto-analisis/02-marco-metodologico/tecnicas-recoleccion" },
          { label: "Población", slug: "proyecto-analisis/02-marco-metodologico/poblacion" },
          { label: "Metodología de Desarrollo (RUP)", slug: "proyecto-analisis/02-marco-metodologico/metodologia-desarrollo" },
        ],
      },
      {
        label: "3. Marco Teórico",
        items: [
          { label: "Marco Histórico", slug: "proyecto-analisis/03-marco-teorico/marco-historico" },
          { label: "Marco Conceptual", slug: "proyecto-analisis/03-marco-teorico/marco-conceptual" },
          { label: "Marco Referencial", slug: "proyecto-analisis/03-marco-teorico/marco-referencial" },
          { label: "Marco Legal", slug: "proyecto-analisis/03-marco-teorico/marco-legal" },
        ],
      },
      {
        label: "4. Análisis y Diseño Estructurado",
        items: [
          { label: "Descripción del Sistema Actual", slug: "proyecto-analisis/04-analisis-diseno-estructurado/descripcion-sistema-actual" },
          { label: "Análisis de Problemas", slug: "proyecto-analisis/04-analisis-diseno-estructurado/analisis-problemas" },
          { label: "Descripción del Sistema Propuesto", slug: "proyecto-analisis/04-analisis-diseno-estructurado/descripcion-sistema-propuesto" },
          { label: "Reglas de Negocio", slug: "proyecto-analisis/04-analisis-diseno-estructurado/reglas-negocio" },
          {
            label: "Modelo Esencial",
            items: [
              { label: "Modelo Ambiental", slug: "proyecto-analisis/04-analisis-diseno-estructurado/modelo-esencial/ambiental" },
              { label: "Modelo de Comportamiento", slug: "proyecto-analisis/04-analisis-diseno-estructurado/modelo-esencial/comportamiento" },
              { label: "DFD Niveles", slug: "proyecto-analisis/04-analisis-diseno-estructurado/modelo-esencial/dfd-niveles" },
              { label: "Modelo Entidad-Relación", slug: "proyecto-analisis/04-analisis-diseno-estructurado/modelo-esencial/modelo-entidad-relacion" },
              { label: "Diccionario de Datos", slug: "proyecto-analisis/04-analisis-diseno-estructurado/modelo-esencial/diccionario-datos" },
            ],
          },
        ],
      },
      {
        label: "5. Análisis Orientado a Objetos",
        items: [
          { label: "Modelo de Clases UML", slug: "proyecto-analisis/05-analisis-orientado-objetos/modelo-clase-uml" },
          { label: "Modelado BPMN", slug: "proyecto-analisis/05-analisis-orientado-objetos/bpmn-modelado" },
          { label: "Interacciones Dinámicas", slug: "proyecto-analisis/05-analisis-orientado-objetos/interacciones-dinamicas" },
          {
            label: "Casos de Uso",
            items: [
              { label: "Casos de Uso de Sistema", slug: "proyecto-analisis/05-analisis-orientado-objetos/casos-uso/sistema" },
              { label: "Casos de Uso de Negocio", slug: "proyecto-analisis/05-analisis-orientado-objetos/casos-uso/negocio" },
              { label: "Casos de Uso en Texto", slug: "proyecto-analisis/05-analisis-orientado-objetos/casos-uso/texto-detallado" },
            ],
          },
        ],
      },
      {
        label: "6. Fuentes y Bibliografía",
        slug: "proyecto-analisis/06-fuentes-bibliografia",
      },
      {
        label: "7. Anexos",
        items: [
          { label: "Árbol de Problemas (imagen)", slug: "proyecto-analisis/07-anexos/arbol-problemas-imagen" },
          { label: "BPMN Actual", slug: "proyecto-analisis/07-anexos/bpmn-actual" },
          { label: "BPMN Propuesto", slug: "proyecto-analisis/07-anexos/bpmn-propuesto" },
        ],
      },
      {
        label: "8. Conclusiones y Recomendaciones",
        slug: "proyecto-analisis/08-conclusiones-recomendaciones",
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
