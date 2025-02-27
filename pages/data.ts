import { Info, HelpCircle, BookOpen } from "react-feather";

export const actions = [
  {
    title: 'What is Razor DEX',
    icon: Info,
    to: '/concepts/overview',
    text: `Learn about the core concepts of the Razor DEX, Swaps, Pools, Concentrated Liquidity and more.`,
  },
  {
    title: 'Integrate with Razor DEX',
    icon: HelpCircle,
    to: '/sdk/overview',
    text: `Learn how to integrate with Razor DEX by building a dApp through guided steps and examples. `,
  },
  {
    title: 'The Razor smart contracts',
    icon: BookOpen,
    to: '/contracts/overview',
    text: `Learn about the architecture of the Razor DEX smart contracts through guided examples.`,
  },
]