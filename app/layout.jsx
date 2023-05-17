import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Főoldal - Apoapsis',
  description: 'Apoapsis Rendezvények Kft.',
}

export const marioCartFont = localFont({
  src: "./assets/fonts/mario_kart_f2.ttf",
  style: "normal",
  weight: "900"
})

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
