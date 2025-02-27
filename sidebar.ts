import { Sidebar } from "vocs";

export const sidebar: Sidebar = {
  '/docs/': [
    {
      text: 'Concepts',
      items: [
        { text: 'Razor DEX Overview', link: '/docs/concepts/overview' },
        { text: 'The Razor DEX Protocol', link: '/docs/concepts/razor-dex-protocol' },
        { text: 'Protocol Concepts',
          items: [
            { text: 'Swaps', link: '/docs/concepts/protocol/swaps' },
            { text: 'Fees', link: '/docs/concepts/protocol/fees' },
            { text: 'Token Integration Issues', link: '/docs/concepts/protocol/integration-issues' },
          ]
        },
        { text: 'Glossary', link: '/docs/concepts/glossary' }
      ]
    },
  ]
}