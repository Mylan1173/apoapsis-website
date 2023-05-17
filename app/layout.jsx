import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Főoldal - Apoapsis',
  description: 'Apoapsis Rendezvények Kft.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
