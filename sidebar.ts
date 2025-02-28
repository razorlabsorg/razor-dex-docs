import { Sidebar } from 'vocs'

export const sidebar: Sidebar = {
  '/docs/': [
    {
      text: 'Concepts',
      collapsed: true,
      items: [
        { text: 'Razor DEX Overview', link: '/docs/concepts/overview' },
        {
          text: 'The Razor DEX Protocol',
          link: '/docs/concepts/razor-dex-protocol',
        },
        {
          text: 'Protocol Concepts',
          collapsed: true,
          items: [
            { text: 'Swaps', link: '/docs/concepts/protocol/swaps' },
            {
              text: 'Token Integration Issues',
              link: '/docs/concepts/protocol/integration-issues',
            },
          ],
        },
        { text: 'Glossary', link: '/docs/concepts/glossary' },
      ],
    },
    {
      text: 'SDKs',
      collapsed: true,
      items: [
        { text: 'Core SDK',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/docs/sdks/core/overview' },
            { text: 'Technical Reference',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/docs/sdks/core/reference/overview' },
                { text: 'Classes',
                  collapsed: true, 
                  items: [
                    { text: 'NativeCurrency', link: '/docs/sdks/core/reference/classes/native-currency' },
                    { text: 'Token', link: '/docs/sdks/core/reference/classes/token' },
                    { text: 'CurrencyAmount', link: '/docs/sdks/core/reference/classes/currency-amount' },
                    { text: 'Fraction', link: '/docs/sdks/core/reference/classes/fraction' },
                    { text: 'Percent', link: '/docs/sdks/core/reference/classes/percent' },
                    { text: 'Price', link: '/docs/sdks/core/reference/classes/price' },
                    { text: 'Currency', link: '/docs/sdks/core/reference/classes/currency' },
                  ]
                },
                { text: 'Enums', 
                  collapsed: true,
                  items: [
                    { text: 'ChainId', link: '/docs/sdks/core/reference/enums/chain-id' },
                    { text: 'Rounding', link: '/docs/sdks/core/reference/enums/rounding' },
                    { text: 'TradeType', link: '/docs/sdks/core/reference/enums/trade-type' },
                  ]
                },
                {
                  text: 'Constants',
                  collapsed: true,
                  items: [
                    { text: 'BigintIsh', link: '/docs/sdks/core/reference/constants/bigintish' },
                  ]
                }
              ]
            }
          ]
        },
        { text: 'AMM SDK',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/docs/sdks/amm/overview' },
            { text: 'Guides',
              collapsed: true,
              items: [
                { text: 'Quick Start', link: '/docs/sdks/amm/guides/quick-start' },
                { text: 'Fetching Data', link: '/docs/sdks/amm/guides/fetching-data' },
                { text: 'Pricing', link: '/docs/sdks/amm/guides/pricing' },
                { text: 'Trading', link: '/docs/sdks/amm/guides/trading' },
                { text: 'Getting Pair Addresses', link: '/docs/sdks/amm/guides/getting-pair-addresses' },
              ]
            },
            { text: 'Reference',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/docs/sdks/amm/reference/getting-started' },
                { text: 'Pair', link: '/docs/sdks/amm/reference/pair' },
                { text: 'Route', link: '/docs/sdks/amm/reference/route' },
                { text: 'Trade', link: '/docs/sdks/amm/reference/trade' },
                { text: 'Other Exports', link: '/docs/sdks/amm/reference/other-exports' },
              ]
            }
          ]
        },
      ],
    }
  ],
}
