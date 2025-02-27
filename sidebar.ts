import { Sidebar } from 'vocs'

export const sidebar: Sidebar = {
  '/docs/': [
    {
      text: 'Concepts',
      items: [
        { text: 'Razor DEX Overview', link: '/docs/concepts/overview' },
        {
          text: 'The Razor DEX Protocol',
          link: '/docs/concepts/razor-dex-protocol',
        },
        {
          text: 'Protocol Concepts',
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
      items: [
        { text: 'Core SDK',
          items: [
            { text: 'Overview', link: '/docs/sdks/core/overview' },
            { text: 'Technical Reference',
              items: [
                { text: 'Overview', link: '/docs/sdks/core/reference/overview' },
                { text: 'Classes', 
                  items: [
                    { text: 'NativeCurrency', link: '/docs/sdks/core/reference/classes/native-currency' },
                    { text: 'Token', link: '/docs/sdks/core/reference/classes/token' },
                    { text: 'CurrencyAmount', link: '/docs/sdks/core/reference/classes/currency-amount' },
                    { text: 'Fraction', link: '/docs/sdks/core/reference/classes/fraction' },
                    { text: 'Percent', link: '/docs/sdks/core/reference/classes/percent' },
                    { text: 'Price', link: '/docs/sdks/core/reference/classes/price' },
                  ]
                },
                { text: 'Enums', 
                  items: [
                    { text: 'ChainId', link: '/docs/sdks/core/reference/enums/chain-id' },
                    { text: 'Rounding', link: '/docs/sdks/core/reference/enums/rounding' },
                    { text: 'TradeType', link: '/docs/sdks/core/reference/enums/trade-type' },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
}
