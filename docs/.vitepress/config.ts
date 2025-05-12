import { defineConfig } from 'vitepress'

// Check if we're in development mode
const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  title: "LT Wiki",
  description: "Lowlands Tactical Kennisbank",
  // Only use base URL in production
  base: isDev ? '/' : '/LT-Wiki/',
  themeConfig: {
    logo: {
      light: '/logo-light.png',
      dark: '/logo-dark.png',
      alt: 'LT Wiki'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Zoeken...',
            buttonAriaLabel: 'Zoeken'
          },
          modal: {
            noResultsText: 'Geen resultaten gevonden voor',
            resetButtonTitle: 'Zoekopdracht wissen',
            footer: {
              selectText: 'om te selecteren',
              navigateText: 'om te navigeren',
              closeText: 'om te sluiten'
            }
          }
        }
      }
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Algemene Informatie",
        items: [
          { text: "Over Lowlands Tactical", link: "/algemene-informatie/over-lowlands-tactical" },
          { text: "Modset Installeren", link: "/algemene-informatie/modset-installeren" },
          { text: "Instellingen", link: "/algemene-informatie/instellingen" },
          { text: "Troubleshooting", link: "/algemene-informatie/troubleshooting" },
          { text: "Mediabeleid", link: "/algemene-informatie/mediabeleid" }
        ]
      },
      {
        text: "Tactische Syllabus",
        items: [
          { text: "Situational Awareness", link: "/tactische-syllabus/situational-awareness" },
          { text: "Doelidentificatie", link: "/tactische-syllabus/doelidentificatie" },
          { text: "Zelfhulp- en Kameradenhulp", link: "/tactische-syllabus/zelfhulp-kameradenhulp" },
          { text: "Communicatie", link: "/tactische-syllabus/communicatie" },
          { text: "Verplaatsing in groep", link: "/tactische-syllabus/verplaatsing-in-groep" },
          { text: "Het contact", link: "/tactische-syllabus/het-contact" },
          { text: "De Reorganisatie", link: "/tactische-syllabus/reorganisatie" },
          { text: "Anti-Tankdrill", link: "/tactische-syllabus/anti-tankdrill" },
          { text: "Optreden in verstedelijkt gebied", link: "/tactische-syllabus/verstedelijkt-gebied" },
          { text: "Voertuigdrills", link: "/tactische-syllabus/voertuigdrills" },
          { text: "Navigeren", link: "/tactische-syllabus/navigeren" }
        ]
      },
      {
        text: "Specialisaties",
        items: [
          { text: "Combat Life Saver", link: "/specialisaties/combat-life-saver" },
          { text: "Lichte Antitank", link: "/specialisaties/lichte-antitank" },
          { text: "J-TAC", link: "/specialisaties/j-tac" },
          { text: "Engineer", link: "/specialisaties/engineer" },
          { text: "Marksman", link: "/specialisaties/marksman" },
          { text: "Vuurteamleider", link: "/specialisaties/vuurteamleider" },
          { text: "Groepscommandant", link: "/specialisaties/groepscommandant" }
        ]
      },
      {
        text: "Missiemakers",
        items: [
          { text: "Template H3", link: "/missiemakers/template-h3" },
          { text: "Scenario Eisen", link: "/missiemakers/scenario-eisen" },
          { text: "Tips en Tricks", link: "/missiemakers/tips-en-tricks" }
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Algemene Informatie',
          items: [
            { text: "Over Lowlands Tactical", link: "/algemene-informatie/over-lowlands-tactical" },
            { text: "Modset Installeren", link: "/algemene-informatie/modset-installeren" },
            { text: "Instellingen", link: "/algemene-informatie/instellingen" },
            { text: "Troubleshooting", link: "/algemene-informatie/troubleshooting" },
            { text: "Mediabeleid", link: "/algemene-informatie/mediabeleid" }
          ]
        },
        {
          text: 'Tactische Syllabus',
          items: [
            { text: "Situational Awareness", link: "/tactische-syllabus/situational-awareness" },
            { text: "Doelidentificatie", link: "/tactische-syllabus/doelidentificatie" },
            { text: "Zelfhulp- en Kameradenhulp", link: "/tactische-syllabus/zelfhulp-kameradenhulp" },
            { text: "Communicatie", link: "/tactische-syllabus/communicatie" },
            { text: "Verplaatsing in groep", link: "/tactische-syllabus/verplaatsing-in-groep" },
            { text: "Het contact", link: "/tactische-syllabus/het-contact" },
            { text: "De Reorganisatie", link: "/tactische-syllabus/reorganisatie" },
            { text: "Anti-Tankdrill", link: "/tactische-syllabus/anti-tankdrill" },
            { text: "Optreden in verstedelijkt gebied", link: "/tactische-syllabus/verstedelijkt-gebied" },
            { text: "Voertuigdrills", link: "/tactische-syllabus/voertuigdrills" },
            { text: "Navigeren", link: "/tactische-syllabus/navigeren" }
          ]
        },
        {
          text: 'Specialisaties',
          items: [
            { text: "Combat Life Saver", link: "/specialisaties/combat-life-saver" },
            { text: "Lichte Antitank", link: "/specialisaties/lichte-antitank" },
            { text: "J-TAC", link: "/specialisaties/j-tac" },
            { text: "Engineer", link: "/specialisaties/engineer" },
            { text: "Marksman", link: "/specialisaties/marksman" },
            { text: "Vuurteamleider", link: "/specialisaties/vuurteamleider" },
            { text: "Groepscommandant", link: "/specialisaties/groepscommandant" }
          ]
        },
        {
          text: 'Missiemakers',
          items: [
            { text: "Template H3", link: "/missiemakers/template-h3" },
            { text: "Scenario Eisen", link: "/missiemakers/scenario-eisen" },
            { text: "Tips en Tricks", link: "/missiemakers/tips-en-tricks" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lowlands-Tactical' },
      { icon: 'discord', link: 'https://discord.gg/WU9CydUm5G' }
    ],
    footer: {
      message: "Website mogelijk gemaakt door VitePress",
      copyright: "Copyright © 2025 Lowlands Tactical"
    },
    outline: {
      label: 'Op deze pagina'
    }
  },
  outDir: '../dist'
}) 