import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LT Wiki",
  description: "Documentation for Arma 3 Unit",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Missions', link: '/missions/' },
      { text: 'Training', link: '/training/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Unit Structure', link: '/guide/unit-structure' },
            { text: 'Rules & Regulations', link: '/guide/rules' }
          ]
        }
      ],
      '/missions/': [
        {
          text: 'Missions',
          items: [
            { text: 'Mission Types', link: '/missions/types' },
            { text: 'Mission Planning', link: '/missions/planning' },
            { text: 'Mission Execution', link: '/missions/execution' }
          ]
        }
      ],
      '/training/': [
        {
          text: 'Training',
          items: [
            { text: 'Basic Training', link: '/training/basic' },
            { text: 'Advanced Training', link: '/training/advanced' },
            { text: 'Specialized Training', link: '/training/specialized' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/lt-wiki' }
    ]
  }
}) 