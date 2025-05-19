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
        text: "1. Algemene Informatie",
        items: [
          { text: "1.1. Introductie", link: "/1_algemene_informatie/1_1_introductie" },
          { text: "1.2. Modset Installeren", link: "/1_algemene_informatie/1_2_modset_installeren" },
          { text: "1.3. Toetsinstellingen", link: "/1_algemene_informatie/1_3_toetsinstellingen" },
          { text: "1.4. Troubleshooting", link: "/1_algemene_informatie/1_4_troubleshooting" },
          { text: "1.5. Mediabeleid", link: "/1_algemene_informatie/1_5_mediabeleid" }
        ]
      },
      {
        text: "2. Tactische Syllabus",
        items: [
          { text: "2.1. Individuele Vaardigheden", link: "/2_tactische_syllabus/2_1_individuele_vaardigheden" },
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
          text: '1. Algemene Informatie',
          items: [
            { text: "1.1. Introductie", link: "/1_algemene_informatie/1_1_introductie" },
            { text: "1.2. Modset Installeren", link: "/1_algemene_informatie/1_2_modset_installeren" },
            { text: "1.3. Toetsinstellingen", link: "/1_algemene_informatie/1_3_toetsinstellingen" },
            { text: "1.4. Troubleshooting", link: "/1_algemene_informatie/1_4_troubleshooting" },
            { text: "1.5. Mediabeleid", link: "/1_algemene_informatie/1_5_mediabeleid" }
          ]
        },
        {
          text: '2. Tactische Syllabus',
          items: [
            { text: "2.1. Individuele Vaardigheden", link: "/2_tactische_syllabus/2_1_individuele_vaardigheden" },
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