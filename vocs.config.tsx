import { defineConfig } from 'vocs'
import { sidebar } from './sidebar'

export default defineConfig({
  vite: {
    server: {
      port: 2045,
      open: true,
    },
  },
  title: 'Razor DEX Docs',
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://docs.razordex.xyz'
      : 'http://localhost:2045',
  titleTemplate: '%s . Razor DEX',
  description: 'Documentation for Razor DEX, the pioneer DEX on Movement network',
  editLink: {
    pattern:
      'https://github.com/razorlabsorg/razor-dex-docs/edit/master/pages/:path',
    text: 'Suggest changes to this page',
  },
  iconUrl: { light: '/favicon.png', dark: '/favicon.png' },
  logoUrl: { light: '/logo.png', dark: '/logo.png' },
  rootDir: '.',
  search: {
    boostDocument(documentId) {
      if (documentId.startsWith('pages/docs')) return 3
      return 1
    },
  },
  sidebar,
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/razorlabsorg',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/razordao',
    },
    {
      icon: 'x',
      link: 'https://x.com/razordex_',
    },
  ],
  theme: {
    accentColor: {
      light: '#ff9318',
      dark: '#ffc517',
    },
  },
  topNav: [
    {
      text: 'Concepts',
      link: '/docs/concepts',
    },
    {
      text: 'SDKs',
      link: '/docs/sdks',
    },
    {
      text: 'Contracts',
      link: '/docs/contracts'
    },
    {
      text: 'APIs',
      link: '/docs/apis'
    }
  ],
})
