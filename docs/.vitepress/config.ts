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
        text: "1. Algemene informatie",
        items: [
          { text: "1.1. Introductie", link: "/1_algemene_informatie/1_1_introductie" },
          { text: "1.2. Modset installeren", link: "/1_algemene_informatie/1_2_modset_installeren" },
          { text: "1.3. Toetsinstellingen", link: "/1_algemene_informatie/1_3_toetsinstellingen" },
          { text: "1.4. Troubleshooting", link: "/1_algemene_informatie/1_4_troubleshooting" },
          { text: "1.5. Mediabeleid", link: "/1_algemene_informatie/1_5_mediabeleid" }
        ]
      },
      {
        text: "2. Basisvaardigheden",
        items: [
          { text: "2.1. Basis EHBO", link: "/2_basisvaardigheden/2_1_basis_ehbo" },
          { text: "2.2. Navigeren", link: "/2_basisvaardigheden/2_2_navigeren" },
          { text: "2.3. Richting Afstand Doel", link: "/2_basisvaardigheden/2_3_richting_afstand_doel" },
          { text: "2.4. Reageren op contact", link: "/2_basisvaardigheden/2_4_reageren_op_contact" },
          { text: "2.5. 360 aanhouden", link: "/2_basisvaardigheden/2_5_360_aanhouden" },
          { text: "2.6. Optreden Verstedelijkt Gebied", link: "/2_basisvaardigheden/2_6_optreden_verstedelijkt_gebied" }
        ]
      },
      {
        text: "3. Vuurteam rollen",
        items: [
          { text: "3.1. Grenadier", link: "/3_vuurteam_rollen/3_1_grenadier" },
          { text: "3.2. Anti Tank", link: "/3_vuurteam_rollen/3_2_anti_tank" },
          { text: "3.3. Medic", link: "/3_vuurteam_rollen/3_3_medic" },
          { text: "3.4. Engineer", link: "/3_vuurteam_rollen/3_4_engineer" },
          { text: "3.5. DMR", link: "/3_vuurteam_rollen/3_5_dmr" }
        ]
      },
      {
        text: "4. Voertuigen",
        items: [
          { text: "4.1. Voertuigen", link: "/4_voertuigen/4_1_voertuigen" },
          { text: "4.2. Fastrope", link: "/4_voertuigen/4_2_fastrope" },
          { text: "4.3. Paradrop", link: "/4_voertuigen/4_3_paradrop" },
          { text: "4.4. Heli pilot", link: "/4_voertuigen/4_4_heli_pilot" },
          { text: "4.5. Jet pilot", link: "/4_voertuigen/4_5_jet_pilot" }
        ]
      },
      {
        text: "5. Speciale rollen",
        items: [
          { text: "5.1. J-tag", link: "/5_speciale_rollen/5_1_j_tag" },
          { text: "5.2. Mortier", link: "/5_speciale_rollen/5_2_mortier" }
        ]
      },
      {
        text: "6. Leiding",
        items: [
          { text: "6.1. GC", link: "/6_leiding/6_1_gc" },
          { text: "6.2. VTL", link: "/6_leiding/6_2_vtl" }
        ]
      },
      {
        text: "7. Missiemakers",
        items: [
          { text: "7.1. Template H3", link: "/7_missiemakers/template-h3" },
          { text: "7.2. Scenario eisen", link: "/7_missiemakers/scenario-eisen" },
          { text: "7.3. Tips en tricks", link: "/7_missiemakers/tips-en-tricks" }
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          text: '1. Algemene informatie',
          items: [
            { text: "1.1. Introductie", link: "/1_algemene_informatie/1_1_introductie" },
            { text: "1.2. Modset installeren", link: "/1_algemene_informatie/1_2_modset_installeren" },
            { text: "1.3. Toetsinstellingen", link: "/1_algemene_informatie/1_3_toetsinstellingen" },
            { text: "1.4. Troubleshooting", link: "/1_algemene_informatie/1_4_troubleshooting" },
            { text: "1.5. Mediabeleid", link: "/1_algemene_informatie/1_5_mediabeleid" }
          ]
        },
        {
          text: '2. Basisvaardigheden',
          items: [
            { text: "2.1. Basis EHBO", link: "/2_basisvaardigheden/2_1_basis_ehbo" },
            { text: "2.2. Navigeren", link: "/2_basisvaardigheden/2_2_navigeren" },
            { text: "2.3. Richting Afstand Doel", link: "/2_basisvaardigheden/2_3_richting_afstand_doel" },
            { text: "2.4. Reageren op contact", link: "/2_basisvaardigheden/2_4_reageren_op_contact" },
            { text: "2.5. 360 aanhouden", link: "/2_basisvaardigheden/2_5_360_aanhouden" },
            { text: "2.6. Optreden Verstedelijkt Gebied", link: "/2_basisvaardigheden/2_6_optreden_verstedelijkt_gebied" }
          ]
        },
        {
          text: '3. Vuurteam rollen',
          items: [
            { text: "3.1. Grenadier", link: "/3_vuurteam_rollen/3_1_grenadier" },
            { text: "3.2. Anti Tank", link: "/3_vuurteam_rollen/3_2_anti_tank" },
            { text: "3.3. Medic", link: "/3_vuurteam_rollen/3_3_medic" },
            { text: "3.4. Engineer", link: "/3_vuurteam_rollen/3_4_engineer" },
            { text: "3.5. DMR", link: "/3_vuurteam_rollen/3_5_dmr" }
          ]
        },
        {
          text: '4. Voertuigen',
          items: [
            { text: "4.1. Voertuigen", link: "/4_voertuigen/4_1_voertuigen" },
            { text: "4.2. Fastrope", link: "/4_voertuigen/4_2_fastrope" },
            { text: "4.3. Paradrop", link: "/4_voertuigen/4_3_paradrop" },
            { text: "4.4. Heli pilot", link: "/4_voertuigen/4_4_heli_pilot" },
            { text: "4.5. Jet pilot", link: "/4_voertuigen/4_5_jet_pilot" }
          ]
        },
        {
          text: '5. Speciale rollen',
          items: [
            { text: "5.1. J-tag", link: "/5_speciale_rollen/5_1_j_tag" },
            { text: "5.2. Mortier", link: "/5_speciale_rollen/5_2_mortier" }
          ]
        },
        {
          text: '6. Leiding',
          items: [
            { text: "6.1. GC", link: "/6_leiding/6_1_gc" },
            { text: "6.2. VTL", link: "/6_leiding/6_2_vtl" }
          ]
        },
        {
          text: '7. Missiemakers',
          items: [
            { text: "7.1. Template H3", link: "/7_missiemakers/template-h3" },
            { text: "7.2. Scenario eisen", link: "/7_missiemakers/scenario-eisen" },
            { text: "7.3. Tips en tricks", link: "/7_missiemakers/tips-en-tricks" }
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