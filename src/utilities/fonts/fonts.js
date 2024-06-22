import localFont from 'next/font/local'
import { Inter, Open_Sans, Roboto, Tinos } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
})
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--openSans',
})
export const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--tinos',
})
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
})

export const Arial = localFont({
  src: './Arial.ttf',
  display: 'swap',
  variable: '--Arial',
})
export const ArialNarrowBold = localFont({
  src: './Arial-Narrow-Bold.ttf',
  display: 'swap',
  variable: '--ArialNarrowBold',
})
